const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

(async () => {
  const authDir = path.join(__dirname, "playwright", ".auth");
  const authFile = path.join(authDir, "user.json");

  fs.mkdirSync(authDir, { recursive: true });

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://hr.demo.horilla.com/");

  console.log("Hãy đăng nhập Horilla trên trình duyệt vừa mở.");

  await page.waitForURL((url) => !url.pathname.includes("login"), {
    timeout: 0,
  });

  await context.storageState({ path: authFile });

  console.log("Đã lưu trạng thái đăng nhập:", authFile);

  await browser.close();
})();
