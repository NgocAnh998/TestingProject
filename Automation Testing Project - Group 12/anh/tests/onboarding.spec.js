const { test, expect } = require("@playwright/test");
const {
  openPage, findAction, findSearch, openFilterPanel, assertListOrEmpty,
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
    expect(`${headers} ${body}`).toMatch(/candidate|name|email|phone|stage|status/i);
  });

  test("ON08 - Tìm kiếm Candidate nếu ô tìm kiếm được hiển thị", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const search = await findSearch(page);
    expect(search, "Candidate View không hiển thị ô Search").not.toBeNull();
    await search.fill("candidate-not-existing-qa");
    await search.press("Enter").catch(() => {});
    await assertNoApplicationError(page);
    await search.fill("");
    await search.press("Enter").catch(() => {});
  });

  test("ON09 - Candidate View mở được bộ lọc nếu có nút Filter", async ({ page }) => {
    await openOnboarding(page, routes.candidates, "Candidate View");
    const filter = await findAction(page, /^filter$/i);
    expect(filter, "Candidate View không có nút Filter").not.toBeNull();
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
});
