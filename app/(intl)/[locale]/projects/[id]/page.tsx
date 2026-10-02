import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ProjectArticle } from "@/components/projects/locale-projects";
import { isAddedLocale } from "@/lib/i18n";
import { projectMeta } from "@/lib/locale-meta";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isAddedLocale(locale)) return {};
  return projectMeta(locale, id);
}

export default async function Page({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <ProjectArticle locale={locale} id={id} />;
}
