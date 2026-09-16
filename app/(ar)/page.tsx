import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Briefcase, CheckCircle2, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { capabilities, deploymentStats, docs, enterpriseBackground, honesty, howIWork, kpis, owner, projects } from "@/data/portfolio";
import { eras, method } from "@/data/journey";
import { SectionHeading } from "@/components/shared/section-heading";
import { LevelBadge } from "@/components/shared/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/shared/contact-cta";
import { alternatesFor, ogAr, profilePageLd } from "@/lib/seo";
import { HeroNodeField } from "@/components/effects/hero-effects";
import { LiveAmmanClock } from "@/components/effects/live-amman-clock";

export const metadata: Metadata = {
  title: { absolute: `${owner.name} — مستشار تقني أول ومهندس حلول · وكلاء الذكاء الاصطناعي وتكامل الأنظمة` },
  description:
    "صهيب عسراوي، مستشار تقني أول ومهندس حلول من عمّان: أكثر من عشرين عاماً في بناء الأنظمة المؤسسية وتكاملها ودعمها، وعمل حالي في وكلاء الذكاء الاصطناعي والأتمتة. ست منصات حيّة، نظامان إنتاجيان لعملاء، وسجل هندسي من DOS إلى الذكاء الاصطناعي.",
  alternates: alternatesFor("/", { ar: "/", en: "/en" }),
  openGraph: { ...ogAr, url: "/" },
};

const liveLinks = [
  { label: "براءة الشوبكي", url: "https://baraahalshobaki.vercel.app" },
  { label: "ACI", url: "https://aci-agrochemicals.vercel.app" },
  { label: "المثالية للألبان", url: "https://al-mithaliya-dairy.vercel.app" },
  { label: "أكاديمية APCA (مُظهِر)", url: "https://apca-industrial-ai-academy.vercel.app" },
  { label: "غياري", url: "https://ghayari.vercel.app" },
  { label: "وثيقة", url: "https://wathiqa-eight.vercel.app" },
];

export default function HomePage() {
  const featured = projects.filter((p) => p.tier === "live");
  const shots = projects.filter((p) => p.screenshots?.length).slice(0, 3);
  const topCaps = capabilities.filter((c) => c.level === "عالي").slice(0, 8);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/", "ar")) }} />

      {/* HERO */}
      <section className="hero-mesh relative overflow-hidden">
        <div className="grid-lines absolute inset-0 -z-0" aria-hidden="true" />
        <HeroNodeField />
        <div className="container-x relative py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="reveal in flex flex-wrap items-center gap-3">
                <div className="eyebrow">{owner.title}</div>
                <LiveAmmanClock locale="ar" />
              </div>
              <h1 className="h-display reveal in mt-2" style={{ textWrap: "balance" }}>{owner.tagline}</h1>
              <p className="lead reveal in mt-5 max-w-2xl">{owner.summary}</p>
              <div className="reveal in mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${owner.email}?subject=${encodeURIComponent("دور هندسي — عبر المحفظة")}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-sm transition hover:brightness-110">
                  <Briefcase className="size-4" /> ناقش دوراً أو مشروعاً
                </a>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                  شاهد الأعمال <ArrowLeft className="size-4" />
                </Link>
                <Link href="/cv" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                  <FileText className="size-4" /> السيرة الذاتية
                </Link>
              </div>
            </div>
            {shots[0]?.screenshots?.[0] ? (
              <div className="reveal in relative hidden lg:block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface shadow-lg">
                  <Image src={shots[0].screenshots[0].src} alt={shots[0].screenshots[0].alt} fill priority sizes="(min-width: 1024px) 40vw, 0px" className="object-cover object-top" />
                </div>
                <div className="mt-2 text-xs text-muted">لقطة حقيقية: {shots[0].name.split(" — ")[0]}</div>
              </div>
            ) : null}
          </div>

          <ul className="reveal in mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="أرقام موثّقة">
            {kpis.map((k) => (
              <li key={k.label} className="card p-5">
                <div className="ltr text-end text-3xl font-bold text-primary">{k.value}</div>
                <div className="mt-1 text-sm font-medium">{k.label}</div>
                <div className="text-xs text-muted">{k.hint}</div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">{owner.sourceNote}</p>
        </div>
      </section>

      {/* LIVE LINKS STRIP */}
      <section className="border-y border-line bg-surface">
        <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-sm">
          <span className="inline-flex items-center gap-1.5 font-bold text-primary"><CheckCircle2 className="size-4" /> منصات حيّة:</span>
          {liveLinks.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">
              {l.label} <ExternalLink className="size-3.5" />
            </a>
          ))}
          <Link href="/platform#deployments" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            و{deploymentStats.urls - liveLinks.length} رابطاً آخر <ArrowLeft className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* JOURNEY TEASER */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="السجل الهندسي"
          title="من تشخيص أنظمة DOS إلى التكامل المؤسسي ووكلاء الذكاء الاصطناعي"
          lead="لم أتعلم أحدث إطار عمل فقط؛ كبرتُ عبر أجيال متعددة من الحوسبة. أربعة عصور، عشرة فصول، وطريقة واحدة لم تتغير."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <ol className="grid gap-2">
            {eras.map((e, i) => (
              <li key={e.id} className="card reveal flex items-center gap-4 p-4">
                <span className="ltr font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-bold">{e.label.ar}</span>
                <span className="ltr text-xs text-muted">{e.note.ar}</span>
              </li>
            ))}
          </ol>
          <div className="card reveal p-5">
            <div className="text-sm font-bold text-primary">المكدّس تغيّر. الطريقة لم تتغيّر.</div>
            <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              {method.map((m, i) => (
                <li key={m.step.en} className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-surface-2 px-3 py-1 font-medium">{m.step.ar}</span>
                  {i < method.length - 1 ? <ArrowLeft className="size-3.5 text-muted" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted">
              كل خبرة قديمة في السجل تتصل بقيمة هندسية أعملها اليوم: تشخيص DOS → فهم ما تحت الواجهة، استعادة البيانات → الحفاظ أولاً، إدارة الشبكات → حدس الأنظمة الموزعة.
            </p>
            <Link href="/journal" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              اقرأ السجل الهندسي كاملاً <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-y border-line bg-surface/60 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="الأعمال المختارة"
            title="ستة مشاريع بدور واضح ونتيجة موثّقة"
            lead="لكل بطاقة: المشكلة، دوري، النتيجة المتحقَّق منها، ونوع الدليل. الحالة (حيّ، تجريبي، محاكاة، نظام داخلي) بدل نسب الإنجاز الداخلية."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
          <div className="reveal mt-6 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              كل الأعمال بما فيها المنتجات والنماذج الأولية <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ENTERPRISE BACKGROUND */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="الخلفية المؤسسية"
          title="أنظمة إنتاجية لعملاء قبل الويب الحديث وبعده"
          lead="Java، C#، SQL Server، Oracle، وأجهزة ميدانية. هذه هي الأنظمة التي تعلّمت منها كيف تفشل الأنظمة وكيف تتصل."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {enterpriseBackground.map((e) => (
            <div key={e.project} className="card reveal p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="font-bold">{e.project}</div>
                <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-bold text-primary">{e.status}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.what}</p>
              <div className="ltr mt-2 text-end text-xs text-muted">{e.tech}</div>
            </div>
          ))}
        </div>
        <div className="reveal mt-6">
          <Link href="/cv#experience" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            الخبرة المهنية كاملة في السيرة <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="border-y border-line bg-surface/60 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="كيف أعمل"
            title="الانضباط هو الميزة، ووكلاء البرمجة أداة تحته"
            lead="أستخدم وكلاء الذكاء الاصطناعي في التنفيذ والمراجعة تحت قيود مكتوبة. القرار التقني والدليل يبقيان عندي. هذه هي القواعد الست كما تعمل فعلاً."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howIWork.map((s, i) => (
              <li key={s.title} className="card reveal p-5">
                <div className="mb-3 grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="القدرات"
          title="ما أستطيع إنجازه — بدليل"
          lead="عالي = نظام في الإنتاج، أو نشر، أو اختبار، أو commit في السجل. القائمة الكاملة في مصفوفة القدرات."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {topCaps.map((c) => (
            <div key={c.name} className="card reveal flex items-start gap-3 p-4">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="flex-1">
                <div className="font-bold">{c.name}</div>
                <div className="text-sm text-muted">{c.evidence}</div>
              </div>
              <LevelBadge level={c.level} />
            </div>
          ))}
        </div>
        <div className="reveal mt-6 text-center">
          <Link href="/docs/capabilities" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            مصفوفة القدرات الكاملة <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>

      {/* DOCS */}
      <section className="border-y border-line bg-surface/60 py-16">
        <div className="container-x">
          <SectionHeading eyebrow="وثائق البروفايل" title="ثمانية ملفات جاهزة للنسخ" lead="بروفايل، سيرة، دراسات حالة، مصفوفة قدرات، تموضع، نصوص المنصات، قوالب تقديم، وفجوات صادقة." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {docs.map((d) => (
              <Link key={d.slug} href={`/docs/${d.slug}`} className="card reveal group p-4 transition hover:-translate-y-0.5 hover:border-primary">
                <FileText className="mb-2 size-5 text-primary" />
                <div className="font-bold group-hover:text-primary">{d.title}</div>
                <div className="mt-1 text-xs text-muted">{d.blurb}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HONESTY + CONTACT */}
      <section className="container-x py-16">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal rounded-2xl border border-gold/40 bg-gold-soft p-6">
            <h2 className="text-lg font-bold text-gold">ما أقوله بصدق</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {honesty.map((h) => <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{h}</li>)}
            </ul>
          </div>
          <div className="reveal">
            <ContactCta locale="ar" className="h-full" />
          </div>
        </div>
      </section>
    </>
  );
}
