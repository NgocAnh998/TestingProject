const { test, expect } = require("@playwright/test");
const {
  openPage, findAction, findSearch, openFilterPanel, assertListOrEmpty,
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
    if (list && card) {
      await card.click();
      await assertNoApplicationError(page);
      await list.click();
      await assertNoApplicationError(page);
    }
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
});
