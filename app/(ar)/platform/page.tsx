import type { Metadata } from "next";
import { entriesByModel, entriesByType, platformSummary, projectsByStatus } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlatformDiagram } from "@/components/diagrams/platform-diagram";
import { ProgressBars } from "@/components/charts/progress-bars";
import { ActivityChart } from "@/components/charts/activity-chart";
import { TrajectoryChart } from "@/components/charts/trajectory-chart";
import { ShareBars } from "@/components/charts/share-bars";

export const metadata: Metadata = {
  title: "المنصة والأرقام",
  description: "مخطط منصة Master Brain ورسوم بيانية من تقرير 2026-09-14: الإنجاز لكل مشروع، النشاط اليومي، توزيع المدخلات والحالات.",
};

const facts = [
  { k: "المشاريع", v: platformSummary.projects },
  { k: "متوسط الإنجاز", v: `${platformSummary.avgProgress}%` },
  { k: "مدخلات التقدّم", v: platformSummary.entries },
  { k: "مقترحات النماذج", v: platformSummary.suggestions },
];

const roles = [
  { agent: "Cursor Auto", id: "cursor", role: "مدير التشغيل والتنفيذ", good: "أدوات، متصفح، Git، دمج، اختبار، تشغيل الجسر، تسجيل العقل", not: "تجاوز بوابات المالك (CAPTCHA، دفع، نشر حسّاس)" },
  { agent: "Claude Code", id: "claude", role: "أعمق مراجعة كود ومعمارية", good: "تصميم الخوارزميات، مراجعة عميقة، CLAUDE.md، اختبارات صعبة", not: "لا يستبدل Cursor في التنفيذ متعدد الأدوات إلا إذا طُلب" },
  { agent: "Codex", id: "codex", role: "مساعد مكتب + سكربتات", good: "وثائق، سكربتات، تنظيف، إصلاحات صغيرة", not: "لا يغيّر ملفات أعلن غيره أنها قيد العمل" },
  { agent: "ChatGPT", id: "chatgpt", role: "إبداع وصور وصياغة", good: "برومبتات صور، صياغة، أفكار تحسين", not: "لا يكتب أسراراً في الصور أو السجل" },
  { agent: "المالك", id: "human", role: "القرار النهائي", good: "بوابات المال، الحسابات، النشر الخارجي", not: "—" },
];

export default function PlatformPage() {
  return (
    <div className="container-x py-12">
      <SectionHeading
        eyebrow="المنصة والأرقام"
        title="Master Brain: كيف يُدار 46 مشروعاً بعقل هندسي لكل واحد"
        lead={`منصة Node.js بلا اعتماديات تتابع المحفظة وتوجّه الوكلاء. الأرقام أدناه من تقرير الفترة ${platformSummary.period} الصادر ${platformSummary.generated}.`}
      />

      <dl className="reveal mb-8 grid gap-3 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.k} className="card p-4">
            <dd className="ltr text-end text-2xl font-bold text-primary">{f.v}</dd>
            <dt className="text-sm text-muted">{f.k}</dt>
          </div>
        ))}
      </dl>

      <div className="reveal"><PlatformDiagram /></div>

      <section className="mt-12">
        <SectionHeading eyebrow="الأدوار" title="خمسة أطراف، لكلٍّ ما يفعله وما لا يفعله وحده" lead="كما هو مكتوب في Master HQ. لا يدّعي وكيل أنه نفّذ عملاً لم يكتبه في سجل الجسر." />
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
                <tr key={r.id} className="border-t border-line bg-surface">
                  <td className="px-4 py-3 font-bold">{r.agent}<span className="ltr block text-[11px] font-mono font-normal text-muted">from={r.id}</span></td>
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
        <SectionHeading eyebrow="الرسوم" title="المحفظة بالأرقام" lead="كل رسم له زر «جدول» يعرض القيم نفسها. الألوان الفئوية مثبّتة الترتيب ومُتحقَّق منها لعمى الألوان في الوضعين." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="reveal"><ProgressBars /></div>
          <div className="reveal"><TrajectoryChart /></div>
          <div className="reveal"><ActivityChart /></div>
          <div className="reveal grid gap-5">
            <ShareBars title="حالة المشاريع الـ 46" note="مفتوح 42 · سكون 3 · بانتظار ردّك 1" parts={projectsByStatus} />
            <ShareBars title="مدخلات التقدّم حسب النوع" note="99 مدخلاً" parts={entriesByType} />
            <ShareBars title="مدخلات التقدّم حسب النموذج" note="من كتب المدخل في السجل" parts={entriesByModel} />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          { t: "قاعدة واحدة تحكم كل شيء", d: "كل عملية معرّفة مرّة واحدة في src/ops.js (مخطط JSON + معالج) ثم تُعرض بثلاث قنوات: أداة MCP، POST /api/op/<name>، وأمر CLI. فتتصرف القنوات الثلاث بالطريقة نفسها." },
          { t: "الاتجاه المعاكس", d: "حين لا يعرف الوكيل قراراً (رقم، اعتماد، تفضيل) ينادي ask_owner، فينتقل المشروع إلى «بانتظار ردّك» ويظهر السؤال على اللوحة حتى يجيب المالك. هذا هو البديل الصريح للتخمين." },
          { t: "المصادقة", d: "كلمات المرور PBKDF2-HMAC-SHA512 بـ 210,000 تكرار وملح 16 بايت. الجلسة كوكي موقّع HMAC-SHA256، httpOnly، SameSite=Lax، 12 ساعة. لا CORS عمداً: الوسيط خادمك لا المتصفح." },
        ].map((c) => (
          <div key={c.t} className="card reveal p-6">
            <h3 className="font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted">{c.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
