import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { cvCopy, docsCopy, docTitles, platformCopy, projectsCopy } from "@/lib/page-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { projectSummary, projectTitle } from "@/lib/project-summaries";
import { alternatesFor, ogFor, pathAlternates } from "@/lib/seo";
import { statusLabel } from "@/data/portfolio";
import { t } from "@/lib/i18n";

function meta(locale: Locale, path: string, canonicalPath: string, title: string, description: string): Metadata {
  const url = localePath(locale, path);
  return {
    title,
    description,
    alternates: alternatesFor(url, pathAlternates(canonicalPath)),
    openGraph: { ...ogFor(locale), title, description, url },
  };
}

export function projectsMeta(locale: Locale): Metadata {
  const c = projectsCopy[locale];
  return meta(locale, "/projects", "/projects", c.metaTitle, c.metaDescription(projects.length));
}

export function projectMeta(locale: Locale, id: string): Metadata {
  const p = projects.find((x) => x.id === id);
  if (!p) return {};
  const title = `${projectTitle(p, locale)} — ${t(statusLabel[p.statusKey], locale)}`;
  return meta(locale, `/projects/${p.id}`, `/projects/${p.id}`, title, projectSummary(p, locale));
}

export function platformMeta(locale: Locale): Metadata {
  const c = platformCopy[locale];
  return meta(locale, "/platform", "/platform", c.metaTitle, c.metaDescription);
}

export function cvMeta(locale: Locale): Metadata {
  const c = cvCopy[locale];
  return meta(locale, "/cv", "/cv", c.metaTitle, c.metaDescription);
}

export function docMeta(locale: Locale, slug: string): Metadata {
  const item = docTitles[slug]?.[locale];
  if (!item) return {};
  const description = `${item.blurb} ${docsCopy[locale].metaDescription}`;
  return meta(locale, `/docs/${slug}`, `/docs/${slug}`, item.title, description);
}
