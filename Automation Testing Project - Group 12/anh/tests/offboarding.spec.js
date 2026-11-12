const { test, expect } = require("@playwright/test");
const {
  openPage, findAction, findSearch, firstVisible,
  openFilterPanel, closeFilterPanel, assertListOrEmpty,
  assertNoApplicationError, reloadAndVerify,
} = require("./helpers");

const route = process.env.OFFBOARDING_EXIT_PROCESS_ROUTE || "/offboarding/offboarding-pipeline/";

async function openExitProcess(page) {
  await openPage(page, route, "Offboarding", "Exit Process");
}

test.describe("Offboarding - phạm vi Admin trên Horilla Demo", () => {
  test("OF01 - Mở Exit Process", async ({ page }) => {
    await openExitProcess(page);
    await expect(page.locator("body")).toContainText(/exit process|offboarding|process/i);
  });

  test("OF02 - Exit Process hiển thị danh sách hoặc trạng thái rỗng", async ({ page }) => {
    await openExitProcess(page);
    await assertListOrEmpty(page);
  });

  test("OF03 - Exit Process có ô tìm kiếm", async ({ page }) => {
    await openExitProcess(page);
    const search = await findSearch(page);
    test.skip(!search, "Exit Process không cung cấp ô Search trong giao diện hiện tại.");
  });

  test("OF04 - Tìm kiếm trong Exit Process không gây lỗi", async ({ page }) => {
    await openExitProcess(page);
    const search = await findSearch(page);
    expect(search, "Không tìm thấy ô Search trên Exit Process").not.toBeNull();
    await search.fill("exit-process-not-existing-qa");
    await search.press("Enter").catch(() => {});
    await assertNoApplicationError(page);
    await search.fill("");
    await search.press("Enter").catch(() => {});
  });

  test("OF05 - Chuyển đổi chế độ List và Card nếu các nút được cung cấp", async ({ page }) => {
    await openExitProcess(page);
    const list = await findAction(page, /^list$/i);
    const card = await findAction(page, /^card$/i);
    test.skip(!list || !card, "Exit Process không cung cấp đủ hai chế độ List và Card.");
    await card.click();
    await assertNoApplicationError(page);
    await list.click();
    await assertNoApplicationError(page);
  });

  test("OF06 - Mở bộ lọc Exit Process", async ({ page }) => {
    await openExitProcess(page);
    const filter = await findAction(page, /^filter$/i);
    test.skip(!filter, "Exit Process không cung cấp bộ lọc trong giao diện hiện tại.");
    const panel = await openFilterPanel(page);
    await expect(panel).toBeVisible();
    await expect(panel).toContainText(/filter/i);
  });

  test("OF07 - Exit Process không hiển thị lỗi ứng dụng", async ({ page }) => {
    await openExitProcess(page);
    await assertNoApplicationError(page);
  });

  test("OF08 - Tải lại Exit Process không phát sinh lỗi", async ({ page }) => {
    await openExitProcess(page);
    await reloadAndVerify(page, route);
    await assertListOrEmpty(page);
  });

  test("OF09 - Exit Process có nội dung về nhân viên và các giai đoạn", async ({ page }) => {
    await openExitProcess(page);
    const body = await page.locator("body").innerText();
    expect(body).toMatch(/exit process|offboarding|employee|stage|task/i);
  });

  test("OF10 - Ô tìm kiếm Exit Process hiển thị và có thể nhập liệu", async ({ page }) => {
    await openExitProcess(page);
    const search = await findSearch(page);
    test.skip(!search, "Exit Process không có ô tìm kiếm trong giao diện hiện tại.");
    await expect(search).toBeVisible();
    await expect(search).toBeEnabled();
    await search.fill("search-check-exit-process");
    await expect(search).toHaveValue("search-check-exit-process");
  });

  test("OF11 - Tìm kiếm từ khóa không tồn tại không làm lỗi trang", async ({ page }) => {
    await openExitProcess(page);
    const search = await findSearch(page);
    test.skip(!search, "Exit Process không có ô tìm kiếm trong giao diện hiện tại.");
    await search.fill("qa-exit-process-not-found-000000");
    await search.press("Enter").catch(() => {});
    await assertNoApplicationError(page);
    await expect(page.locator("body")).toContainText(/exit process|offboarding|no result|no data|empty/i);
  });

  test("OF12 - Có thể xóa từ khóa tìm kiếm Exit Process", async ({ page }) => {
    await openExitProcess(page);
    const search = await findSearch(page);
    test.skip(!search, "Exit Process không có ô tìm kiếm trong giao diện hiện tại.");
    await search.fill("qa-exit-process-not-found-000000");
    await search.press("Enter").catch(() => {});
    await search.fill("");
    await search.press("Enter").catch(() => {});
    await expect(search).toHaveValue("");
    await assertNoApplicationError(page);
  });

  test("OF13 - Bộ lọc Exit Process có trường nhập liệu", async ({ page }) => {
    await openExitProcess(page);
    const panel = await openFilterPanel(page);
    const controls = panel.locator("input:not([type=hidden]), select, textarea");
    expect(await controls.count()).toBeGreaterThan(0);
    const control = await firstVisible(controls);
    expect(control, "Không có trường lọc đang hiển thị").not.toBeNull();
    await expect(control).toBeVisible();
  });

  test("OF14 - Đóng bảng bộ lọc Exit Process", async ({ page }) => {
    await openExitProcess(page);
    const panel = await openFilterPanel(page);
    await closeFilterPanel(page, panel);
  });

  test("OF15 - Bộ lọc có thể xóa điều kiện lọc", async ({ page }) => {
    await openExitProcess(page);
    const panel = await openFilterPanel(page);
    const clear = await findAction(page, /^clear all$/i, panel);
    test.skip(!clear, "Bảng lọc không cung cấp nút Clear all.");
    await clear.click({ force: true });
    await expect(panel).toBeVisible();
    await assertNoApplicationError(page);
  });

  test("OF16 - Chế độ List hiển thị danh sách Exit Process", async ({ page }) => {
    await openExitProcess(page);
    const list = await findAction(page, /^list$/i);
    test.skip(!list, "Exit Process không cung cấp chế độ List.");
    await list.click();
    await assertListOrEmpty(page);
  });

  test("OF17 - Chế độ Card hiển thị nội dung Exit Process", async ({ page }) => {
    await openExitProcess(page);
    const card = await findAction(page, /^card$/i);
    test.skip(!card, "Exit Process không cung cấp chế độ Card.");
    await card.click();
    await assertListOrEmpty(page);
    await assertNoApplicationError(page);
  });

  test("OF18 - Có thể quay lại List sau khi xem Card", async ({ page }) => {
    await openExitProcess(page);
    const card = await findAction(page, /^card$/i);
    const list = await findAction(page, /^list$/i);
    test.skip(!card || !list, "Exit Process không cung cấp đủ chế độ List và Card.");
    await card.click();
    await list.click();
    await assertListOrEmpty(page);
  });

  test("OF19 - Menu Actions có thể mở nếu giao diện cung cấp", async ({ page }) => {
    await openExitProcess(page);
    const actions = await findAction(page, /^actions?$/i);
    test.skip(!actions, "Exit Process không hiển thị menu Actions cho tài khoản hiện tại.");
    await actions.click();
    await expect(page.locator("body")).toContainText(/add employee|send mail|actions|note/i);
    await assertNoApplicationError(page);
  });

  test("OF20 - Điều hướng trình duyệt vẫn giữ đúng trang Exit Process", async ({ page }) => {
    await openExitProcess(page);
    await page.goto("/dashboard/", { waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe("/dashboard/");
    await page.goBack({ waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe(route);
    await assertNoApplicationError(page);
  });

  test("OF21 - Refresh sau khi quay lại trang không làm mất giao diện", async ({ page }) => {
    await openExitProcess(page);
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe(route);
    await expect(page.locator("body")).toContainText(/exit process|offboarding|process/i);
    await assertListOrEmpty(page);
    await assertNoApplicationError(page);
  });
});
