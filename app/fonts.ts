import localFont from "next/font/local";
import { Geist_Mono, Inter, Noto_Naskh_Arabic, Vazirmatn } from "next/font/google";
import type { Locale } from "@/lib/i18n";

export const arabic = localFont({
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

export const mono = Geist_Mono({ variable: "--font-mono-face", subsets: ["latin"], display: "swap" });

/** Latin, Turkish, and Cyrillic. Self-hosted by next/font. */
export const latin = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-latin",
  display: "swap",
});

/** Persian UI face. Covers the Arabic script with Persian letters. */
export const persian = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-persian",
  display: "swap",
});

/** Naskh that includes Urdu letters, readable at interface sizes. */
export const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-naskh",
  display: "swap",
});

export function fontVariableClass(locale: Locale) {
  const base = `${arabic.variable} ${mono.variable}`;
  if (locale === "fa") return `${base} ${persian.variable}`;
  if (locale === "ur") return `${base} ${naskh.variable}`;
  if (locale === "en" || locale === "tr" || locale === "ru") return `${base} ${latin.variable}`;
  return base;
}
