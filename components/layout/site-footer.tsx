import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { owner } from "@/data/portfolio";
import { BrandMark } from "@/components/layout/brand-mark";
import { LanguageRail } from "@/components/layout/language-switcher";
import { SiteQr } from "@/components/shared/site-qr";
import type { Locale } from "@/lib/i18n";
import { footerLinks, shell, usesLatinName } from "@/lib/shell-copy";

export function SiteFooter({ locale = "ar" }: { locale?: Locale }) {
  const c = shell.footer[locale];
  const latinName = usesLatinName(locale);
  return (
    <footer className="no-print mt-20 border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={40} />
            <div>
              <div className="text-lg font-bold">{latinName ? owner.nameEn : owner.name}</div>
              <div className="text-sm text-muted">{c.roleTitle}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted">{c.about}</p>
          <a
            href={`mailto:${owner.email}?subject=${encodeURIComponent(c.subject)}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            <Mail className="size-4" /> {c.role}
          </a>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">{c.nav}</div>
          <ul className="grid gap-2 text-sm text-muted">
            {footerLinks(locale).map(([href, label]) => (
              <li key={href}><Link className="hover:text-foreground" href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">{c.contact}</div>
          <ul className="grid gap-2 text-sm text-muted">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${owner.email}`}>
                <Mail className="size-4" /> <span className="ltr">{owner.email}</span>
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={owner.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={owner.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" /> <span className="ltr">github.com/{owner.githubHandle}</span>
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href={owner.mostaql} target="_blank" rel="noopener noreferrer">{c.mostaql}</a>
              {" · "}
              <a className="hover:text-foreground" href={owner.baeed} target="_blank" rel="noopener noreferrer">{c.baeed}</a>
            </li>
            <li>{c.location}</li>
          </ul>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <SiteQr label={c.qr} />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <LanguageRail locale={locale} />
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted sm:justify-end">
            <span>© 2026 {owner.nameEn}. {c.built}</span>
            <span className="ltr">{c.snapshot}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
