import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalePlatform } from "@/components/platform/locale-platform";
import { isAddedLocale } from "@/lib/i18n";
import { platformMeta } from "@/lib/locale-meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  return platformMeta(locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <LocalePlatform locale={locale} />;
}
