const { expect } = require("@playwright/test");

const APP_ERROR = /500 server error|traceback|application error|internal server error|server error/i;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function firstVisible(locator) {
  const count = await locator.count().catch(() => 0);
  for (let i = 0; i < count; i += 1) {
    const item = locator.nth(i);
    if (await item.isVisible().catch(() => false)) return item;
  }
  return null;
}

async function closeBlockingNotification(page) {
  // Horilla đôi khi giữ drawer All Notifications mở từ storage/session trước đó.
  const drawerText = page.getByText(/all notifications/i).first();
  if (!(await drawerText.isVisible().catch(() => false))) return;

  const close = await firstVisible(page.getByRole("button", { name: /close|dismiss/i }))
    || await firstVisible(page.locator('button[aria-label*="close" i], [role="button"][aria-label*="close" i]'));
  if (close) {
    await close.click().catch(() => {});
    await expect(drawerText).toBeHidden({ timeout: 5000 }).catch(() => {});
  }
}

async function waitForPageContent(page, moduleName, pageName) {
  // Chờ nội dung ứng dụng được render, không chỉ chờ DOM/body xuất hiện.
  const modulePattern = moduleName === "Attendance"
    ? /attendance|monthly summary|check.?in|check.?out/i
    : moduleName === "Onboarding"
      ? /onboarding|candidate|applicant|stage/i
      : /offboarding|exit process|resignation|employee/i;

  await expect.poll(async () => {
    const text = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ").trim();
    return text.length > 20 && modulePattern.test(text);
  }, {
    message: `Nội dung ${pageName || moduleName} chưa được render đầy đủ`,
    timeout: 20000,
    intervals: [250, 500, 1000, 1500],
  }).toBeTruthy();

  await closeBlockingNotification(page);
  await expect(page.locator("body")).toBeVisible({ timeout: 10000 });
}

async function openPage(page, route, moduleName, pageName) {
  const target = route.startsWith("http") ? route : route.startsWith("/") ? route : `/${route}`;
  await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
  await expect(page.locator("body")).toBeVisible({ timeout: 15000 });

  const expected = new URL(target, process.env.BASE_URL || process.env.HORILLA_BASE_URL || "https://hr.demo.horilla.com");
  await expect.poll(() => new URL(page.url()).pathname, {
    message: `Website không mở đúng trang ${pageName || moduleName}`,
    timeout: 15000,
  }).toBe(expected.pathname);

  await waitForPageContent(page, moduleName, pageName);
  await assertNoApplicationError(page);
}

async function findAction(page, pattern, scope = page) {
  const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "i");
  const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$$/, ""), regex.flags.replace("g", ""));
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
  const heading = await firstVisible(page.getByRole("heading", { name: /^filter\b/i }));
  const text = await firstVisible(page.getByText(/^filter$/i));
  const anchor = heading || text;
  if (!anchor) return null;

  // Tìm container gần nhất có nút Close; fallback là vùng chứa heading Filter.
  const panel = anchor.locator("xpath=ancestor::*[.//button[normalize-space()='Close'] or .//*[@role='button' and contains(translate(@aria-label,'CLOSE','close'),'close')]][1]");
  return await firstVisible(panel) || anchor;
}

async function openFilterPanel(page) {
  let panel = await findFilterPanel(page);
  if (panel && await panel.isVisible().catch(() => false)) return panel;

  const button = await findAction(page, /^filter$/i);
  expect(button, "Trang không có nút Filter khả dụng").not.toBeNull();
  await button.click();
  await expect.poll(async () => {
    const candidate = await findFilterPanel(page);
    return Boolean(candidate && await candidate.isVisible().catch(() => false));
  }, { message: "Nhấn Filter nhưng bảng bộ lọc không xuất hiện", timeout: 10000 }).toBeTruthy();
  panel = await findFilterPanel(page);
  expect(panel).not.toBeNull();
  return panel;
}

async function hasVisibleLocator(locator) {
  const count = await locator.count().catch(() => 0);
  for (let i = 0; i < count; i += 1) {
    if (await locator.nth(i).isVisible().catch(() => false)) return true;
  }
  return false;
}

async function assertListOrEmpty(page) {
  const structured = page.locator(
    "table:visible, [role=table]:visible, [role=grid]:visible, [class*=kanban]:visible, [class*=pipeline]:visible, [class*=list-view]:visible, [class*=oh-sticky-table]:visible, [class*=oh-card]:visible, [class*=card-container]:visible",
  );
  const body = (await page.locator("body").innerText()).replace(/\s+/g, " ");
  const empty = /no data|no records|no .* found|empty|không có dữ liệu|không tìm thấy|chưa có/i.test(body);
  const search = await findSearch(page);
  const filter = await findAction(page, /^filter$/i);
  const list = await findAction(page, /^list$/i);
  const card = await findAction(page, /^card$/i);
  const moduleContent = /attendance|monthly summary|onboarding|candidate|exit process|offboarding/i.test(body);
  const renderedListView = Boolean(moduleContent && (search || filter || list || card));
  const hasStructure = await hasVisibleLocator(structured);

  expect(
    hasStructure || empty || renderedListView,
    "Trang không có bảng/danh sách hiển thị, trạng thái rỗng hoặc bộ điều khiển danh sách hợp lệ",
  ).toBeTruthy();
}

async function assertNoApplicationError(page) {
  const body = await page.locator("body").innerText().catch(() => "");
  expect(body, "Website hiển thị lỗi ứng dụng").not.toMatch(APP_ERROR);
}

async function reloadAndVerify(page, route) {
  await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
  await expect.poll(() => new URL(page.url()).pathname, {
    message: "Sau khi tải lại, website chuyển khỏi URL kiểm thử",
    timeout: 15000,
  }).toBe(route);
  await waitForPageContent(page, route.includes("attendance") ? "Attendance" : route.includes("onboarding") ? "Onboarding" : "Offboarding", route);
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
