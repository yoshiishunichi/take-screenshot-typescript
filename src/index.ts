import { chromium } from "playwright";
require("dotenv").config();

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 2,
  });
  await page.goto(process.env.URL || "https://www.google.com/");
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: `image.png`,
    clip: { x: 0, y: 0, width: 1280, height: 720 },
  });
  await browser.close();
})();
