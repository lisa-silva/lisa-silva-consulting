import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const pages = [
  ["homepage", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["agentairdirect", "/agentairdirect"],
];

await mkdir("screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  colorScheme: "light",
});

for (const [name, path] of pages) {
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:3000${path}`, { waitUntil: "networkidle" });
  const revealTargets = page.locator("main > section, main .card");
  for (let index = 0; index < await revealTargets.count(); index += 1) {
    await revealTargets.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(160);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
  await page.screenshot({ path: `screenshots/lisa-silva-${name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
