import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { ContactCta } from "@/components/shared/contact-cta";
import { alternatesFor, ogAr } from "@/lib/seo";

export const metadata: Metadata = {
  title: "الأعمال — دراسات حالة بدور واضح ونتيجة موثّقة",
  description: "عشر دراسات حالة من أعمال صهيب الصالح: أنظمة إنتاجية لعملاء، منصات عربية حيّة على Vercel وForge، محاكاة تجارية، ونماذج أولية. لكل مشروع: المشكلة، دوره، النتيجة، الدليل، والقيود.",
  alternates: alternatesFor("/projects"),
  openGraph: { ...ogAr, title: "الأعمال — دراسات حالة", url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-x py-12">
      <SectionHeading
        as="h1"
        eyebrow="الأعمال"
        title="عشر دراسات حالة بدور واضح ونتيجة موثّقة"
        lead="الحالة على كل بطاقة: حيّ، تجريبي، نموذج أولي، محاكاة، أو نظام داخلي. الأنظمة المؤسسية لعملاء (بنوك، تحكم بالدخول) مذكورة في السيرة بلا روابط عامة. منصة المتابعة تسجّل 46 مبادرة؛ المعروض هنا ما له دليل."
      />
      <ProjectExplorer projects={projects} />
      <div className="mt-16 reveal">
        <ContactCta locale="ar" />
      </div>
    </div>
  );
}
