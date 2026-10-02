import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docs } from "@/data/portfolio";
import { LocaleDoc } from "@/components/docs/locale-doc";
import { isAddedLocale } from "@/lib/i18n";
import { docMeta } from "@/lib/locale-meta";

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isAddedLocale(locale)) return {};
  return docMeta(locale, slug);
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <LocaleDoc locale={locale} slug={slug} />;
}
