"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, Mail, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BrandMark } from "@/components/layout/brand-mark";
import { owner } from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string; match?: string };

export const NAV: Record<Locale, NavItem[]> = {
  ar: [
    { href: "/", label: "الرئيسية" },
    { href: "/projects", label: "الأعمال" },
    { href: "/journal", label: "السجل الهندسي" },
    { href: "/platform", label: "المنصة" },
    { href: "/docs/profile", label: "الوثائق", match: "/docs" },
    { href: "/cv", label: "السيرة" },
    { href: "/en", label: "EN" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/journal", label: "Journal" },
    { href: "/projects", label: "Projects (AR)" },
    { href: "/cv", label: "CV" },
    { href: "/", label: "العربية" },
  ],
};

const copy = {
  ar: { home: "الصفحة الرئيسية", nav: "التنقل الرئيسي", palette: "افتح لوحة الأوامر", search: "بحث", menu: "القائمة", contact: "تواصل" },
  en: { home: "Home page", nav: "Main navigation", palette: "Open the command palette", search: "Search", menu: "Menu", contact: "Contact" },
};

export function SiteHeader({ locale = "ar" }: { locale?: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = NAV[locale];
  const c = copy[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === "/" || item.href === "/en") return pathname === item.href;
    return pathname.startsWith(item.match ?? item.href);
  };

  const contactHref = locale === "en" ? "/en#contact" : "/#contact";

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 border-b transition-colors",
        scrolled ? "border-line bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={locale === "en" ? "/en" : "/"} className="flex items-center gap-3" aria-label={c.home}>
          <BrandMark />
          <span className="leading-tight">
            <span className="block text-base font-bold">{locale === "en" ? owner.nameEn : owner.name}</span>
            <span className={cn("block text-[11px] text-muted", locale === "ar" && "ltr")}>{locale === "en" ? "Solutions Architect" : owner.nameEn}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={c.nav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground",
                isActive(item) && "bg-primary-soft text-primary hover:bg-primary-soft hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href={contactHref}
            className="hidden items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
          >
            <Mail className="size-4" /> {c.contact}
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted transition hover:border-primary hover:text-foreground md:flex"
            aria-label={c.palette}
          >
            <Command className="size-4" />
            <span>{c.search}</span>
            <kbd className="ltr rounded-md bg-surface-2 px-1.5 text-[11px] font-mono">Ctrl K</kbd>
          </button>
          <a
            href={owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <ThemeToggle locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={c.menu}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="container-x border-t border-line bg-background pb-4 pt-2 lg:hidden" aria-label={c.nav}>
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-base font-medium hover:bg-surface-2",
                    isActive(item) && "bg-primary-soft text-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={contactHref} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-2.5 text-base font-semibold text-primary hover:bg-surface-2">
                {c.contact}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
