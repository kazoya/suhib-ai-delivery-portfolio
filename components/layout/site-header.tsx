"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, Mail, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BrandMark } from "@/components/layout/brand-mark";
import { LanguageRail, LanguageSwitcher } from "@/components/layout/language-switcher";
import { owner } from "@/data/portfolio";
import { localePath, type Locale } from "@/lib/i18n";
import { navFor, shell, usesLatinName, type NavItem } from "@/lib/shell-copy";
import { cn } from "@/lib/utils";

export function SiteHeader({ locale = "ar" }: { locale?: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = navFor(locale);
  const c = shell.header[locale];
  const homeHref = localePath(locale, "/");
  const contactHref = `${homeHref}#contact`;
  const latinName = usesLatinName(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === homeHref) return pathname === item.href;
    return pathname.startsWith(item.match ?? item.href);
  };

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 border-b transition-colors",
        scrolled ? "border-line bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link href={homeHref} className="flex min-w-0 items-center gap-3" aria-label={c.home}>
          <BrandMark />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-bold">{latinName ? owner.nameEn : owner.name}</span>
            <span className={cn("block truncate text-[11px] text-muted", locale === "ar" && "ltr")}>
              {locale === "ar" ? owner.nameEn : c.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={c.nav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-foreground",
                isActive(item) && "bg-primary-soft text-primary hover:bg-primary-soft hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
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
            <span className="hidden xl:inline">{c.search}</span>
            <kbd className="ltr rounded-md bg-surface-2 px-1.5 text-[11px] font-mono">Ctrl K</kbd>
          </button>
          <LanguageSwitcher locale={locale} />
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
        <nav id="mobile-nav" className="container-x border-t border-line bg-background pb-4 pt-3 lg:hidden" aria-label={c.nav}>
          <LanguageRail locale={locale} onNavigate={() => setOpen(false)} />
          <ul className="mt-2 grid gap-1">
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
