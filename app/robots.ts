import type { MetadataRoute } from "next";
import { owner } from "@/data/portfolio";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = owner.siteUrl.replace(/\/$/, "");
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}
