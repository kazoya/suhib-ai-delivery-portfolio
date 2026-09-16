import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { RevealObserver } from "@/components/layout/reveal-observer";
import { owner } from "@/data/portfolio";
import "./globals.css";

const arabic = localFont({
  src: [
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const mono = Geist_Mono({ variable: "--font-mono-face", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(owner.siteUrl),
  title: {
    default: `${owner.name} — ${owner.titleEn}`,
    template: `%s | ${owner.name}`,
  },
  description:
    "محفظة أعمال صهيب عسراوي: منصات ويب عربية منشورة على Vercel وForge، منصة متابعة مشاريع بلا اعتماديات، وتنفيذ بوكلاء الذكاء الاصطناعي تحت قيود مكتوبة وأدلة قابلة للتحقق.",
  keywords: ["Suhib Asrawi", "صهيب عسراوي", "Next.js", "Laravel", "AI agents", "Claude Code", "Cursor", "Jordan", "portfolio"],
  authors: [{ name: owner.nameEn, url: owner.github }],
  creator: owner.nameEn,
  openGraph: {
    type: "profile",
    locale: "ar_JO",
    alternateLocale: ["en_US"],
    siteName: `${owner.name} — Portfolio`,
    title: `${owner.name} — ${owner.title}`,
    description: owner.tagline,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: `${owner.nameEn} — ${owner.titleEn}`, description: owner.tagline },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
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

// Runs before paint: applies the stored theme (or the OS one) to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var m=location.search.match(/[?&]theme=(dark|light)/);if(m){t=m[1]}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: owner.nameEn,
    alternateName: owner.fullName,
    jobTitle: owner.titleEn,
    url: owner.siteUrl,
    sameAs: [owner.github, owner.mostaql, owner.baeed],
    knowsAbout: ["Next.js", "Laravel", "PostgreSQL", "AI agents", "Claude Code", "Java", "C#", "SQL Server"],
    address: { "@type": "PostalAddress", addressCountry: "JO" },
  };
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${arabic.variable} ${mono.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          تخطَّ إلى المحتوى
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette />
        <RevealObserver />
      </body>
    </html>
  );
}
