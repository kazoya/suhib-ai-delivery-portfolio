import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectsIndex } from "@/components/projects/locale-projects";
import { isAddedLocale } from "@/lib/i18n";
import { projectsMeta } from "@/lib/locale-meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isAddedLocale(locale)) return {};
  return projectsMeta(locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  return <ProjectsIndex locale={locale} />;
}
