import type { Metadata } from "next";
import { docs } from "@/data/portfolio";
import { LocaleDoc } from "@/components/docs/locale-doc";
import { docMeta } from "@/lib/locale-meta";

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return docMeta("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LocaleDoc locale="en" slug={slug} />;
}
