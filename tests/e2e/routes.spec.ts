import { expect, test } from "@playwright/test";

/** Every public route, its expected locale, and whether it must carry hreflang. */
const ROUTES: { path: string; lang: "ar" | "en"; hreflang?: boolean }[] = [
  { path: "/", lang: "ar", hreflang: true },
  { path: "/journal", lang: "ar", hreflang: true },
  { path: "/projects", lang: "ar" },
  { path: "/projects/project1", lang: "ar" },
  { path: "/projects/giz-apca", lang: "ar" },
  { path: "/projects/factories", lang: "ar" },
  { path: "/platform", lang: "ar" },
  { path: "/cv", lang: "ar" },
  { path: "/docs/profile", lang: "ar" },
  { path: "/docs/cv", lang: "ar" },
  { path: "/en", lang: "en", hreflang: true },
  { path: "/en/journal", lang: "en", hreflang: true },
];

/** Strings that must never appear in public HTML. */
const FORBIDDEN = [
  "أضفهما قبل الإرسال",
  "أكمل اسم التخصص",
  "claude --resume",
  "Total usage limit",
  "usage limit",
  "Set new limit",
  "C:\\\\",
  "localhost:",
  "127.0.0.1",
  "/mcp",
  "Cursor",
  "Claude Fable",
  "Built with Claude",
  "المجلد فارغ",
  "مرآة الجلسة",
];

const SITE = "https://suhib-ai-delivery-portfolio.vercel.app";
const titles = new Map<string, string>();
const descriptions = new Map<string, string>();

for (const r of ROUTES) {
  test.describe(r.path, () => {
    test("returns 200 with correct lang/dir, one H1, canonical and metadata", async ({ page }) => {
      const res = await page.goto(r.path);
      expect(res?.status()).toBe(200);

      await expect(page.locator("html")).toHaveAttribute("lang", r.lang);
      await expect(page.locator("html")).toHaveAttribute("dir", r.lang === "en" ? "ltr" : "rtl");

      await expect(page.locator("h1")).toHaveCount(1);
      expect((await page.locator("h1").innerText()).trim().length).toBeGreaterThan(3);

      // canonical is absolute on the production origin (metadataBase), self-referencing per route
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBe(`${SITE}${r.path === "/" ? "" : r.path}`);

      const title = await page.title();
      const desc = await page.locator('meta[name="description"]').getAttribute("content");
      expect(title.length).toBeGreaterThan(10);
      expect((desc ?? "").length).toBeGreaterThan(40);
      for (const [p, t] of titles) expect(t, `title of ${r.path} duplicates ${p}`).not.toBe(title);
      for (const [p, d] of descriptions) expect(d, `description of ${r.path} duplicates ${p}`).not.toBe(desc);
      titles.set(r.path, title);
      descriptions.set(r.path, desc ?? "");

      await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", /\/og(\/|\?|$)/);

      if (r.hreflang) {
        await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveCount(1);
        await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
      }
    });

    test("contains no placeholder, session or agent-centric text", async ({ page }) => {
      await page.goto(r.path);
      const html = await page.content();
      const body = await page.locator("body").innerText();
      for (const f of FORBIDDEN) {
        // the copy-ready documents under /docs may name the agent tools once as governed leverage
        if (r.path.startsWith("/docs/") && (f === "Cursor" || f === "Claude Fable")) continue;
        expect(body, `found "${f}" on ${r.path}`).not.toContain(f);
      }
      // GIZ may only appear when qualified as a proposed / aligned demonstrator
      if (body.includes("GIZ")) {
        expect(body).toMatch(/مُظهِر مقترح|proposed|GIZ-aligned|متوافق مع أهداف/);
      }
      expect(html).toContain('type="application/ld+json"');
    });

    test("does not scroll horizontally", async ({ page }) => {
      await page.goto(r.path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    });
  });
}

test("internal links resolve", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const r of ["/", "/journal", "/projects", "/en", "/en/journal", "/cv"]) {
    await page.goto(r);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute("href")!));
    for (const h of hrefs) {
      const path = h.split("#")[0];
      if (!path || seen.has(path) || path.startsWith("/api/")) continue;
      seen.add(path);
      const res = await request.get(path);
      expect(res.status(), `${path} linked from ${r}`).toBe(200);
    }
  }
  expect(seen.size).toBeGreaterThan(10);
});

test("sitemap and robots exist", async ({ request }) => {
  const sm = await request.get("/sitemap.xml");
  expect(sm.status()).toBe(200);
  const xml = await sm.text();
  for (const p of ["/journal", "/en/journal", "/projects/project1", "/cv"]) expect(xml).toContain(p);
  const rb = await request.get("/robots.txt");
  expect(rb.status()).toBe(200);
  expect(await rb.text()).toContain("sitemap.xml");
});

test("site and project OG images render", async ({ request, page }) => {
  for (const path of ["/", "/projects/project1"]) {
    await page.goto(path);
    const og = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    const res = await request.get(og!.replace(SITE, ""));
    expect(res.status(), `og image for ${path}`).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
  }
});
