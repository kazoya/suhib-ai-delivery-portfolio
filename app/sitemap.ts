import type { MetadataRoute } from "next";
import { docs, owner, projects } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = owner.siteUrl.replace(/\/$/, "");
  const now = new Date();
  const pages = ["", "/projects", "/platform", "/cv", "/journal", "/en"].map((p) => ({ url: `${base}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 }));
  const proj = projects.map((p) => ({ url: `${base}/projects/${p.id}`, lastModified: now, priority: 0.7 }));
  const dd = docs.map((d) => ({ url: `${base}/docs/${d.slug}`, lastModified: now, priority: 0.6 }));
  return [...pages, ...proj, ...dd];
}
