import type { Metadata, Viewport } from "next";
import { RootShell } from "@/components/layout/root-shell";
import { owner } from "@/data/portfolio";
import { keywords, personLd, websiteLd } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(owner.siteUrl),
  title: {
    default: `${owner.name} — مستشار تقني أول ومهندس حلول`,
    template: `%s | ${owner.name}`,
  },
  description:
    "صهيب عسراوي: مستشار تقني أول ومهندس حلول من عمّان بخبرة تتجاوز عشرين عاماً في تكامل الأنظمة المؤسسية (Java، C#، SQL Server، Oracle)، وكلاء الذكاء الاصطناعي، والأتمتة. منصات عربية ثنائية اللغة حيّة وأنظمة إنتاجية لعملاء.",
  keywords,
  authors: [{ name: owner.nameEn, url: owner.linkedin }],
  creator: owner.nameEn,
  openGraph: {
    type: "profile",
    locale: "ar_JO",
    alternateLocale: ["en_US"],
    siteName: `${owner.name} — Portfolio`,
    title: `${owner.name} — ${owner.title}`,
    description: owner.tagline,
    url: "/",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Suhib Asrawi — Senior Technology Consultant & Solutions Architect" }],
  },
  twitter: { card: "summary_large_image", images: ["/og"], title: `${owner.nameEn} — ${owner.titleEn}`, description: owner.taglineEn },
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

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="ar" jsonLd={[personLd, websiteLd]}>
      {children}
    </RootShell>
  );
}
