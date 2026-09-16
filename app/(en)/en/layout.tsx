import type { Metadata, Viewport } from "next";
import { RootShell } from "@/components/layout/root-shell";
import { owner } from "@/data/portfolio";
import { keywords, personLd, websiteLd } from "@/lib/seo";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(owner.siteUrl),
  title: {
    default: `${owner.nameEn} — Senior Technology Consultant & Solutions Architect`,
    template: `%s | ${owner.nameEn}`,
  },
  description:
    "Suhib Asrawi: Senior Technology Consultant and Solutions Architect in Amman, Jordan. 20+ years across enterprise integration (Java, C#, SQL Server, Oracle), AI agents and automation. Live bilingual platforms and client production systems.",
  keywords,
  authors: [{ name: owner.nameEn, url: owner.linkedin }],
  creator: owner.nameEn,
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["ar_JO"],
    siteName: `${owner.nameEn} — Portfolio`,
    title: `${owner.nameEn} — ${owner.titleEn}`,
    description: owner.taglineEn,
    url: "/en",
  },
  twitter: { card: "summary_large_image", title: `${owner.nameEn} — ${owner.titleEn}`, description: owner.taglineEn },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#111411" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en" jsonLd={[personLd, websiteLd]}>
      {children}
    </RootShell>
  );
}
