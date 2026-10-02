import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { ProjectArticle } from "@/components/projects/locale-projects";
import { projectMeta } from "@/lib/locale-meta";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return projectMeta("en", id);
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectArticle locale="en" id={id} />;
}
