import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { PrintButton } from "@/components/shared/print-button";
import { ContactCta } from "@/components/shared/contact-cta";
import { owner } from "@/data/portfolio";
import { coreSkills, education, experience, selectedProjectsCv } from "@/data/journey";
import { alternatesFor, ogAr, profilePageLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "السيرة الذاتية — صهيب عسراوي، مستشار تقني أول ومهندس حلول",
  description: "سيرة صهيب عسراوي القابلة للطباعة (A4): أكثر من عشرين عاماً في الأنظمة المؤسسية وتكاملها، Java وC# وSQL Server وOracle، وكلاء الذكاء الاصطناعي والأتمتة، وخبرة ميدانية في الشبكات والأجهزة.",
  alternates: alternatesFor("/cv"),
  openGraph: { ...ogAr, title: "السيرة الذاتية — صهيب عسراوي", url: "/cv" },
};

export default function CvPage() {
  return (
    <div className="container-x py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/cv", "ar")) }} />
      <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">نسخة A4 قابلة للطباعة أو الحفظ PDF. النسخة الإنجليزية الموسّعة من زر الطباعة في الصفحة الإنجليزية.</p>
        <PrintButton />
      </div>

      <article className="cv-page card mx-auto max-w-3xl p-6 sm:p-10 print:border-0 print:p-0 print:shadow-none" itemScope itemType="https://schema.org/Person">
        <header className="border-b border-line pb-5">
          <h1 className="text-2xl font-bold sm:text-3xl" itemProp="name">{owner.fullName}</h1>
          <div className="ltr mt-0.5 text-end text-sm text-muted" itemProp="alternateName">{owner.fullNameEn}</div>
          <p className="mt-2 font-bold text-primary" itemProp="jobTitle">{owner.title}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            <li className="inline-flex items-center gap-1.5"><MapPin className="size-4" /> {owner.location}</li>
            <li className="inline-flex items-center gap-1.5"><Mail className="size-4" /> <a className="ltr hover:text-primary" href={`mailto:${owner.email}`} itemProp="email">{owner.email}</a></li>
            {owner.publicPhone ? <li className="inline-flex items-center gap-1.5"><Phone className="size-4" /> <span className="ltr">{owner.phone}</span></li> : null}
            <li className="inline-flex items-center gap-1.5"><LinkedinIcon className="size-4" /> <a className="ltr hover:text-primary" href={owner.linkedin} itemProp="sameAs">linkedin.com/in/suhib-al-saleh-0a6136264</a></li>
            <li className="inline-flex items-center gap-1.5"><GithubIcon className="size-4" /> <a className="ltr hover:text-primary" href={owner.github} itemProp="sameAs">github.com/{owner.githubHandle}</a></li>
            {owner.employers.map((e) => <li key={e.url} className="ltr"><a className="hover:text-primary" href={e.url}>{e.label}</a></li>)}
          </ul>
        </header>

        <section className="mt-6 break-inside-avoid" aria-labelledby="cv-summary">
          <h2 id="cv-summary" className="text-lg font-bold">الملخص المهني</h2>
          <p className="mt-2 text-sm leading-relaxed" itemProp="description">
            مهندس برمجيات ومستشار تقني بخبرة تتجاوز عشرين عاماً في بناء الأنظمة المؤسسية والتشغيلية وتكاملها ودعمها وتشخيصها في القطاع البنكي والتعليمي والعمليات شبه الحكومية والعملاء التجاريين.
            يشمل العمل الأساسي خلفيات Java وC#، وMicrosoft SQL Server وOracle، وتكامل الأنظمة، وتطبيقات Windows، وFlutter/Dart، ومنصات التحكم بالدخول والحضور، وأنظمة الطوابير وتجربة العملاء الذكية، ووكلاء الذكاء الاصطناعي.
            تشمل الخبرة الأقدم في البنية التحتية إصلاح الحواسيب، وإدارة الشبكات، وتثبيت أنظمة التشغيل واستعادتها، وتشخيص الإقلاع، ومسارات الوضع الآمن، واستكشاف أخطاء Linux/Ubuntu، ودعم الطرفيات والطابعات.
            مرتاح في الانتقال من التشخيص التشغيلي منخفض المستوى إلى المعمارية والأتمتة والتكامل والتسليم الإنتاجي.
          </p>
        </section>

        <section id="skills" className="mt-6 scroll-mt-24 break-inside-avoid" aria-labelledby="cv-skills">
          <h2 id="cv-skills" className="text-lg font-bold">المهارات الأساسية</h2>
          <dl className="mt-2 grid gap-1.5 text-sm">
            {coreSkills.map((s) => (
              <div key={s.group.en} className="grid gap-1 sm:grid-cols-[170px_1fr]">
                <dt className="font-bold">{s.group.ar}</dt>
                <dd className="ltr text-end text-muted sm:text-start">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="mt-6 scroll-mt-24" aria-labelledby="cv-exp">
          <h2 id="cv-exp" className="text-lg font-bold">الخبرة المهنية</h2>
          <div className="mt-3 grid gap-5">
            {experience.map((e) => (
              <div key={e.role.en + e.org.en} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-bold">{e.role.ar}</h3>
                  <span className="ltr text-xs text-muted">{e.period.en}</span>
                </div>
                <div className="text-sm text-muted">{e.org.ar} — {e.place.ar}</div>
                <ul className="mt-1.5 grid gap-1 text-sm">
                  {e.bullets.map((b) => <li key={b.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{b.ar}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 break-inside-avoid" aria-labelledby="cv-projects">
          <h2 id="cv-projects" className="text-lg font-bold">مشاريع مختارة</h2>
          <ul className="mt-2 grid gap-1 text-sm">
            {selectedProjectsCv.map((p) => <li key={p.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{p.ar}</li>)}
          </ul>
        </section>

        <section className="mt-6 break-inside-avoid" aria-labelledby="cv-edu">
          <h2 id="cv-edu" className="text-lg font-bold">التعليم والتطوير المهني</h2>
          <p className="mt-2 text-sm">
            <span className="font-bold">{education.degree.ar}</span> — {education.school.ar} ({education.year}). {education.license.ar}.
          </p>
          <p className="mt-1 text-sm text-muted">{education.development.map((d) => d.ar).join(" · ")}</p>
          <p className="mt-1 text-sm text-muted">اللغات: {education.languages.ar}</p>
        </section>
      </article>

      <div className="no-print mx-auto mt-8 max-w-3xl reveal">
        <ContactCta locale="ar" />
      </div>
    </div>
  );
}
