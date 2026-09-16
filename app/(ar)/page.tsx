import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { capabilities, docs, honesty, howIWork, kpis, owner, projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { LevelBadge } from "@/components/shared/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { ProgressBars } from "@/components/charts/progress-bars";
import { TrajectoryChart } from "@/components/charts/trajectory-chart";

const liveLinks = [
  { label: "براءة الشوبكي", url: "https://baraahalshobaki.vercel.app" },
  { label: "ACI", url: "https://aci-agrochemicals.vercel.app" },
  { label: "المثالية للألبان", url: "https://al-mithaliya-dairy.vercel.app" },
  { label: "أكاديمية APCA", url: "https://apca-industrial-ai-academy.vercel.app" },
  { label: "غياري", url: "https://ghayari.vercel.app" },
  { label: "وثيقة", url: "https://wathiqa-eight.vercel.app" },
];

export default function HomePage() {
  const featured = projects.filter((p) => p.tier === "live");
  const topCaps = capabilities.filter((c) => c.level === "عالي").slice(0, 8);
  return (
    <>
      {/* HERO */}
      <section className="hero-mesh relative overflow-hidden">
        <div className="grid-lines absolute inset-0 -z-0" aria-hidden="true" />
        <div className="container-x relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow reveal in">{owner.title}</div>
            <h1 className="h-display reveal in mt-2">{owner.tagline}</h1>
            <p className="lead reveal in mt-5 max-w-2xl">
              خلفية مؤسسية في Java وC# وSQL، وعمل حالي بـ Next.js وLaravel. أدير محفظة من 46 مشروعاً عبر وكلاء برمجية (Cursor،
              Claude Code، Codex) من منصة متابعة بنيتها بنفسي، لكل مشروع فيها «عقل هندسي»: ما أُنجز، ما يجري، ما يلي، والقيود
              التي لا تُرفع من الواجهة.
            </p>
            <div className="reveal in mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-sm transition hover:brightness-110">
                شاهد الأعمال <ArrowLeft className="size-4" />
              </Link>
              <Link href="/cv" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                <FileText className="size-4" /> السيرة في صفحة
              </Link>
              <a href={owner.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
          </div>

          <dl className="reveal in mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="card p-5">
                <dd className="ltr text-end text-3xl font-bold text-primary">{k.value}</dd>
                <dt className="mt-1 text-sm font-medium">{k.label}</dt>
                <div className="text-xs text-muted">{k.hint}</div>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-muted">{owner.sourceNote}</p>
        </div>
      </section>

      {/* LIVE LINKS STRIP */}
      <section className="border-y border-line bg-surface">
        <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-sm">
          <span className="inline-flex items-center gap-1.5 font-bold text-primary"><CheckCircle2 className="size-4" /> روابط إنتاج حيّة:</span>
          {liveLinks.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">
              {l.label} <ExternalLink className="size-3.5" />
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="الأعمال المختارة"
          title="ستة مشاريع بتقدّم مسجَّل وأدلة"
          lead="مرتّبة حسب قوة الدليل: اختبارات خضراء، commits، وروابط نشر. كل بطاقة تفتح صفحة تفصيلية بالمشكلة وما بُني والدليل والقيود."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
        <div className="reveal mt-6 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            كل الأعمال بما فيها المنتجات والاستكشافات <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-y border-line bg-surface/60 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="المحفظة بالأرقام"
            title="ما تقوله المنصة لا الانطباع"
            lead="كل رسم هنا مبني من ملف JSON صدّرته منصة Master Brain يوم 2026-09-14. زر «جدول» يعرض الأرقام نفسها نصّاً."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="reveal"><ProgressBars /></div>
            <div className="reveal"><TrajectoryChart /></div>
          </div>
          <div className="reveal mt-6 text-center">
            <Link href="/platform" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              مخطط المنصة وبقية الرسوم <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="كيف أعمل مع الوكلاء"
          title="الميزة ليست في لغة بعينها بل في الانضباط"
          lead="كل مشروع مجلد، وكل أمر يحمل سياقه، وكل إنجاز له دليل. هذه هي الخطوات الست كما تعمل فعلاً في المنصة."
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
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-line bg-surface/60 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="القدرات"
            title="ما أستطيع إنجازه — بدليل"
            lead="عالي = دليل نشر أو اختبار أو commit في السجل. القائمة الكاملة (22 قدرة) في مصفوفة القدرات."
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
        </div>
      </section>

      {/* DOCS */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="وثائق البروفايل" title="ثمانية ملفات جاهزة للنسخ" lead="بروفايل، سيرة، دراسات حالة، مصفوفة قدرات، تموضع، نصوص المنصات، قوالب تقديم، وفجوات صادقة مع خطة أسبوعين." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d) => (
            <Link key={d.slug} href={`/docs/${d.slug}`} className="card reveal group p-4 transition hover:-translate-y-0.5 hover:border-primary">
              <FileText className="mb-2 size-5 text-primary" />
              <div className="font-bold group-hover:text-primary">{d.title}</div>
              <div className="mt-1 text-xs text-muted">{d.blurb}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* HONESTY + CTA */}
      <section className="container-x pb-16">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal rounded-2xl border border-gold/40 bg-gold-soft p-6">
            <h2 className="text-lg font-bold text-gold">ما أقوله بصدق — حتى لا يُقرأ هذا كتفاخر</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {honesty.map((h) => <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{h}</li>)}
            </ul>
          </div>
          <div className="card reveal flex flex-col justify-between p-6">
            <div>
              <h2 className="text-lg font-bold">هل يناسبك هذا النهج؟</h2>
              <p className="mt-2 text-sm text-muted">
                تعاقد عن بُعد أو دور هندسي لائق في منتجات عربية/ثنائية اللغة، أو فريق يريد تبنّي وكلاء الذكاء الاصطناعي بحوكمة حقيقية.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={owner.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"><GithubIcon className="size-4" /> GitHub</a>
              <a href={owner.mostaql} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-primary">مستقل</a>
              <a href={owner.baeed} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-primary">بعيد</a>
              <Link href="/docs/cover-letters" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-primary">قوالب التقديم</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
