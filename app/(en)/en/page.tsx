import type { Metadata } from "next";
import { LocaleHome } from "@/components/home/locale-home";
import { owner } from "@/data/portfolio";
import { homeCopy } from "@/lib/home-copy";
import { alternatesFor, homeAlternates, ogEn } from "@/lib/seo";

const c = homeCopy.en;

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  alternates: alternatesFor("/en", homeAlternates),
  openGraph: { ...ogEn, url: "/en", title: `${owner.nameEn} — ${owner.titleEn}`, description: owner.taglineEn },
};

export default function EnglishPage() {
  return <LocaleHome locale="en" />;
}
