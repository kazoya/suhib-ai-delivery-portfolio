import { SectionHeading } from "@/components/shared/section-heading";
import { ContactCta } from "@/components/shared/contact-cta";
import { JourneyChapters, JourneyIndex } from "@/components/journey/journey-chapters";
import { MethodStrip } from "@/components/journey/method-strip";
import { TechnologyGenerations } from "@/components/journey/technology-generations";
import { ClientMode, RecruiterView } from "@/components/journey/recruiter-view";
import { JournalEntries } from "@/components/journey/journal-entries";
import Image from "next/image";
import { eras, funGallery, security } from "@/data/journey";
import { t, type Locale } from "@/lib/i18n";

const copy = {
  ar: {
    eyebrow: "السجل الهندسي",
    h1: "من تشخيص أنظمة DOS إلى التكامل المؤسسي ووكلاء الذكاء الاصطناعي",
    lead: "لم أبدأ التقنية من واجهات API والذكاء الاصطناعي. بدأتها من سطر أوامر ومحرك أقراص لا يُقرأ. هذه الصفحة ليست سيرة زمنية، بل رحلة عبر أجيال من الحوسبة، وكل خبرة قديمة فيها تتصل بقيمة هندسية أعملها اليوم.",
    thesis: "لم أتعلم أحدث إطار عمل فقط. كبرتُ عبر أجيال متعددة من الحوسبة.",
    recruiterEyebrow: "نظرة المسؤول عن التوظيف · 30 ثانية",
    recruiterTitle: "سبعة أسئلة، سبع إجابات، بلا قراءة السجل كله",
    mapEyebrow: "الخريطة",
    mapTitle: "عشرة فصول في أربعة عصور",
    mapLead: "الفصول مرتبة بالعصر لا بالتاريخ الدقيق. السنوات الأولى بلا تواريخ عمداً؛ التواريخ المذكورة هي تواريخ العمل الموثّقة في السيرة.",
    chaptersEyebrow: "الرحلة",
    chaptersTitle: "كل فصل: ما كان، ما بقي منه، وأين يظهر اليوم",
    methodEyebrow: "الثابت",
    methodTitle: "المكدّس تغيّر. الطريقة لم تتغيّر.",
    methodLead: "راقب → اعزل → شخّص → احفظ → أصلح → تحقق → أتمِت. الخطوات نفسها على قرص من التسعينيات وعلى وكيل ذكاء اصطناعي في الإنتاج.",
    genEyebrow: "أجيال التقنية",
    genTitle: "التقدّم عبر العصور، لا قائمة تقنيات متساوية",
    genLead: "المهارات الحالية معبّأة باللون؛ الخبرات التاريخية والتأسيسية بإطار فقط. Sound Forge وDOS خبرات، لا مهارات 2026.",
    clientEyebrow: "لأصحاب الأعمال",
    clientTitle: "ماذا تحتاج؟",
    clientLead: "سبع مشكلات شائعة، ولكل واحدة ما أفعله ودليل عام يمكنك مراجعته.",
    entriesEyebrow: "مدخلات هندسية",
    entriesTitle: "خمسة قرارات هندسية موثّقة بالكامل",
    entriesLead: "لكل مدخل: التحدي، السياق والقيود، القرار، التنفيذ، التحقق، النتيجة، الدرس، وكيف يظهر المبدأ في عملي اليوم.",
    secEyebrow: "الأمن التطبيقي",
    secTitle: "الأمن بالأدلة لا بالألقاب",
    secLead: "الطبقة نفسها من التشخيص، لكن من جهة المهاجم: كل مختبر في PortSwigger محلول، وتقارير هندسة عكسية، وتقييمات أمن تطبيقات للتنفيذيين.",
    secPractice: "ما أفعله فعلاً",
    secShot: "لوحة PortSwigger — لقطة حقيقية 2026-09-16",
    funEyebrow: "على الهامش",
    funTitle: "حين دخل الذكاء الاصطناعي عالمنا",
    funLead: "ثلاث صور مولّدة بالذكاء الاصطناعي صنعتها في حزيران 2026 للمرح. زينة لا دليل، وشريك عمل لا بديل.",
    truthTitle: "ملاحظة صدق",
    truth: [
      "خبرات DOS والوسائط واستعادة البيانات خبرات عملية تأسيسية؛ لا أدّعي تخصصاً حالياً في DOS، ولا شهادة تحقيق جنائي رقمي، ولا استعادة غير مقيدة لأجهزة iPhone.",
      "لا تواريخ للسنوات الأولى، ولا سنوات خبرة محددة لأداة بعينها، ولا عملاء أو نتائج مالية أو نسب أداء لم تُوثَّق.",
      "أكاديمية APCA للذكاء الاصطناعي الصناعي مُظهِر مقترح متوافق مع أهداف GIZ المعلنة، وليست موافقة أو اعتماداً من GIZ.",
    ],
  },
  en: {
    eyebrow: "Engineering journal",
    h1: "From DOS-era systems troubleshooting to enterprise integration and AI agents",
    lead: "I did not start technology with APIs and AI. I started it at a command prompt with a CD-ROM drive that would not read. This page is not a chronological résumé; it is a journey across generations of computing, and every old experience on it connects to an engineering value I apply today.",
    thesis: "I didn't just learn the newest framework. I grew through multiple generations of computing.",
    recruiterEyebrow: "Recruiter view · 30 seconds",
    recruiterTitle: "Seven questions, seven answers, no need to read the whole journal",
    mapEyebrow: "The map",
    mapTitle: "Ten chapters across four eras",
    mapLead: "Chapters are ordered by era, not exact date. The early years are deliberately undated; the dates shown are the employment dates documented in the CV.",
    chaptersEyebrow: "The journey",
    chaptersTitle: "Each chapter: what it was, what survived, and where it shows up today",
    methodEyebrow: "The constant",
    methodTitle: "The stack changed. The method didn't.",
    methodLead: "Observe → isolate → diagnose → preserve → repair → verify → automate. The same steps on a 1990s disk and on an AI agent in production.",
    genEyebrow: "Technology generations",
    genTitle: "Progression across eras, not a flat list of equal technologies",
    genLead: "Current skills are filled; historical and foundational ones are outlined. Sound Forge and DOS are experience, not 2026 skills.",
    clientEyebrow: "For business visitors",
    clientTitle: "What do you need?",
    clientLead: "Seven common problems, each with what I do about it and public proof you can check.",
    entriesEyebrow: "Engineering entries",
    entriesTitle: "Five fully documented engineering decisions",
    entriesLead: "Each entry: challenge, context and constraints, decision, implementation, verification, result, lesson, and how the principle appears in my work today.",
    secEyebrow: "Application security",
    secTitle: "Security by evidence, not by titles",
    secLead: "The same diagnostic layer, seen from the attacker's side: every PortSwigger lab solved, reverse-engineering reports, and application-security assessments for executives.",
    secPractice: "What I actually do",
    secShot: "PortSwigger dashboard — real capture, 2026-09-16",
    funEyebrow: "On the side",
    funTitle: "When AI walked into our world",
    funLead: "Three AI-generated illustrations I made in June 2026, for fun. Decoration, not evidence; a work partner, not a replacement.",
    truthTitle: "Truthfulness note",
    truth: [
      "DOS, multimedia and data-recovery experiences are hands-on foundations; I claim no current DOS specialisation, no digital-forensics certification, and no unrestricted iPhone recovery.",
      "No dates for the early years, no years-of-experience figures for specific tools, and no clients, financial outcomes or performance percentages that are not documented.",
      "The APCA Industrial AI Academy is a proposed demonstrator aligned with GIZ's publicly stated objectives, not a GIZ approval or accreditation.",
    ],
  },
};

export function JournalPageContent({ locale = "ar" }: { locale?: Locale }) {
  const c = copy[locale];
  return (
    <div className="container-x py-12">
      {/* hero */}
      <header className="max-w-3xl">
        <div className="eyebrow">{c.eyebrow}</div>
        <h1 className="h-display mt-2" style={{ textWrap: "balance" }}>
          {c.h1}
          <span className="cursor-blink" aria-hidden="true" />
        </h1>
        <p className="lead mt-5">{c.lead}</p>
        <p className="mt-4 border-s-4 border-primary ps-4 font-bold">{c.thesis}</p>
        <ol className="mt-6 flex flex-wrap gap-2 text-xs" aria-label={locale === "en" ? "Eras" : "العصور"}>
          {eras.map((e) => (
            <li key={e.id}>
              <a href={`#era-${e.id}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 hover:border-primary">
                <span className="font-bold">{t(e.label, locale)}</span>
                <span className="ltr text-muted">{t(e.note, locale)}</span>
              </a>
            </li>
          ))}
        </ol>
      </header>

      {/* recruiter view */}
      <section id="recruiter" className="mt-14 scroll-mt-24" aria-labelledby="recruiter-t">
        <SectionHeading id="recruiter-t" eyebrow={c.recruiterEyebrow} title={c.recruiterTitle} />
        <RecruiterView locale={locale} />
      </section>

      {/* map */}
      <section className="mt-14" aria-labelledby="map-t">
        <SectionHeading id="map-t" eyebrow={c.mapEyebrow} title={c.mapTitle} lead={c.mapLead} />
        <div className="card reveal p-3">
          <JourneyIndex locale={locale} />
        </div>
      </section>

      {/* chapters */}
      <section className="mt-14" aria-labelledby="chapters-t">
        <SectionHeading id="chapters-t" eyebrow={c.chaptersEyebrow} title={c.chaptersTitle} />
        <JourneyChapters locale={locale} />
      </section>

      {/* method */}
      <section id="method" className="mt-16 scroll-mt-24" aria-labelledby="method-t">
        <SectionHeading id="method-t" eyebrow={c.methodEyebrow} title={c.methodTitle} lead={c.methodLead} />
        <div className="reveal"><MethodStrip locale={locale} /></div>
      </section>

      {/* generations */}
      <section id="generations" className="mt-16 scroll-mt-24" aria-labelledby="gen-t">
        <SectionHeading id="gen-t" eyebrow={c.genEyebrow} title={c.genTitle} lead={c.genLead} />
        <div className="reveal"><TechnologyGenerations locale={locale} /></div>
      </section>

      {/* client mode */}
      <section id="client" className="mt-16 scroll-mt-24" aria-labelledby="client-t">
        <SectionHeading id="client-t" eyebrow={c.clientEyebrow} title={c.clientTitle} lead={c.clientLead} />
        <ClientMode locale={locale} />
      </section>

      {/* entries */}
      <section id="entries" className="mt-16 scroll-mt-24" aria-labelledby="entries-t">
        <SectionHeading id="entries-t" eyebrow={c.entriesEyebrow} title={c.entriesTitle} lead={c.entriesLead} />
        <JournalEntries locale={locale} />
      </section>

      {/* security */}
      <section id="security" className="mt-16 scroll-mt-24" aria-labelledby="security-t">
        <SectionHeading id="security-t" eyebrow={c.secEyebrow} title={c.secTitle} lead={c.secLead} />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <figure className="card reveal overflow-hidden">
            <Image src={security.screenshot.src} alt={t(security.screenshot.alt, locale)} width={security.screenshot.width} height={security.screenshot.height} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
            <figcaption className="px-4 py-2 text-xs text-muted">{c.secShot}</figcaption>
          </figure>
          <div className="grid content-start gap-4">
            <ul className="grid gap-2 sm:grid-cols-2">
              {security.facts.map((f) => (
                <li key={f.value} className="card reveal p-4">
                  <div className="ltr text-end text-2xl font-bold text-primary">{f.value}</div>
                  <div className="text-xs text-muted">{t(f.label, locale)}</div>
                </li>
              ))}
            </ul>
            <div className="card reveal p-4">
              <div className="text-xs font-bold text-muted">{c.secPractice}</div>
              <ul className="mt-2 grid gap-1.5 text-sm">
                {security.practice.map((p) => <li key={p.en} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{t(p, locale)}</li>)}
              </ul>
            </div>
            <p className="rounded-xl border border-gold/40 bg-gold-soft p-3 text-xs">{t(security.disclaimer, locale)}</p>
          </div>
        </div>
      </section>

      {/* fun */}
      <section id="fun" className="mt-16 scroll-mt-24" aria-labelledby="fun-t">
        <SectionHeading id="fun-t" eyebrow={c.funEyebrow} title={c.funTitle} lead={c.funLead} />
        <ul className="grid gap-4 md:grid-cols-3">
          {funGallery.map((g) => (
            <li key={g.src} className="card reveal overflow-hidden">
              <Image src={g.src} alt={t(g.caption, locale)} width={g.width} height={g.height} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full" />
              <p className="px-4 py-3 text-xs text-muted">{t(g.caption, locale)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* truth */}
      <section className="mt-16 rounded-2xl border border-gold/40 bg-gold-soft p-6 reveal" aria-labelledby="truth-t">
        <h2 id="truth-t" className="font-bold text-gold">{c.truthTitle}</h2>
        <ul className="mt-3 grid gap-2 text-sm">
          {c.truth.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{x}</li>)}
        </ul>
      </section>

      <div className="mt-12 reveal">
        <ContactCta locale={locale} />
      </div>
    </div>
  );
}
