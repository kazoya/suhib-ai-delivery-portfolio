import type { Metadata } from "next";
import { getDoc } from "@/lib/docs";
import { PrintButton } from "@/components/shared/print-button";

export const metadata: Metadata = { title: "السيرة الذاتية", description: "سيرة صهيب عسراوي في صفحة واحدة، قابلة للطباعة وحفظها PDF." };

export default function CvPage() {
  const doc = getDoc("cv");
  return (
    <div className="container-x py-10">
      <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">اطبع الصفحة أو احفظها PDF من المتصفح. البريد والهاتف والتعليم تُضاف قبل الإرسال.</p>
        <PrintButton />
      </div>
      <article className="card prose-doc mx-auto max-w-3xl p-6 sm:p-10 print:border-0 print:p-0 print:shadow-none" dangerouslySetInnerHTML={{ __html: doc?.html ?? "" }} />
    </div>
  );
}
