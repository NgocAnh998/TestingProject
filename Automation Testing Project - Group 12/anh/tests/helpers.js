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
  // Horilla mở All Notifications như một drawer; nút mũi tên nằm ngay trong heading.
  // Không tìm nút Close toàn trang vì có thể chọn nhầm nút của drawer khác.
  const heading = await firstVisible(page.getByRole("heading", { name: /all notifications/i }));
  if (!heading) return;

  const clearAll = await firstVisible(page.getByRole("button", { name: /^clear all$/i }));
  if (!clearAll) return; // Drawer đã thu gọn.

  const toggle = await firstVisible(heading.getByRole("button"));
  if (toggle) {
    await toggle.click({ timeout: 5000 }).catch(() => {});
    await expect(clearAll).toBeHidden({ timeout: 5000 }).catch(() => {});
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
  const loose = new RegExp(regex.source.replace(/^\^/, "").replace(/\$/, ""), regex.flags.replace("g", ""));
  return await firstVisible(scope.getByRole("button", { name: loose }))
    || await firstVisible(scope.getByRole("link", { name: loose }))
    // Một số nút Horilla có text ngắn nhưng accessible name bị ghép thêm alt của icon.
    || await firstVisible(scope.locator("button, [role=button], a").filter({ hasText: loose }))
    || await firstVisible(scope.getByRole("listitem", { name: loose }));
}

async function findSearch(page) {
  return await firstVisible(page.getByRole("searchbox"))
    || await firstVisible(page.getByRole("textbox", { name: /search/i }))
    || await firstVisible(page.locator('input[placeholder*="search" i], input[aria-label*="search" i], input[name*="search" i]'));
}

async function findFilterPanel(page) {
  const heading = await firstVisible(page.getByRole("heading", { name: /^filter\b/i }));
  const text = await firstVisible(page.getByText(/^filter\b/i));
  const anchor = heading || text;
  if (!anchor) return null;

  // Nút Close của Horilla thường đặt icon/alt bên trong button, không có text node
  // "Close". Tìm container theo heading và các control của form thay vì text nút.
  const panel = anchor.locator("xpath=ancestor::div[.//input or .//select or .//textarea][1]");
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
  // Một số trang Horilla nạp bảng bằng AJAX sau khi DOM đã sẵn sàng.
  // Chờ cấu trúc danh sách hoặc trạng thái rỗng thay vì kiểm tra ngay lập tức.
  const structured = page.locator([
    "table:visible",
    "[role=table]:visible",
    "[role=grid]:visible",
    "[role=row]:visible",
    ".oh-sticky-table:visible",
    ".oh-sticky-table__tr:visible",
    "[class*=oh-table]:visible",
    "[class*=table-responsive]:visible",
    "[class*=kanban]:visible",
    "[class*=pipeline]:visible",
    "[class*=list-view]:visible",
    "[class*=oh-card]:visible",
    "[class*=card-container]:visible",
    "[class*=attendance-list]:visible",
    ".list-group:visible",
    ".pagination:visible",
    ".apexcharts-canvas:visible",
    "canvas:visible",
  ].join(", "));
  const emptyPattern = /no data|no records|no results|no .* (found|available)|empty|không có dữ liệu|không tìm thấy|chưa có/i;

  await expect.poll(async () => {
    const body = (await page.locator("body").innerText().catch(() => "")).replace(/\s+/g, " ");
    return (await hasVisibleLocator(structured)) || emptyPattern.test(body);
  }, {
    message: "Trang không hiển thị bảng, danh sách, card/kanban, biểu đồ hoặc trạng thái rỗng",
    timeout: 15000,
    intervals: [250, 500, 1000, 1500],
  }).toBeTruthy();
}

async function closeFilterPanel(page, panel) {
  // Nút đóng filter drawer của Horilla đôi khi nằm ngoài viewport dù drawer đang mở.
  // Dùng selector đặc trưng và force click để không bị lỗi do vị trí cuộn.
  const close = await firstVisible(page.locator(".oh-filter-panel__close"))
    || await findAction(page, /^close$/i, panel || page);

  expect(close, "Không tìm thấy nút đóng bảng bộ lọc").not.toBeNull();
  // Gọi click trực tiếp trên DOM vì locator.click không thể cuộn nút vào viewport ở một số layout.
  await close.evaluate((element) => element.click());
  await expect(panel || page.locator(".oh-filter-panel")).toBeHidden({ timeout: 10000 });
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
  closeFilterPanel,
  assertListOrEmpty,
  assertNoApplicationError,
  reloadAndVerify,
  escapeRegExp,
};
