"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { LOCALES, LOCALE_META, dirOf, switchLocaleHref, type Locale } from "@/lib/i18n";
import { shell } from "@/lib/shell-copy";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const label = shell.languages[locale];
  const meta = LOCALE_META[locale];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 text-sm font-semibold text-foreground transition hover:border-primary"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <Languages className="size-4 text-primary" aria-hidden="true" />
        <span className="hidden xl:inline" lang={locale}>{meta.native}</span>
        <span className="xl:hidden" lang={locale}>{meta.short}</span>
        <ChevronDown className={cn("size-3.5 text-muted transition", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? (
        <ul
          id={listId}
          aria-label={label}
          className="absolute end-0 z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-xl"
        >
          <li className="px-3 pb-1 pt-1.5 text-[11px] font-bold tracking-wide text-muted">{label}</li>
          {LOCALES.map((code) => {
            const item = LOCALE_META[code];
            const active = code === locale;
            return (
              <li key={code}>
                <Link
                  href={switchLocaleHref(pathname, code)}
                  hrefLang={code}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-surface-2",
                    active && "bg-primary-soft text-primary hover:bg-primary-soft",
                  )}
                >
                  <span className="min-w-0 flex-1 text-start">
                    <span className="block text-sm font-bold leading-snug" lang={code} dir={dirOf(code)}>{item.native}</span>
                    <span className="block text-[11px] text-muted" dir="ltr">{item.english}</span>
                  </span>
                  {active ? <Check className="size-4 shrink-0" aria-hidden="true" /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

/** Always-visible language rail for the mobile drawer and the footer. */
export function LanguageRail({ locale, onNavigate }: { locale: Locale; onNavigate?: () => void }) {
  const pathname = usePathname() || "/";
  const label = shell.languages[locale];
  return (
    <nav aria-label={label} className="min-w-0 max-w-full flex-1 overflow-x-auto">
      <div className="mb-1 text-[11px] font-bold tracking-wide text-muted">{label}</div>
      <ul className="grid grid-cols-3 gap-1.5 sm:flex">
        {LOCALES.map((code) => {
          const item = LOCALE_META[code];
          const active = code === locale;
          return (
            <li key={code} className="min-w-0 sm:shrink-0">
              <Link
                href={switchLocaleHref(pathname, code)}
                hrefLang={code}
                lang={code}
                dir={dirOf(code)}
                onClick={onNavigate}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex w-full items-center justify-center rounded-full border px-2 py-1.5 text-center text-sm font-semibold whitespace-nowrap transition sm:w-auto sm:px-3",
                  active ? "border-primary bg-primary text-primary-foreground" : "border-line bg-surface text-foreground hover:border-primary",
                )}
              >
                {item.native}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
