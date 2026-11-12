const { test, expect } = require("@playwright/test");
const {
  openPage, firstVisible,
  openFilterPanel, closeFilterPanel, assertListOrEmpty,
  assertNoApplicationError, reloadAndVerify,
} = require("./helpers");

const routes = {
  dashboard: "/attendance/dashboard/",
  mine: "/attendance/view-my-attendance/",
  monthly: "/attendance/monthly-summary/",
  attendances: "/attendance/attendance-view/",
  requests: "/attendance/request-attendance-view/",
  workStatus: "/attendance/work-status/",
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
    expect([headings, body].join(" ")).toMatch(/date|employee|check.?in|check.?out|shift|at work|attendance/i);
  });

  test("AT07 - Bộ lọc My Attendances hiển thị các trường chấm công", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    await expect(panel).toContainText(/Attendance Date|Min Hour|Validated|OT Approved/i);
    const filterControls = panel.locator("input, select, textarea");
    await expect(filterControls.first()).toBeVisible();
  });

  test("AT08 - Mở bảng bộ lọc My Attendances", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    await expect(panel).toContainText(/filter/i);
  });

  test("AT09 - Đóng bảng bộ lọc My Attendances", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    await closeFilterPanel(page, panel);
  });

  test("AT10 - Bảng bộ lọc có thể thao tác với trường lọc", async ({ page }) => {
    await openAttendance(page, routes.mine, "My Attendances");
    const panel = await openFilterPanel(page);
    const control = await firstVisible(panel.locator("input:not([type=hidden]), select, textarea"));
    expect(control, "Bảng lọc không có control đang hiển thị").not.toBeNull();
    await expect(control).toBeVisible();
    await expect(panel).toContainText(/attendance date|min hour|validated|ot approved/i);
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

  test("AT15 - Mở trang Attendances dành cho Admin", async ({ page }) => {
    await openAttendance(page, routes.attendances, "Attendances");
    await expect(page.locator("body")).toContainText(/attendances|attendance|employee/i);
  });

  test("AT16 - Attendances hiển thị bảng hoặc trạng thái không có dữ liệu", async ({ page }) => {
    await openAttendance(page, routes.attendances, "Attendances");
    await assertListOrEmpty(page);
  });

  test("AT17 - Attendances có thông tin nhân viên và thời gian chấm công", async ({ page }) => {
    await openAttendance(page, routes.attendances, "Attendances");
    const headers = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
    const body = await page.locator("body").innerText();
    expect([headers, body].join(" ")).toMatch(/employee|date|check.?in|check.?out|shift|status|attendance/i);
  });

  test("AT18 - Mở Attendance Requests", async ({ page }) => {
    await openAttendance(page, routes.requests, "Attendance Requests");
    await expect(page.locator("body")).toContainText(/attendance request|requests|attendance/i);
  });

  test("AT19 - Attendance Requests hiển thị danh sách hoặc trạng thái rỗng", async ({ page }) => {
    await openAttendance(page, routes.requests, "Attendance Requests");
    await assertListOrEmpty(page);
  });

  test("AT20 - Attendance Requests hiển thị thông tin xử lý yêu cầu", async ({ page }) => {
    await openAttendance(page, routes.requests, "Attendance Requests");
    const body = await page.locator("body").innerText();
    const headers = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
    expect([headers, body].join(" ")).toMatch(/request|employee|date|status|attendance|approval/i);
  });

  test("AT21 - Daily Work Status chuyển đến Monthly Summary ở chế độ Day-wise", async ({ page }) => {
    // Horilla hiện giữ URL work-status cũ nhưng chuyển nó sang Monthly Summary?view=daily.
    await page.goto(routes.workStatus, { waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname, {
      message: "Daily Work Status không chuyển đến Monthly Summary",
      timeout: 15000,
    }).toBe(routes.monthly);
    await expect.poll(() => new URL(page.url()).searchParams.get("view"), {
      message: "Monthly Summary không mở ở chế độ Day-wise",
      timeout: 10000,
    }).toBe("daily");

    await expect(page.locator("body")).toContainText(/monthly attendance summary|attendance|day.?wise/i);
    await assertListOrEmpty(page);
    await assertNoApplicationError(page);
  });
});
