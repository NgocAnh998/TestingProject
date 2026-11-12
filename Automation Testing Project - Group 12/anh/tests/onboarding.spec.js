const { test, expect } = require("@playwright/test");
const {
  openPage, findAction, findSearch, firstVisible,
  openFilterPanel, closeFilterPanel, assertListOrEmpty,
  assertNoApplicationError, reloadAndVerify,
} = require("./helpers");

const routes = {
  pipeline: process.env.ONBOARDING_VIEW_ROUTE || "/onboarding/onboarding-view/",
  candidates: process.env.ONBOARDING_CANDIDATE_VIEW_ROUTE || "/onboarding/candidates-view/",
};

async function openOnboarding(page, route, label) {
  await openPage(page, route, "Onboarding", label);
}

test.describe("Onboarding - phạm vi Admin trên Horilla Demo", () => {
  test("ON01 - Mở Onboarding View", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await expect(page.locator("body")).toContainText(/onboarding|candidate|stage/i);
  });

  test("ON02 - Onboarding View hiển thị vùng nội dung", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    expect((await page.locator("body").innerText()).trim().length).toBeGreaterThan(20);
  });

  test("ON03 - Onboarding View không hiển thị lỗi ứng dụng", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await assertNoApplicationError(page);
  });

  test("ON04 - Onboarding View hiển thị pipeline, danh sách hoặc trạng thái rỗng", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await assertListOrEmpty(page);
  });

  test("ON05 - Mở Candidate View", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    await expect(page.locator("body")).toContainText(/candidate|applicant/i);
  });

  test("ON06 - Candidate View hiển thị danh sách hoặc trạng thái rỗng", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    await assertListOrEmpty(page);
  });

  test("ON07 - Candidate View có cấu trúc thông tin", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const body = await page.locator("body").innerText();
    const headers = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
    expect([headers, body].join(" ")).toMatch(/candidate|name|email|phone|stage|status/i);
  });

  test("ON08 - Tìm kiếm Candidate nếu ô tìm kiếm được hiển thị", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const search = await findSearch(page);
    test.skip(!search, "Candidate View không cung cấp ô Search trong giao diện hiện tại.");
    await search.fill("candidate-not-existing-qa");
    await search.press("Enter").catch(() => {});
    await assertNoApplicationError(page);
    await search.fill("");
    await search.press("Enter").catch(() => {});
  });

  test("ON09 - Candidate View mở được bộ lọc nếu có nút Filter", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const filter = await findAction(page, /^filter$/i);
    test.skip(!filter, "Candidate View không cung cấp bộ lọc trong giao diện hiện tại.");
    const panel = await openFilterPanel(page);
    await expect(panel).toBeVisible();
  });

  test("ON10 - Tải lại Candidate View không phát sinh lỗi", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    await reloadAndVerify(page, routes.candidates);
    await assertListOrEmpty(page);
  });

  test("ON11 - Tải lại Onboarding View không phát sinh lỗi", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await reloadAndVerify(page, routes.pipeline);
  });

  test("ON12 - Pipeline có nội dung về stage hoặc tiến trình onboarding", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await expect(page.locator("body")).toContainText(/stage|candidate|task|onboarding/i);
    await assertNoApplicationError(page);
  });

  test("ON13 - Pipeline có vùng hiển thị các giai đoạn hoặc trạng thái rỗng", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    const body = await page.locator("body").innerText();
    const stageArea = page.locator("[class*=stage]:visible, [class*=pipeline]:visible, [class*=kanban]:visible, [class*=onboarding]:visible");
    expect(body).toMatch(/stage|candidate|task|no data|no records|empty/i);
    expect(await stageArea.count()).toBeGreaterThan(0);
  });

  test("ON14 - Candidate View hiển thị các trường thông tin ứng viên", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const body = await page.locator("body").innerText();
    const headers = (await page.locator("th, [role=columnheader]").allInnerTexts()).join(" ");
    expect([headers, body].join(" ")).toMatch(/candidate|name|email|phone|joining date|job position|recruitment source/i);
  });

  test("ON15 - Ô tìm kiếm Candidate hiển thị và có thể nhập liệu", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const search = await findSearch(page);
    test.skip(!search, "Candidate View không có ô tìm kiếm trong giao diện hiện tại.");
    await expect(search).toBeVisible();
    await expect(search).toBeEnabled();
    await search.fill("candidate-search-check");
    await expect(search).toHaveValue("candidate-search-check");
  });

  test("ON16 - Tìm Candidate không tồn tại không làm lỗi trang", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const search = await findSearch(page);
    test.skip(!search, "Candidate View không có ô tìm kiếm trong giao diện hiện tại.");
    await search.fill("qa-no-candidate-000000");
    await search.press("Enter").catch(() => {});
    await assertNoApplicationError(page);
    await expect(page.locator("body")).toContainText(/candidate|no result|no data|no record|empty/i);
  });

  test("ON17 - Có thể xóa từ khóa tìm kiếm Candidate", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const search = await findSearch(page);
    test.skip(!search, "Candidate View không có ô tìm kiếm trong giao diện hiện tại.");
    await search.fill("qa-no-candidate-000000");
    await search.press("Enter").catch(() => {});
    await search.fill("");
    await search.press("Enter").catch(() => {});
    await expect(search).toHaveValue("");
    await assertNoApplicationError(page);
  });

  test("ON18 - Bộ lọc Candidate hiển thị các trường nhập liệu", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const panel = await openFilterPanel(page);
    const controls = panel.locator("input:not([type=hidden]), select, textarea");
    expect(await controls.count()).toBeGreaterThan(0);
    await expect(await firstVisible(controls)).toBeVisible();
  });

  test("ON19 - Đóng bảng bộ lọc Candidate", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const panel = await openFilterPanel(page);
    await closeFilterPanel(page, panel);
  });

  test("ON20 - Candidate View có thể chọn bản ghi nếu danh sách hỗ trợ checkbox", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const checkbox = await firstVisible(page.getByRole("checkbox"));
    test.skip(!checkbox, "Candidate View không hiển thị checkbox chọn bản ghi.");
    const before = await checkbox.isChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked({ checked: !before });
    await checkbox.click();
    await expect(checkbox).toBeChecked({ checked: before });
  });

  test("ON21 - Điều hướng qua lại giữa Onboarding View và Candidate View", async ({ page }) => {
    await openOnboarding(page, routes.pipeline, "Onboarding View");
    await page.goto(routes.candidates, { waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe(routes.candidates);
    await page.goBack({ waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe(routes.pipeline);
    await page.goForward({ waitUntil: "domcontentloaded" });
    await expect.poll(() => new URL(page.url()).pathname).toBe(routes.candidates);
    await assertNoApplicationError(page);
  });
});
