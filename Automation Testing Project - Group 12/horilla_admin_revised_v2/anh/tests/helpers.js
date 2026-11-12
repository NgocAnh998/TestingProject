const { expect } = require("@playwright/test");

const APP_ERROR = /500 server error|traceback|application error|internal server error|server error/i;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Điều hướng thẳng đến trang cần kiểm thử, tránh tải Dashboard/menu ở mỗi testcase. */
async function openPage(page, route, moduleName, pageName) {
  const target = route.startsWith("http") ? route : route.startsWith("/") ? route : `/${route}`;
  await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
  await expect(page.locator("body")).toBeVisible({ timeout: 15000 });

  const current = new URL(page.url());
  const expected = new URL(target, process.env.BASE_URL || process.env.HORILLA_BASE_URL || "https://hr.demo.horilla.com");
  expect(
    current.pathname,
    `Không mở được ${pageName || moduleName}. Website chuyển tới ${current.pathname}${current.search}; có thể phiên đăng nhập hết hạn hoặc tài khoản không có quyền.`,
  ).toBe(expected.pathname);

  await assertNoApplicationError(page);
  const body = (await page.locator("body").innerText()).replace(/\s+/g, " ").trim();
  expect(body.length, `Trang ${pageName || moduleName} không có nội dung hiển thị`).toBeGreaterThan(10);
}

async function firstVisible(locator) {
  const count = await locator.count().catch(() => 0);
  for (let i = 0; i < count; i += 1) {
    const item = locator.nth(i);
    if (await item.isVisible().catch(() => false)) return item;
  }
  return null;
}

async function findAction(page, pattern, scope = page) {
  const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "i");
  // Horilla gắn alt text vào icon nên accessible name có thể là "Filter Filter".
  // Bỏ neo đầu/cuối để vẫn nhận diện đúng nút có thêm tên icon.
  const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$$/, ""), regex.flags);
  return await firstVisible(scope.getByRole("button", { name: loose }))
    || await firstVisible(scope.getByRole("link", { name: loose }))
    || await firstVisible(scope.getByRole("listitem", { name: loose }))
    || await firstVisible(scope.locator("a,button,[role=button],li").filter({ hasText: loose }));
}

async function findSearch(page) {
  return await firstVisible(page.getByRole("searchbox"))
    || await firstVisible(page.getByRole("textbox", { name: /search/i }))
    || await firstVisible(page.locator('input[placeholder*="search" i], input[aria-label*="search" i], input[name*="search" i]'));
}

async function findFilterPanel(page) {
  const heading = await firstVisible(page.getByRole("heading", { name: /^Filter\b/i }));
  if (!heading) return null;
  // Bản Horilla demo không gắn role=dialog/class filter-panel; nhận diện panel qua heading + nút Close.
  const panel = heading.locator("xpath=ancestor::*[.//button[normalize-space()='Close']][1]");
  return await firstVisible(panel) || heading;
}

async function openFilterPanel(page) {
  const alreadyOpen = await findFilterPanel(page);
  if (alreadyOpen) return alreadyOpen;
  const button = await findAction(page, /^filter$/i);
  expect(button, "Trang không có nút Filter khả dụng").not.toBeNull();
  await button.click();
  const panel = await findFilterPanel(page);
  expect(panel, "Nhấn Filter nhưng bảng bộ lọc không xuất hiện").not.toBeNull();
  await expect(panel).toBeVisible();
  return panel;
}

async function assertListOrEmpty(page) {
  const structured = page.locator(
    "table, [role=table], [role=grid], [class*=kanban], [class*=pipeline], [class*=list-view], [class*=oh-sticky-table], [class*=oh-card], [class*=card-container]",
  );
  const body = await page.locator("body").innerText();
  const empty = /no data|no records|no .* found|empty|không có dữ liệu|không tìm thấy|chưa có/i.test(body);
  const search = await findSearch(page);
  const filter = await findAction(page, /^filter$/i);
  const viewHeading = await firstVisible(page.getByRole("heading", { name: /attendance|onboarding|candidate|exit process/i }));
  // Một số trang demo không render table khi tập dữ liệu rỗng; xác nhận tiêu đề + control của chính trang.
  const renderedListView = Boolean(viewHeading && (search || filter));
  expect(
    (await structured.count()) > 0 || empty || renderedListView,
    "Trang không có bảng/danh sách, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ",
  ).toBeTruthy();
}

async function assertNoApplicationError(page) {
  const body = await page.locator("body").innerText().catch(() => "");
  expect(body, "Website hiển thị lỗi ứng dụng").not.toMatch(APP_ERROR);
}

async function reloadAndVerify(page, route) {
  await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
  const current = new URL(page.url());
  expect(current.pathname).toBe(route);
  await expect(page.locator("body")).toBeVisible();
  await assertNoApplicationError(page);
}

module.exports = {
  openPage,
  firstVisible,
  findAction,
  findSearch,
  findFilterPanel,
  openFilterPanel,
  assertListOrEmpty,
  assertNoApplicationError,
  reloadAndVerify,
  escapeRegExp,
};
