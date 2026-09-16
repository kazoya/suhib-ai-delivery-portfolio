import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { RevealObserver } from "@/components/layout/reveal-observer";
import { arabic, mono } from "@/app/fonts";
import type { Locale } from "@/lib/i18n";

// Runs before paint: applies the stored theme (or the OS one) to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var m=location.search.match(/[?&]theme=(dark|light)/);if(m){t=m[1]}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;

export function RootShell({ locale, jsonLd, children }: { locale: Locale; jsonLd: object[]; children: React.ReactNode }) {
  const skip = locale === "en" ? "Skip to content" : "تخطَّ إلى المحتوى";
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"} suppressHydrationWarning className={`${arabic.variable} ${mono.variable} h-full`}>
      {/* eslint-disable-next-line @next/next/no-head-element -- this is the root <html> shell shared by both locale layouts */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        ))}
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground rtl:focus:right-3 ltr:focus:left-3"
        >
          {skip}
        </a>
        <SiteHeader locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <CommandPalette locale={locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
