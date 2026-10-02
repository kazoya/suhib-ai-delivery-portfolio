import type { MetadataRoute } from "next";
import { docs, owner, projects } from "@/data/portfolio";
import { LOCALES, localePath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = owner.siteUrl.replace(/\/$/, "");
  const lastModified = new Date("2026-09-16");
  const paths = [
    "/",
    "/journal",
    "/projects",
    "/cv",
    "/platform",
    ...projects.map((p) => `/projects/${p.id}`),
    ...docs.map((d) => `/docs/${d.slug}`),
  ];
  return LOCALES.flatMap((locale) =>
    paths.map((path) => {
      const localized = localePath(locale, path);
      return {
        url: `${base}${localized === "/" ? "" : localized}`,
        lastModified,
        priority: path === "/" ? (locale === "ar" ? 1 : 0.8) : path === "/journal" || path === "/projects" ? 0.8 : 0.6,
      };
    }),
  );
}
