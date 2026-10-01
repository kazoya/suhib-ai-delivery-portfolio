import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { fontVariableClass } from "@/app/fonts";
import { RootShell } from "@/components/layout/root-shell";
import { owner } from "@/data/portfolio";
import { isAddedLocale, type AddedLocale } from "@/lib/i18n";
import { shell, usesLatinName } from "@/lib/shell-copy";
import { homeCopy } from "@/lib/home-copy";
import { keywords, ogFor, personLd, websiteLd } from "@/lib/seo";
import "../../globals.css";

export function generateStaticParams() {
  return (["fa", "tr", "ur", "ru"] as const).map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  const name = usesLatinName(locale) ? owner.nameEn : owner.name;
  const copy = homeCopy[locale];
  return {
    metadataBase: new URL(owner.siteUrl),
    title: {
      default: `${name} — ${shell.footer[locale].roleTitle}`,
      template: `%s | ${name}`,
    },
    description: copy.metaDescription,
    keywords,
    authors: [{ name: owner.nameEn, url: owner.linkedin }],
    creator: owner.nameEn,
    openGraph: {
      ...ogFor(locale),
      siteName: `${name} — Portfolio`,
      title: `${name} — ${shell.footer[locale].roleTitle}`,
      description: copy.h1,
      url: `/${locale}`,
    },
    twitter: { card: "summary_large_image", images: ["/og"], title: `${name} — ${shell.footer[locale].roleTitle}`, description: copy.h1 },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#111411" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function IntlLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  const code = locale as AddedLocale;
  return (
    <RootShell locale={code} fontClass={fontVariableClass(code)} jsonLd={[personLd, websiteLd]}>
      {children}
    </RootShell>
  );
}
