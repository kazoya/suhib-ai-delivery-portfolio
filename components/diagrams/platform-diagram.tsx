/**
 * Inline SVG: how Master Brain + Master HQ route an owner's command to an agent
 * and back into the project's engineering mind. Colors come from CSS tokens so
 * it is legible in both themes. Drawn LTR on purpose (a flow reads as a pipeline);
 * labels are Arabic.
 */
export function PlatformDiagram() {
  const box = "fill-[var(--surface)] stroke-[var(--line)]";
  const txt = "fill-[var(--foreground)]";
  const sub = "fill-[var(--muted)]";
  const font = { fontFamily: "var(--font-sans)" };
  return (
    <figure className="card overflow-x-auto p-4 sm:p-6" aria-labelledby="pd-title">
      <figcaption id="pd-title" className="mb-3 font-bold">
        مخطط المنصة: من أمر المالك إلى عقل المشروع
      </figcaption>
      <div dir="ltr">
      <svg viewBox="0 0 980 420" className="mx-auto min-w-[720px] w-full" role="img" aria-labelledby="pd-title" aria-describedby="pd-desc">
        <desc id="pd-desc">
          المالك يرسل أمراً من اللوحة أو الـ CLI أو MCP إلى كتالوج عمليات واحد، فيُبنى برومبت بسياق المشروع ويُشغَّل وكيل البرمجة داخل مجلد المشروع،
          وتُكتب النتيجة في سجل المشروع وعقله، ثم تُولَّد التقارير. جسر منفصل ينسّق أربعة وكلاء برمجة تحت إشراف المالك.
        </desc>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
          </marker>
        </defs>

        {/* Owner */}
        <g>
          <rect x="20" y="150" width="130" height="70" rx="14" className="fill-[var(--primary)]" />
          <text x="85" y="180" textAnchor="middle" fill="var(--primary-foreground)" fontSize="15" fontWeight="700" style={font}>المالك</text>
          <text x="85" y="202" textAnchor="middle" fill="var(--primary-foreground)" fontSize="11" style={font}>قرار · أمر · إجابة</text>
        </g>

        {/* Channels */}
        {[
          ["لوحة HTTP", 60],
          ["CLI  mb", 150],
          ["خادم MCP", 240],
        ].map(([label, y]) => (
          <g key={label as string}>
            <rect x="200" y={y as number} width="120" height="50" rx="12" className={box} strokeWidth="1.5" />
            <text x="260" y={(y as number) + 31} textAnchor="middle" className={txt} fontSize="13" fontWeight="600" style={font}>{label}</text>
          </g>
        ))}
        <path d="M150 185 L200 85" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        <path d="M150 185 L200 175" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        <path d="M150 185 L200 265" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

        {/* ops catalogue */}
        <rect x="370" y="120" width="150" height="110" rx="14" className={box} strokeWidth="1.5" />
        <text x="445" y="152" textAnchor="middle" className={txt} fontSize="14" fontWeight="700" style={font}>كتالوج العمليات</text>
        <text x="445" y="174" textAnchor="middle" className={sub} fontSize="11" fontFamily="var(--font-mono)">src/ops.js</text>
        <text x="445" y="196" textAnchor="middle" className={sub} fontSize="11" style={font}>مخطط JSON + معالج</text>
        <text x="445" y="214" textAnchor="middle" className={sub} fontSize="11" style={font}>تُعرَّف مرة، تُعرض ثلاثاً</text>
        {[85, 175, 265].map((y) => (
          <path key={y} d={`M320 ${y} L370 ${y < 175 ? 150 : y > 175 ? 200 : 175}`} stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        ))}

        {/* task channel */}
        <rect x="570" y="40" width="170" height="90" rx="14" className={box} strokeWidth="1.5" />
        <text x="655" y="68" textAnchor="middle" className={txt} fontSize="14" fontWeight="700" style={font}>قناة الأوامر</text>
        <text x="655" y="90" textAnchor="middle" className={sub} fontSize="11" style={font}>برومبت = الأمر + سياق المشروع</text>
        <text x="655" y="108" textAnchor="middle" className={sub} fontSize="11" style={font}>مهمة واحدة · مهلة 20 دقيقة</text>
        <path d="M520 150 L570 95" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

        {/* agent */}
        <rect x="800" y="40" width="160" height="90" rx="14" className="fill-[var(--gold-soft)] stroke-[var(--gold)]" strokeWidth="1.5" />
        <text x="880" y="70" textAnchor="middle" className={txt} fontSize="14" fontWeight="700" style={font}>Claude Code</text>
        <text x="880" y="92" textAnchor="middle" className={sub} fontSize="11" fontFamily="var(--font-mono)">claude -p · cwd = المشروع</text>
        <text x="880" y="112" textAnchor="middle" className={sub} fontSize="11" style={font}>ينفّذ ثم يسجّل</text>
        <path d="M740 85 L800 85" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

        {/* project folder */}
        <rect x="570" y="180" width="170" height="120" rx="14" className={box} strokeWidth="1.5" />
        <text x="655" y="206" textAnchor="middle" className={txt} fontSize="14" fontWeight="700" style={font}>مجلد المشروع</text>
        {["project.json", "brain.json", "journal/*.md", "BRAIN.md (مولَّد)"].map((f, i) => (
          <text key={f} x="655" y={228 + i * 18} textAnchor="middle" className={sub} fontSize="11" fontFamily="var(--font-mono)">{f}</text>
        ))}
        <path d="M520 200 L570 240" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
        <path d="M880 130 C880 200 760 200 740 235" stroke="var(--gold)" strokeWidth="1.8" fill="none" strokeDasharray="5 4" markerEnd="url(#arr)" />
        <text x="835" y="185" textAnchor="middle" className={sub} fontSize="11" style={font}>مدخل تقدّم + دليل</text>

        {/* reports */}
        <rect x="800" y="220" width="160" height="80" rx="14" className={box} strokeWidth="1.5" />
        <text x="880" y="250" textAnchor="middle" className={txt} fontSize="14" fontWeight="700" style={font}>التقارير</text>
        <text x="880" y="272" textAnchor="middle" className={sub} fontSize="11" fontFamily="var(--font-mono)">HTML · PDF · XLSX · MD · JSON</text>
        <path d="M740 260 L800 260" stroke="var(--muted)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

        {/* ask_owner back-edge */}
        <path d="M655 300 C655 360 300 360 90 220" stroke="var(--primary)" strokeWidth="1.8" fill="none" strokeDasharray="5 4" markerEnd="url(#arr)" />
        <text x="380" y="352" textAnchor="middle" className={sub} fontSize="11" style={font}>ask_owner: سؤال بدل تخمين → المشروع «بانتظار ردّك»</text>

        {/* HQ bridge */}
        <rect x="200" y="376" width="560" height="34" rx="10" className="fill-[var(--primary-soft)] stroke-[var(--primary)]" strokeWidth="1" />
        <text x="480" y="398" textAnchor="middle" className={txt} fontSize="12" fontWeight="600" style={font}>
          Master HQ — جسر تعاون (سجل JSON ذرّي، CLAIM/RELEASE) بين cursor · claude · codex · chatgpt · human
        </text>
      </svg>
      </div>
    </figure>
  );
}
