import fs from "node:fs";
import path from "node:path";
import { docs } from "@/data/portfolio";
import { markdownToHtml } from "@/lib/markdown";

const OUT_DIR = path.join(process.cwd(), "OUT");

export function getDoc(slug: string) {
  const meta = docs.find((d) => d.slug === slug);
  if (!meta) return null;
  const file = path.join(OUT_DIR, meta.file);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  return { ...meta, raw, html: markdownToHtml(raw) };
}

export function getAllDocSlugs() {
  return docs.map((d) => d.slug);
}
