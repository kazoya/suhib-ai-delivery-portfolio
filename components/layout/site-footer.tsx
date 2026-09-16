import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { owner } from "@/data/portfolio";
import { BrandMark } from "@/components/layout/brand-mark";
import { SiteQr } from "@/components/shared/site-qr";
import type { Locale } from "@/lib/i18n";

const copy = {
  ar: {
    about: "مستشار تقني أول ومهندس حلول من عمّان. تكامل أنظمة مؤسسية، أتمتة، ووكلاء ذكاء اصطناعي، بخبرة تمتد من إدارة الشبكات في 2003 إلى منصات عربية حيّة اليوم.",
    nav: "التنقل",
    contact: "تواصل",
    links: [
      ["/projects", "الأعمال"],
      ["/journal", "السجل الهندسي"],
      ["/platform", "المنصة"],
      ["/docs/profile", "الوثائق"],
      ["/cv", "السيرة الذاتية"],
      ["/en", "English"],
    ],
    role: "ناقش دوراً أو مشروعاً",
    built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
    qr: "امسح لفتح المحفظة",
  },
  en: {
    about: "Senior Technology Consultant and Solutions Architect in Amman. Enterprise systems integration, automation and AI agents, with depth that runs from network administration in 2003 to live bilingual platforms today.",
    nav: "Navigation",
    contact: "Contact",
    links: [
      ["/en", "Home"],
      ["/en/journal", "Engineering journal"],
      ["/projects", "Projects (Arabic)"],
      ["/cv", "CV"],
      ["/", "الموقع بالعربية"],
    ],
    role: "Discuss a role or a project",
    built: "Next.js 16 · Tailwind 4 · Recharts · Vercel",
    qr: "Scan to open the portfolio",
  },
};

export function SiteFooter({ locale = "ar" }: { locale?: Locale }) {
  const c = copy[locale];
  return (
    <footer className="no-print mt-20 border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={40} />
            <div>
              <div className="text-lg font-bold">{locale === "en" ? owner.nameEn : owner.name}</div>
              <div className="text-sm text-muted">{locale === "en" ? "Senior Technology Consultant · Solutions Architect" : "مستشار تقني أول · مهندس حلول"}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted">{c.about}</p>
          <a
            href={`mailto:${owner.email}?subject=${encodeURIComponent(locale === "en" ? "Role or project — via portfolio" : "دور أو مشروع — عبر المحفظة")}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            <Mail className="size-4" /> {c.role}
          </a>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">{c.nav}</div>
          <ul className="grid gap-2 text-sm text-muted">
            {c.links.map(([href, label]) => (
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
            <li><a className="hover:text-foreground" href={owner.mostaql} target="_blank" rel="noopener noreferrer">{locale === "en" ? "Mostaql" : "مستقل"}</a> · <a className="hover:text-foreground" href={owner.baeed} target="_blank" rel="noopener noreferrer">{locale === "en" ? "Baeed" : "بعيد"}</a></li>
            <li>{locale === "en" ? owner.locationEn : owner.location}</li>
          </ul>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <SiteQr label={c.qr} />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-muted">
          <span>© 2026 {owner.nameEn}. {c.built}</span>
          <span className="ltr">{locale === "en" ? "Data snapshot 2026-09-14 · CV 2026-09-16" : "لقطة البيانات 2026-09-14 · السيرة 2026-09-16"}</span>
        </div>
      </div>
    </footer>
  );
}
