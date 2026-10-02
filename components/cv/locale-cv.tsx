import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { PrintButton } from "@/components/shared/print-button";
import { ContactCta } from "@/components/shared/contact-cta";
import { owner } from "@/data/portfolio";
import { coreSkills, education, experience, selectedProjectsCv } from "@/data/journey";
import { cvCopy } from "@/lib/page-copy";
import { t, type Locale } from "@/lib/i18n";
import { usesLatinName } from "@/lib/shell-copy";
import { profilePageLd } from "@/lib/seo";
import { localePath } from "@/lib/i18n";

const cvHeads: Record<Exclude<Locale, "en" | "ar">, { title: string; skills: string; experience: string; projects: string; education: string }> = {
  fa: { title: "مشاور ارشد فناوری و معمار راهکار", skills: "مهارت‌ها", experience: "سوابق حرفه‌ای", projects: "پروژه‌های برگزیده", education: "تحصیلات" },
  tr: { title: "Kıdemli Teknoloji Danışmanı ve Çözüm Mimarı", skills: "Temel beceriler", experience: "Mesleki deneyim", projects: "Seçilmiş projeler", education: "Eğitim" },
  ur: { title: "سینئر ٹیکنالوجی کنسلٹنٹ اور سلوشنز آرکیٹیکٹ", skills: "مہارتیں", experience: "پیشہ ورانہ تجربہ", projects: "منتخب منصوبے", education: "تعلیم" },
  ru: { title: "Старший технологический консультант и архитектор решений", skills: "Основные навыки", experience: "Профессиональный опыт", projects: "Избранные проекты", education: "Образование" },
};

export function LocaleCv({ locale }: { locale: Exclude<Locale, "en" | "ar"> }) {
  const c = cvCopy[locale];
  const heads = cvHeads[locale];
  const name = usesLatinName(locale) ? owner.fullNameEn : owner.fullName;
  const source: Locale = locale === "tr" || locale === "ru" ? "en" : "ar";
  return (
    <div className="container-x py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd(localePath(locale, "/cv"), locale)) }} />
      <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-2xl text-sm text-muted">{c.note}</p>
        <PrintButton label={c.print} />
      </div>
      <article className="cv-page card mx-auto max-w-3xl p-6 sm:p-10 print:border-0 print:p-0 print:shadow-none">
        <header className="border-b border-line pb-5">
          <h1 className="text-2xl font-bold sm:text-3xl">{name}</h1>
          <p className="mt-2 font-bold text-primary">{heads.title}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            <li className="inline-flex items-center gap-1.5"><MapPin className="size-4" /> {source === "en" ? owner.locationEn : owner.location}</li>
            <li className="inline-flex items-center gap-1.5"><Mail className="size-4" /> <a className="ltr hover:text-primary" href={`mailto:${owner.email}`}>{owner.email}</a></li>
            {owner.publicPhone ? <li className="inline-flex items-center gap-1.5"><Phone className="size-4" /> <span className="ltr">{owner.phone}</span></li> : null}
            <li className="inline-flex items-center gap-1.5"><LinkedinIcon className="size-4" /> <a className="ltr hover:text-primary" href={owner.linkedin}>linkedin.com/in/suhib-al-saleh-0a6136264</a></li>
            <li className="inline-flex items-center gap-1.5"><GithubIcon className="size-4" /> <a className="ltr hover:text-primary" href={owner.github}>github.com/{owner.githubHandle}</a></li>
          </ul>
        </header>
        <p className="mt-5 text-sm leading-relaxed" lang={source} dir={source === "ar" ? "rtl" : "ltr"}>{t({ ar: owner.summary, en: owner.summaryEn }, source)}</p>
        <section className="mt-6">
          <h2 className="text-lg font-bold">{heads.skills}</h2>
          <dl className="mt-2 grid gap-1.5 text-sm">
            {coreSkills.map((s) => (
              <div key={s.group.en} className="grid gap-1 sm:grid-cols-[190px_1fr]">
                <dt className="font-bold">{t(s.group, source)}</dt>
                <dd className="text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-bold">{heads.experience}</h2>
          <div className="mt-3 grid gap-5" lang={source} dir={source === "ar" ? "rtl" : "ltr"}>
            {experience.map((e) => (
              <div key={e.role.en + e.org.en}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-bold">{t(e.role, source)}</h3>
                  <span className="text-xs text-muted">{t(e.period, source)}</span>
                </div>
                <div className="text-sm text-muted">{t(e.org, source)} — {t(e.place, source)}</div>
                <ul className="mt-1.5 grid gap-1 text-sm">
                  {e.bullets.map((b) => <li key={b.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{t(b, source)}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6" lang={source} dir={source === "ar" ? "rtl" : "ltr"}>
          <h2 className="text-lg font-bold">{heads.projects}</h2>
          <ul className="mt-2 grid gap-1 text-sm">
            {selectedProjectsCv.map((p) => <li key={p.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{t(p, source)}</li>)}
          </ul>
        </section>
        <section className="mt-6" lang={source} dir={source === "ar" ? "rtl" : "ltr"}>
          <h2 className="text-lg font-bold">{heads.education}</h2>
          <p className="mt-2 text-sm"><span className="font-bold">{t(education.degree, source)}</span> — {t(education.school, source)} ({education.year}). {t(education.license, source)}.</p>
          <p className="mt-1 text-sm text-muted">{education.development.map((d) => t(d, source)).join(" · ")}</p>
          <p className="mt-1 text-sm text-muted">{t(education.languages, source)}</p>
        </section>
      </article>
      <div className="mx-auto mt-10 max-w-3xl">
        <ContactCta locale={locale} />
      </div>
    </div>
  );
}
