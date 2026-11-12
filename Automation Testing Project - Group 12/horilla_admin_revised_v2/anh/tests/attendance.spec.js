const { test, expect } = require("@playwright/test");
const {
  openPage, firstVisible, findAction, findFilterPanel,
  openFilterPanel, assertListOrEmpty, assertNoApplicationError, reloadAndVerify,
} = require("./helpers");

const routes = {
  dashboard: "/attendance/dashboard/",
  mine: "/attendance/view-my-attendance/",
  monthly: "/attendance/monthly-summary/",
};

async function openAttendance(page, route, label) {
  await openPage(page, route, "Attendance", label);
}

test.describe("Attendance - phạm vi Admin trên Horilla Demo", () => {
  test("AT01 - Mở trang Attendance", async ({ page }) => {
    await openAttendance(page, routes.dashboard, "Attendance Dashboard");
    await expect(page.locator("body")).toContainText(/attendance/i);
  });

  test("AT02 - Dashboard có vùng nội dung tổng quan", async ({ page }) => {
    await openAttendance(page, routes.dashboard, "Attendance Dashboard");
    const body = (await page.locator("body").innerText()).trim();
    expect(body.length).toBeGreaterThan(20);
    expect(body).toMatch(/attendance|dashboard|check.?in|check.?out/i);
  });

  test("AT03 - Dashboard không hiển thị lỗi ứng dụng", async ({ page }) => {
    await openAttendance(page, routes.dashboard, "Attendance Dashboard");
    await assertNoApplicationError(page);
  });

  test("AT04 - Mở My Attendances", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    await expect(page.locator("body")).toContainText(/my attendances|attendance/i);
  });

  test("AT05 - My Attendances hiển thị danh sách hoặc trạng thái rỗng", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    await assertListOrEmpty(page);
  });

  test("AT06 - My Attendances có các cột thông tin chấm công", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const headings = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
    const body = await page.locator("body").innerText();
    expect(`${headings} ${body}`).toMatch(/date|employee|check.?in|check.?out|shift|at work|attendance/i);
  });

  test("AT07 - Bộ lọc My Attendances hiển thị các trường chấm công", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    await expect(panel).toContainText(/Attendance Date|Min Hour|Validated|OT Approved/i);
    await expect(panel.getByRole("textbox", { name: /Attendance Date/i })).toBeVisible();
  });

  test("AT08 - Mở bảng bộ lọc My Attendances", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    await expect(panel).toContainText(/filter/i);
  });

  test("AT09 - Đóng bảng bộ lọc My Attendances", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    const close = await findAction(page, /^close$/i, panel);
    expect(close, "Bảng bộ lọc không có nút Close").not.toBeNull();
    await close.click();
    await expect(panel).toBeHidden();
  });

  test("AT10 - Xóa điều kiện lọc trong đúng bảng bộ lọc", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    const clear = await firstVisible(panel.locator(".oh-filter-panel__clear, button").filter({ hasText: /clear all|clear|reset/i }));
    expect(clear, "Không tìm thấy nút xóa điều kiện trong bảng Filter").not.toBeNull();
    await clear.scrollIntoViewIfNeeded();
    await clear.click();
    await assertNoApplicationError(page);
  });

  test("AT11 - Mở Monthly Summary", async ({ page }) => {
    await openAttendance(page, routes.monthly, "Monthly Summary");
    await expect(page.locator("body")).toContainText(/monthly summary|monthly|attendance/i);
  });

  test("AT12 - Monthly Summary hiển thị dữ liệu hoặc trạng thái rỗng", async ({ page }) => {
    await openAttendance(page, routes.monthly, "Monthly Summary");
    await assertListOrEmpty(page);
  });

  test("AT13 - Tải lại My Attendances không phát sinh lỗi", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    await reloadAndVerify(page, routes.mine);
    await assertListOrEmpty(page);
  });

  test("AT14 - Tải lại Monthly Summary không phát sinh lỗi", async ({ page }) => {
    await openAttendance(page, routes.monthly, "Monthly Summary");
    await reloadAndVerify(page, routes.monthly);
  });
});
