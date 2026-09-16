import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { entriesByType, platformSummary, projectsByStatus } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlatformDiagram } from "@/components/diagrams/platform-diagram";
import { ProgressBars } from "@/components/charts/progress-bars";
import { ActivityChart } from "@/components/charts/activity-chart";
import { TrajectoryChart } from "@/components/charts/trajectory-chart";
import { ShareBars } from "@/components/charts/share-bars";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: "منصة المتابعة — حوكمة 46 مبادرة متتبَّعة",
  description: "Master Brain: منصة Node.js بلا اعتماديات بناها صهيب عسراوي لحوكمة محفظة من 46 مبادرة متتبَّعة: عقل هندسي لكل مشروع، كتالوج عمليات واحد عبر CLI وHTTP وMCP، وتقارير. الأرقام من تقرير 2026-09-14.",
  alternates: alternatesFor("/platform"),
  openGraph: { title: "منصة المتابعة — Master Brain", url: "/platform" },
};

const facts = [
  { k: "مبادرة متتبَّعة", v: platformSummary.projects, hint: "معظمها مخزون مكتشَف" },
  { k: "بتقدّم مسجَّل ودليل", v: 8, hint: "المعروضة في الأعمال" },
  { k: "مدخل تقدّم موثّق", v: platformSummary.entries, hint: "10–14 أيلول 2026" },
  { k: "مقترح ينتظر قراراً", v: platformSummary.suggestions, hint: "من مراجعات مستقلة" },
];

const roles = [
  { party: "صهيب (المالك)", role: "القرار النهائي والمعمارية", good: "المعمارية، القيود، بوابات المال والحسابات والنشر الخارجي، مراجعة الدليل", not: "—" },
  { party: "وكيل تنفيذ", role: "تنفيذ متعدد الأدوات", good: "أدوات، متصفح، Git، دمج، اختبار، تسجيل العقل", not: "تجاوز بوابات المالك (CAPTCHA، دفع، نشر حسّاس)" },
  { party: "وكيل مراجعة", role: "مراجعة كود ومعمارية", good: "تصميم الخوارزميات، مراجعة عدائية، اختبارات صعبة", not: "لا يستبدل وكيل التنفيذ إلا إذا طُلب" },
  { party: "وكيل وثائق", role: "وثائق وسكربتات", good: "وثائق، سكربتات، تنظيف، إصلاحات صغيرة", not: "لا يغيّر ملفات أعلن غيره أنها قيد العمل" },
];

export default function PlatformPage() {
  return (
    <div className="container-x py-12">
      <SectionHeading
        as="h1"
        eyebrow="منصة المتابعة"
        title="Master Brain: كيف أحكم 46 مبادرة متتبَّعة بعقل هندسي لكل واحدة"
        lead={`منصة Node.js بلا اعتماديات بنيتها لحوكمة المحفظة وتوجيه وكلاء البرمجة تحت قيود مكتوبة. هذه الصفحة دليل على الحوكمة لا على الإنجاز: معظم المبادرات مخزون مكتشَف، والمعروض في الأعمال ما له دليل فقط. الأرقام من تقرير الفترة ${platformSummary.period} الصادر ${platformSummary.generated}.`}
      />

      <dl className="reveal mb-8 grid gap-3 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.k} className="card p-4">
            <dd className="ltr text-end text-2xl font-bold text-primary">{f.v}</dd>
            <dt className="text-sm">{f.k}</dt>
            <div className="text-xs text-muted">{f.hint}</div>
          </div>
        ))}
      </dl>

      <div className="reveal"><PlatformDiagram /></div>

      <section className="mt-12">
        <SectionHeading eyebrow="توزيع العمل" title="طرف واحد يقرر، وثلاثة أدوار للوكلاء" lead="كما هو مكتوب في المنصة. لا يدّعي وكيل أنه نفّذ عملاً لم يكتبه في السجل مع دليله، ولا يُفوَّض قرار مالي أو نشر خارجي." />
        <div className="reveal overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface-2">
                <th className="px-4 py-3 text-start">الطرف</th>
                <th className="px-4 py-3 text-start">الدور</th>
                <th className="px-4 py-3 text-start">يُحسِن</th>
                <th className="px-4 py-3 text-start">لا يفعل وحده</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r) => (
                <tr key={r.party} className="border-t border-line bg-surface">
                  <td className="px-4 py-3 font-bold">{r.party}</td>
                  <td className="px-4 py-3">{r.role}</td>
                  <td className="px-4 py-3 text-muted">{r.good}</td>
                  <td className="px-4 py-3 text-muted">{r.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="الرسوم" title="المبادرات المتتبَّعة بالأرقام" lead="أرقام داخلية من منصة المتابعة، لا مقياس إنجاز عام. كل رسم له زر «جدول» يعرض القيم نفسها." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="reveal"><ProgressBars /></div>
          <div className="reveal"><TrajectoryChart /></div>
          <div className="reveal"><ActivityChart /></div>
          <div className="reveal grid gap-5">
            <ShareBars title="حالة المبادرات الـ 46" note="مفتوح 42 · سكون 3 · بانتظار قرار 1" parts={projectsByStatus} />
            <ShareBars title="مدخلات التقدّم حسب النوع" note="99 مدخلاً" parts={entriesByType} />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          { t: "قاعدة واحدة تحكم كل شيء", d: "كل عملية معرّفة مرّة واحدة في src/ops.js (مخطط JSON + معالج) ثم تُعرض بثلاث قنوات: أداة MCP، POST /api/op/<name>، وأمر CLI. فتتصرف القنوات الثلاث بالطريقة نفسها." },
          { t: "الاتجاه المعاكس", d: "حين لا يعرف الوكيل قراراً (رقم، اعتماد، تفضيل) ينادي ask_owner، فينتقل المشروع إلى «بانتظار قرار» ويظهر السؤال على اللوحة حتى أجيب. هذا هو البديل الصريح للتخمين." },
          { t: "المصادقة", d: "كلمات المرور PBKDF2-HMAC-SHA512 بـ 210,000 تكرار وملح 16 بايت. الجلسة كوكي موقّع HMAC-SHA256، httpOnly، SameSite=Lax، 12 ساعة. لا CORS عمداً." },
        ].map((c) => (
          <div key={c.t} className="card reveal p-6">
            <h3 className="font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted">{c.d}</p>
          </div>
        ))}
      </section>

      <div className="reveal mt-10">
        <Link href="/projects/master-brain" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          دراسة حالة المنصة كاملة <ArrowLeft className="size-4" />
        </Link>
      </div>
    </div>
  );
}
