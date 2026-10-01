import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleHome } from "@/components/home/locale-home";
import { isAddedLocale } from "@/lib/i18n";
import { homeCopy } from "@/lib/home-copy";
import { usesLatinName } from "@/lib/shell-copy";
import { owner } from "@/data/portfolio";
import { alternatesFor, homeAlternates, ogFor } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  const c = homeCopy[locale];
  const name = usesLatinName(locale) ? owner.nameEn : owner.name;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: alternatesFor(`/${locale}`, homeAlternates),
    openGraph: { ...ogFor(locale), url: `/${locale}`, title: `${name} — ${c.role}`, description: c.h1 },
  };
}

export default async function IntlHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <LocaleHome locale={locale} />;
}
