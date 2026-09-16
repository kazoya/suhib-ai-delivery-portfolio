import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectExplorer } from "@/components/projects/project-explorer";

export const metadata: Metadata = {
  title: "الأعمال",
  description: "عشر دراسات حالة من محفظة صهيب عسراوي: مشاريع بتقدّم مسجَّل، منتجات منشورة، واستكشافات، بتصفية حسب النوع والتقنية.",
};

export default function ProjectsPage() {
  return (
    <div className="container-x py-12">
      <SectionHeading
        eyebrow="الأعمال"
        title="عشر دراسات حالة مختارة من 46 مشروعاً"
        lead="الأخضر = تقدّم مسجَّل في المنصة مع اختبارات ونشر. الأزرق = منتج منشور بلا متابعة. الذهبي = استكشاف أو هيكل. البقية (نحو 35 مشروعاً بنسبة 0%) مخزون مكتشَف لا يُعرض هنا."
      />
      <ProjectExplorer projects={projects} />
    </div>
  );
}
