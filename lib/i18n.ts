import type { L } from "@/data/journey";

export type Locale = "ar" | "en";

/** Picks one language from a bilingual string. */
export const t = (l: L, locale: Locale) => (locale === "en" ? l.en : l.ar);

export const dirOf = (locale: Locale) => (locale === "en" ? "ltr" : "rtl");

/** Route helpers: the English experience lives under /en. */
export const localePath = (locale: Locale, path: string) => (locale === "en" ? (path === "/" ? "/en" : `/en${path}`) : path);
