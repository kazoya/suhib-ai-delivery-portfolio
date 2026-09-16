import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileDown } from "lucide-react";
import { docs } from "@/data/portfolio";
import { getAllDocSlugs, getDoc } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { alternatesFor, ogAr } from "@/lib/seo";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = docs.find((x) => x.slug === slug);
  return d ? { title: d.title, description: d.blurb, alternates: alternatesFor(`/docs/${d.slug}`), openGraph: { ...ogAr, title: d.title, description: d.blurb, url: `/docs/${d.slug}` } } : {};
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  return (
    <div className="container-x grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
      <nav aria-label="الوثائق" className="no-print lg:sticky lg:top-20 lg:self-start">
        <div className="mb-2 text-xs font-bold text-muted">وثائق البروفايل</div>
        <ul className="grid gap-1">
          {docs.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/docs/${d.slug}`}
                aria-current={d.slug === slug ? "page" : undefined}
                className={cn("block rounded-xl px-3 py-2 text-sm hover:bg-surface-2", d.slug === slug && "bg-primary-soft font-bold text-primary hover:bg-primary-soft")}
              >
                {d.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div className="no-print mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <span className="ltr">OUT/{doc.file}</span>
          <a href={`/api/docs/${doc.slug}`} className="inline-flex items-center gap-1 hover:text-foreground">
            <FileDown className="size-3.5" /> تنزيل Markdown
          </a>
        </div>
        <article className="card prose-doc p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: doc.html }} />
      </div>
    </div>
  );
}
