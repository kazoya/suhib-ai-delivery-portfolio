import type { L } from "@/data/journey";
import { phrase } from "@/data/phrases";

export const LOCALES = ["ar", "en", "fa", "tr", "ur", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export type AddedLocale = "fa" | "tr" | "ur" | "ru";

export const ADDED_LOCALES: AddedLocale[] = ["fa", "tr", "ur", "ru"];

export type LocaleMeta = {
  native: string;
  english: string;
  short: string;
  dir: "rtl" | "ltr";
  og: string;
  intl: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  ar: { native: "العربية", english: "Arabic", short: "ع", dir: "rtl", og: "ar_JO", intl: "ar-JO-u-nu-latn" },
  en: { native: "English", english: "English", short: "EN", dir: "ltr", og: "en_US", intl: "en-GB" },
  fa: { native: "فارسی", english: "Persian", short: "فا", dir: "rtl", og: "fa_IR", intl: "fa-IR-u-ca-gregory-nu-latn" },
  tr: { native: "Türkçe", english: "Turkish", short: "TR", dir: "ltr", og: "tr_TR", intl: "tr-TR" },
  ur: { native: "اردو", english: "Urdu", short: "اردو", dir: "rtl", og: "ur_PK", intl: "ur-PK-u-nu-latn" },
  ru: { native: "Русский", english: "Russian", short: "RU", dir: "ltr", og: "ru_RU", intl: "ru-RU" },
};

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);
export const isAddedLocale = (value: string): value is AddedLocale => (ADDED_LOCALES as readonly string[]).includes(value);

export const dirOf = (locale: Locale) => LOCALE_META[locale].dir;
export const isLtr = (locale: Locale) => dirOf(locale) === "ltr";

/**
 * Resolves a bilingual string.
 * Persian and Urdu fall back to Arabic (same script, vetted wording).
 * Turkish and Russian fall back to English.
 * A phrase table can supply a direct translation without editing every record.
 */
export function t(l: L, locale: Locale): string {
  const own = l[locale];
  if (own) return own;
  const extra = locale === "ar" || locale === "en" ? undefined : phrase[l.en]?.[locale];
  if (extra) return extra;
  if (locale === "fa" || locale === "ur") return l.ar;
  return l.en;
}

/** Prefixed locales live under /en, /fa, /tr, /ur, /ru. Arabic stays at the root. */
export function localePath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") return p || "/";
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

const PREFIXED = new Set<string>(["en", "fa", "tr", "ur", "ru"]);

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) && PREFIXED.has(first) ? first : "ar";
}

/** Home and journal exist in every language. Other routes stay on their real URL, or return home. */
export function switchLocaleHref(pathname: string, next: Locale): string {
  const current = localeFromPath(pathname);
  const parts = pathname.split("/").filter(Boolean);
  const restParts = current === "ar" ? parts : parts.slice(1);
  const rest = `/${restParts.join("/")}`.replace(/\/$/, "") || "/";
  if (rest === "/" || rest === "/journal") return localePath(next, rest);
  if (next === "ar") return rest;
  return localePath(next, "/");
}
