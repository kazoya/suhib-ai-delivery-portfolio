import { expect, test } from "@playwright/test";

test.describe("command palette", () => {
  test("opens with Ctrl+K, filters in Arabic, arrows + Enter navigate, Escape closes, focus is trapped", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect
      .poll(async () => {
        await page.keyboard.press("Control+k");
        return page.getByRole("dialog").count();
      }, { timeout: 10_000 })
      .toBe(1);
    const dialog = page.getByRole("dialog", { name: "لوحة الأوامر" });
    await expect(dialog).toBeVisible();
    const input = page.locator("#command-palette-input");
    await expect(input).toBeFocused();

    await input.fill("السجل");
    await expect(page.getByRole("option").first()).toContainText("السجل الهندسي");

    // focus trap: Tab from the input cycles inside the dialog
    await page.keyboard.press("Tab");
    const inside = await page.evaluate(() => !!document.activeElement?.closest('[role="dialog"]'));
    expect(inside).toBe(true);

    await input.focus();
    await input.fill("");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("option").nth(2)).toHaveAttribute("aria-selected", "true");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/journal$/);

    await page.keyboard.press("Control+k");
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });

  test("searches in English on /en", async ({ page }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");
    // the keydown listener is attached after hydration; retry the shortcut until the dialog appears
    await expect
      .poll(async () => {
        await page.keyboard.press("Control+k");
        return page.getByRole("dialog").count();
      }, { timeout: 10_000 })
      .toBe(1);
    await page.locator("#command-palette-input").fill("journal");
    await expect(page.getByRole("option").first()).toContainText(/journal/i);
  });
});

test.describe("journal", () => {
  test("technology generations filter narrows the tracks", async ({ page }) => {
    await page.goto("/journal");
    const panel = page.getByRole("tabpanel");
    const all = await panel.locator(".grid.items-start").count();
    await page.getByRole("tab", { name: "البيانات" }).click();
    const data = await panel.locator(".grid.items-start").count();
    expect(all).toBeGreaterThan(data);
    expect(data).toBe(1);
  });

  test("chapters, memories, method and recruiter view are present", async ({ page }) => {
    await page.goto("/journal");
    await expect(page.locator("[id^=chapter-]")).toHaveCount(10);
    await expect(page.getByText("ذاكرة هندسية")).toHaveCount(10);
    await expect(page.locator("#method")).toBeVisible();
    await expect(page.locator("#recruiter")).toContainText("من هو صهيب؟");
    await expect(page.locator("#entries article")).toHaveCount(5);
  });
});

test.describe("projects", () => {
  test("tier + tech filters combine without dead ends", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("tab", { name: /منتج منشور/ }).click();
    // both published products are deployed on Vercel → the chip stays enabled and yields results
    const vercel = page.getByRole("button", { name: /^Vercel/ });
    await expect(vercel).toBeEnabled();
    await vercel.click();
    await expect(page.locator("main article")).toHaveCount(2);
    // a technology absent from this tier is disabled instead of producing an empty page
    await expect(page.getByRole("button", { name: /^Laravel/ })).toBeDisabled();
    // clearing works from the status line
    await page.getByRole("button", { name: "مسح الفلاتر" }).first().click();
    await expect(page.locator("main article")).toHaveCount(10);
  });


  test("filters work and cards show status instead of percentages", async ({ page }) => {
    await page.goto("/projects");
    const total = await page.locator("article").count();
    await page.getByRole("tab", { name: /منتج منشور/ }).click();
    const filtered = await page.locator("article").count();
    expect(filtered).toBeLessThan(total);
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/\d{2}%/);
  });
});

test.describe("theme and print", () => {
  test("theme toggle flips data-theme and persists", async ({ page }) => {
    await page.goto("/");
    const before = await page.locator("html").getAttribute("data-theme");
    await page.getByRole("button", { name: /الوضع/ }).click();
    const after = await page.locator("html").getAttribute("data-theme");
    expect(after).not.toBe(before);
    await page.reload();
    expect(await page.locator("html").getAttribute("data-theme")).toBe(after);
  });

  test("CV prints as A4 without navigation chrome", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "print only checked once");
    await page.goto("/cv");
    await page.emulateMedia({ media: "print" });
    await expect(page.locator("header.no-print")).toBeHidden();
    await expect(page.locator("footer")).toBeHidden();
    await expect(page.locator("h1")).toContainText("صهيب");
    const pdf = await page.pdf({ format: "A4", printBackground: true });
    expect(pdf.byteLength).toBeGreaterThan(20_000);
  });
});

test("skip link and visible focus work with the keyboard", async ({ page }) => {
  await page.goto("/journal");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: /تخطَّ/ });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  await page.keyboard.press("Tab");
  const outline = await page.evaluate(() => getComputedStyle(document.activeElement as Element).outlineStyle);
  expect(outline).not.toBe("none");
});
