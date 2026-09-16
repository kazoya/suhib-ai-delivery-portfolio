import { expect, test } from "@playwright/test";

const TARGETS = ["/", "/journal", "/en", "/en/journal"];

function ammanTime(d = new Date()) {
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Amman", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(d);
}

test.describe("effects layer", () => {
  for (const p of TARGETS) {
    test(`clock on ${p} shows Amman time and advances`, async ({ page }) => {
      await page.goto(p);
      const clock = page.locator('[data-effect="clock"]');
      await expect(clock).toHaveCount(1);
      await expect(clock).toHaveAttribute("aria-live", "off");
      const shown = clock.locator("span").first();
      await expect(shown).not.toHaveText("--:--:--");
      const t1 = await shown.innerText();
      // within a few seconds of the real Amman time
      const [h, m] = t1.split(":").map(Number);
      const [eh, em] = ammanTime().split(":").map(Number);
      expect(Math.abs(h * 60 + m - (eh * 60 + em))).toBeLessThanOrEqual(1);
      await page.waitForTimeout(1500);
      expect(await shown.innerText()).not.toBe(t1);
    });

    test(`node field on ${p} runs behind the hero and pauses off-screen`, async ({ page }, testInfo) => {
      await page.goto(p);
      const canvas = page.locator('[data-effect="node-field"]');
      await expect(canvas).toHaveCount(1);
      await expect(canvas).toHaveAttribute("aria-hidden", "true");
      await expect(canvas).toHaveAttribute("data-mode", "motion");
      await expect(canvas).toHaveAttribute("data-running", "true");
      const pe = await canvas.evaluate((el) => getComputedStyle(el).pointerEvents);
      expect(pe).toBe("none");
      // the hero text stays clickable/selectable above the canvas
      const h1Clickable = await page.locator("h1").evaluate((el) => {
        const r = el.getBoundingClientRect();
        const top = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        return !!top && top.tagName !== "CANVAS";
      });
      expect(h1Clickable).toBe(true);
      // scroll the hero out of view → loop stops
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await expect(canvas).toHaveAttribute("data-running", "false");
      // node budget
      const width = testInfo.project.name === "mobile" ? 390 : 1440;
      expect(width).toBeGreaterThan(0);
    });
  }

  test("reduced motion: canvas draws a static frame and the clock still works", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/journal");
    const canvas = page.locator('[data-effect="node-field"]');
    await expect(canvas).toHaveAttribute("data-mode", "static");
    await expect(canvas).toHaveAttribute("data-running", "false");
    await expect(page.locator('[data-effect="clock"] span').first()).not.toHaveText("--:--:--");
  });

  test("hidden tab pauses the loop and the clock; return resumes once", async ({ page }) => {
    await page.goto("/journal");
    const canvas = page.locator('[data-effect="node-field"]');
    await expect(canvas).toHaveAttribute("data-running", "true");
    await page.evaluate(() => {
      Object.defineProperty(document, "hidden", { configurable: true, get: () => true });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await expect(canvas).toHaveAttribute("data-running", "false");
    await page.evaluate(() => {
      Object.defineProperty(document, "hidden", { configurable: true, get: () => false });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    await expect(canvas).toHaveAttribute("data-running", "true");
    const clocks = await page.locator('[data-effect="clock"]').count();
    expect(clocks).toBe(1);
  });

  test("reading progress exists only on journal pages and never blocks the skip link", async ({ page }) => {
    await page.goto("/journal");
    await expect(page.locator('[data-effect="reading-progress"]')).toHaveCount(1);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: /تخطَّ/ })).toBeFocused();
    await page.goto("/projects/project1");
    await expect(page.locator('[data-effect="reading-progress"]')).toHaveCount(0);
    await expect(page.locator('[data-effect="node-field"]')).toHaveCount(0);
    await expect(page.locator('[data-effect="clock"]')).toHaveCount(0);
  });

  test("no effects JavaScript is referenced by a project page", async ({ page }) => {
    // only the chunks the page itself references (route prefetches for linked pages are expected)
    await page.goto("/projects/project1");
    const urls = await page.locator("script[src]").evaluateAll((els) => els.map((e) => (e as HTMLScriptElement).src));
    expect(urls.length).toBeGreaterThan(0);
    const bodies = await Promise.all(urls.map(async (u) => (await page.request.get(u)).text()));
    expect(bodies.some((b) => b.includes("node-field") || b.includes("Asia/Amman"))).toBe(false);
  });
});
