import Link from "next/link";
import { notFound } from "next/navigation";
import { FileDown } from "lucide-react";
import { docs } from "@/data/portfolio";
import { getDoc } from "@/lib/docs";
import { docTitles, docsCopy } from "@/lib/page-copy";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleDoc({ locale, slug }: { locale: Locale; slug: string }) {
  const doc = getDoc(slug);
  if (!doc) notFound();
  const c = docsCopy[locale];
  return (
    <div className="container-x grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
      <nav aria-label={c.nav} className="no-print lg:sticky lg:top-20 lg:self-start">
        <div className="mb-2 text-xs font-bold text-muted">{c.nav}</div>
        <ul className="grid gap-1">
          {docs.map((d) => (
            <li key={d.slug}>
              <Link
                href={localePath(locale, `/docs/${d.slug}`)}
                aria-current={d.slug === slug ? "page" : undefined}
                className={cn("block rounded-xl px-3 py-2 text-sm hover:bg-surface-2", d.slug === slug && "bg-primary-soft font-bold text-primary hover:bg-primary-soft")}
              >
                {docTitles[d.slug]?.[locale].title ?? d.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {c.note ? <p className="no-print mb-3 text-sm text-muted">{c.note}</p> : null}
        <div className="no-print mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <span className="ltr">OUT/{doc.file}</span>
          <a href={`/api/docs/${doc.slug}`} className="inline-flex items-center gap-1 hover:text-foreground">
            <FileDown className="size-3.5" /> {c.download}
          </a>
        </div>
        <article lang="ar" dir="rtl" className="card prose-doc p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: doc.html }} />
      </div>
    </div>
  );
}
