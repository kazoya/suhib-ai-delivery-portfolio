import type { Metadata } from "next";
import { JournalPageContent } from "@/components/journey/journal-page";
import { alternatesFor, profilePageLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "السجل الهندسي — من DOS إلى وكلاء الذكاء الاصطناعي",
  description:
    "رحلة صهيب عسراوي عبر أجيال الحوسبة: من تشخيص أنظمة DOS وإصلاح الأجهزة والشبكات واستعادة البيانات، إلى التكامل المؤسسي بـ Java وSQL Server وOracle، ثم الأتمتة ووكلاء الذكاء الاصطناعي. ذاكرات هندسية، أجيال التقنية، ونظرة للمسؤول عن التوظيف.",
  alternates: alternatesFor("/journal", { ar: "/journal", en: "/en/journal" }),
  openGraph: { title: "السجل الهندسي — من DOS إلى وكلاء الذكاء الاصطناعي", description: "المكدّس تغيّر. الطريقة لم تتغيّر.", url: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/journal", "ar")) }} />
      <JournalPageContent locale="ar" />
    </>
  );
}
