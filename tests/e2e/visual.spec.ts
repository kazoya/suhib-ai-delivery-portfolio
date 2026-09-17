import { test } from "@playwright/test";
import fs from "node:fs";

/** Captures reference screenshots into test-results/visual (ignored); the committed docs/screenshots are frozen evidence. */
const SHOTS: { path: string; name: string }[] = [
  { path: "/", name: "home" },
  { path: "/journal", name: "journal" },
  { path: "/en/journal", name: "en-journal" },
  { path: "/projects/factories", name: "case-study" },
  { path: "/cv", name: "cv" },
];

for (const s of SHOTS) {
  test(`after: ${s.name}`, async ({ page }, testInfo) => {
    const w = testInfo.project.name === "mobile" ? 390 : 1440;
    if (testInfo.project.name === "desktop") {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto(s.path);
      await page.evaluate(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")));
      fs.mkdirSync("test-results/visual", { recursive: true });
      await page.screenshot({ path: `test-results/visual/after-${s.name}-768.png`, fullPage: false });
      await page.setViewportSize({ width: 1440, height: 900 });
    }
    await page.goto(s.path);
    await page.evaluate(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")));
    fs.mkdirSync("test-results/visual", { recursive: true });
    await page.screenshot({ path: `test-results/visual/after-${s.name}-${w}.png`, fullPage: s.name === "journal" && w === 1440 });
  });
}
