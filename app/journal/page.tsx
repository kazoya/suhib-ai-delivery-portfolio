import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "كيف بُنيت هذه المحفظة",
  description: "سجل شفاف: من مجلد فارغ وحزمة تقارير إلى موقع منشور، بالخطوات والقرارات والافتراضات.",
};

const steps = [
  { who: "المالك", text: "«هلا تفحصت المشروع وشغلته واعطيتني الرابط».", tone: "user" },
  { who: "Claude Code", text: "المجلد فارغ تماماً. المصدر الوحيد المتاح: حزمة Master Brain المصدَّرة يوم 2026-09-14 على سطح المكتب (476 ملفاً: تقارير، عقول 46 مشروعاً، برومبت لبناء بروفايل من ثمانية ملفات). سؤال واحد للمالك: موقع أم ملفات أم مشروع آخر؟", tone: "ai" },
  { who: "المالك", text: "الاثنان معاً، ثم اجعل المحادثة تُفتح على رابط في متصفح Cursor لأن الطرفية تعرض العربية معكوسة.", tone: "user" },
  { who: "Claude Code", text: "قراءة الحزمة كاملة، كتابة ملفات OUT الثمانية بقواعد الأمانة، ثم موقع HTML ثابت بخادم Node محلي على المنفذ 4570 وصفحة تلخّص الجلسة بالعربية.", tone: "ai" },
  { who: "المالك", text: "انشره على Vercel كما فعلنا مع المصانع وGIZ وسمسار العرب، بأعلى طراز، وأضف رسوماً ومخططاً للمنصة.", tone: "user" },
  { who: "Claude Code", text: "إعادة بناء بـ Next.js 16 + Tailwind 4 + Recharts (نفس عدّة المصانع)، عشر صفحات مشاريع مولَّدة ثابتاً، رسوم بلوحة ألوان مُتحقَّق منها لعمى الألوان، مخطط SVG للمنصة، لوحة أوامر Ctrl+K، سيرة قابلة للطباعة، وصفحة إنجليزية. ثم GitHub → Vercel.", tone: "ai" },
];

const session2 = [
  { who: "المالك", text: "«run /mcp» ثم «use them all».", tone: "user" },
  { who: "Claude Code", text: "فحص ثمانية خوادم MCP بنداء قراءة واحد لكل خادم: درايف وكانفا ونوشن وكروم تعمل؛ فيرسل وجيميل والتقويم وأدسبايرر تحتاج تسجيل دخول من المالك. رابط تفويض فيرسل فُتح في كروم.", tone: "ai" },
  { who: "المالك", text: "افتح واجهة في كروم لأتحدث معك بشكل أفضل، نسخة من هذه المحادثة.", tone: "user" },
  { who: "Claude Code", text: "صفحة «مرآة الجلسة»: نسخة مقروءة من المحادثة بعربية صحيحة، مع صندوق كتابة ينسخ الرد للصقه في الطرفية. تُحدَّث بعد كل تبادل.", tone: "ai" },
  { who: "المالك", text: "هل يمكنني مراسلتك من الويب؟ وهل تصبح موديلاً باسم kazoya داخل كيرسر بعد انتهاء اشتراكه؟", tone: "user" },
  { who: "Claude Code", text: "من الويب: نعم عبر Remote Control (/rc) باشتراك Pro أو Max. داخل كيرسر: لا يمكن كموديل لأن Claude Code ليس API، واستخدام الاشتراك كخلفية لأداة خارجية مخالف لشروط Anthropic؛ البديل إضافة Claude Code الرسمية داخل كيرسر.", tone: "ai" },
  { who: "المالك", text: "كيرسر أوقفني: Total usage limit reached. وسألته: في أي محادثة أنشأت هذا المشروع؟", tone: "user" },
  { who: "Claude Code", text: "حدّ كيرسر قرار مالي للمالك ولا يُعالَج من هنا. أما المشروع فأنشأه Claude Code لا كيرسر، في جلسة صباح 2026-09-16 التي بدأت بـ«هلا تفحصت المشروع وشغلته واعطيتني الرابط»؛ تُستأنف بـ claude --resume.", tone: "ai" },
];

const decisions = [
  "لا بريد ولا هاتف في السيرة أو الموقع؛ يضيفهما المالك قبل الإرسال.",
  "ملف القدرات الداخلي (خارج الحزمة) استُخدم للخلفية المؤسسية ومُيّز كمصدر منفصل.",
  "أرقام هواتف العملاء الموجودة في سجلات المصانع لم تدخل أي صفحة عامة، ومجلد الحزمة الأصلي مستثنى من المستودع.",
  "العنوان الوظيفي «مهندس برمجيات · قائد تسليم رقمي بوكلاء الذكاء الاصطناعي» اجتهاد من الأدلة، لا نقل عن وثيقة.",
  "وثيقة وغياري ظهرا كمنتجات منشورة رغم تسجيلهما 0% في المنصة، لأن لهما روابط حية في README.",
  "الألوان الفئوية في الرسوم أُخذت من لوحة مرجعية اجتازت فحوص عمى الألوان والتباين في الوضعين الفاتح والداكن.",
];

const stack = [
  ["Next.js 16 (App Router)", "توليد ثابت لكل الصفحات، Server Components للوثائق"],
  ["Tailwind CSS 4", "رموز تصميم بمتغيرات CSS، وضع داكن عبر data-theme"],
  ["Recharts 3", "أربعة أنواع رسوم مع جدول بديل لكل رسم"],
  ["Droid Arabic Kufi", "خط عربي محلي مع Geist Mono للأكواد"],
  ["Markdown مخصّص", "محوّل بلا اعتماديات يعرض ملفات OUT بأمان"],
  ["Vercel", "نشر من GitHub، كما في بقية مشاريع المحفظة"],
];

export default function JournalPage() {
  return (
    <div className="container-x py-12">
      <SectionHeading eyebrow="الشفافية" title="كيف بُنيت هذه المحفظة" lead="بُنيت المحفظة بالطريقة نفسها التي تصفها: وكيل ينفّذ تحت قيود مكتوبة، ويسجّل قراراته، ويسأل حين لا يعرف." />

      <ol className="grid gap-3">
        {steps.map((s, i) => (
          <li key={i} className={`card reveal p-5 ${s.tone === "user" ? "border-info/30" : ""}`}>
            <div className={`text-xs font-bold ${s.tone === "user" ? "text-info" : "text-primary"}`}>{s.who}</div>
            <p className="mt-1 text-sm">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14" />
      <SectionHeading eyebrow="الجلسة الثانية · 2026-09-16" title="خوادم MCP ومرآة الجلسة" lead="جلسة مساء اليوم نفسه: ربط الأدوات الخارجية، وحل مشكلة قراءة العربية في الطرفية بصفحة مرآة تُحدَّث بعد كل رد." />
      <ol className="grid gap-3">
        {session2.map((s, i) => (
          <li key={i} className={`card reveal p-5 ${s.tone === "user" ? "border-info/30" : ""}`}>
            <div className={`text-xs font-bold ${s.tone === "user" ? "text-info" : "text-primary"}`}>{s.who}</div>
            <p className="mt-1 text-sm">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-gold/40 bg-gold-soft p-6 reveal">
          <h2 className="font-bold text-gold">قرارات اتخذها الوكيل بنفسه — للمراجعة</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {decisions.map((d) => <li key={d} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{d}</li>)}
          </ul>
        </section>
        <section className="card p-6 reveal">
          <h2 className="font-bold">عدّة البناء</h2>
          <dl className="mt-3 grid gap-2 text-sm">
            {stack.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[max-content_1fr] gap-3">
                <dt className="ltr font-mono text-xs text-primary">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
