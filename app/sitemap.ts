import type { MetadataRoute } from "next";
import { docs, owner, projects } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = owner.siteUrl.replace(/\/$/, "");
  const lastModified = new Date("2026-09-16");
  const pages = [
    { p: "", priority: 1 },
    { p: "/journal", priority: 0.9 },
    { p: "/projects", priority: 0.9 },
    { p: "/cv", priority: 0.8 },
    { p: "/en", priority: 0.8 },
    { p: "/en/journal", priority: 0.8 },
    { p: "/platform", priority: 0.6 },
  ].map(({ p, priority }) => ({ url: `${base}${p}`, lastModified, priority }));
  const proj = projects.map((p) => ({ url: `${base}/projects/${p.id}`, lastModified, priority: 0.7 }));
  const dd = docs.map((d) => ({ url: `${base}/docs/${d.slug}`, lastModified, priority: 0.5 }));
  return [...pages, ...proj, ...dd];
}
