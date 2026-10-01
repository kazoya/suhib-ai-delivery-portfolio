import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalPageContent } from "@/components/journey/journal-page";
import { isAddedLocale } from "@/lib/i18n";
import { journalCopy } from "@/lib/journal-copy";
import { alternatesFor, journalAlternates, ogFor, profilePageLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  const c = journalCopy[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: alternatesFor(`/${locale}/journal`, journalAlternates),
    openGraph: { ...ogFor(locale), title: c.metaTitle, description: c.ogDescription, url: `/${locale}/journal` },
  };
}

export default async function IntlJournal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd(`/${locale}/journal`, locale)) }} />
      <JournalPageContent locale={locale} />
    </>
  );
}
