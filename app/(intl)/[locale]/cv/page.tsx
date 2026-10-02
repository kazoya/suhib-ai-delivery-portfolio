import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleCv } from "@/components/cv/locale-cv";
import { isAddedLocale } from "@/lib/i18n";
import { cvMeta } from "@/lib/locale-meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  return cvMeta(locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <LocaleCv locale={locale} />;
}
