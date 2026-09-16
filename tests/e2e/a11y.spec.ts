import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";

const PAGES = ["/", "/journal", "/projects", "/projects/project1", "/cv", "/platform", "/en", "/en/journal"];

for (const p of PAGES) {
  for (const theme of ["light", "dark"] as const) {
    test(`axe: ${p} (${theme})`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "desktop", "axe runs once per page");
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(`${p}${p.includes("?") ? "&" : "?"}theme=${theme}`);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      const out = path.join("docs", "reports", "axe");
      fs.mkdirSync(out, { recursive: true });
      fs.writeFileSync(
        path.join(out, `${p === "/" ? "home" : p.replace(/\//g, "_").replace(/^_/, "")}-${theme}.json`),
        JSON.stringify(results.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })), null, 2),
      );
      expect(serious, JSON.stringify(serious.map((v) => ({ id: v.id, help: v.help, targets: v.nodes.slice(0, 3).map((n) => n.target) })), null, 2)).toEqual([]);
    });
  }
}
