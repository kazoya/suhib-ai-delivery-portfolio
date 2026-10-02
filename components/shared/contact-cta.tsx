import Link from "next/link";
import { Briefcase, Mail, MessageSquareText, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { owner } from "@/data/portfolio";
import { localePath, type Locale } from "@/lib/i18n";
import { shell } from "@/lib/shell-copy";
import { cn } from "@/lib/utils";

export function ContactCta({ locale = "ar", compact = false, className }: { locale?: Locale; compact?: boolean; className?: string }) {
  const c = shell.contact[locale];
  const mail = (subject: string) => `mailto:${owner.email}?subject=${encodeURIComponent(subject)}`;
  const cvHref = localePath(locale, "/cv");

  if (compact) {
    return (
      <div className={cn("flex flex-wrap items-center gap-2", className)}>
        <a href={mail(c.subjectRole)} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110">
          <Briefcase className="size-4" /> {c.role}
        </a>
        <a href={mail(c.subjectConsult)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold hover:border-primary">
          <MessageSquareText className="size-4" /> {c.consult}
        </a>
      </div>
    );
  }

  return (
    <section id="contact" className={cn("card scroll-mt-24 p-6 sm:p-8", className)} aria-labelledby="contact-title">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 id="contact-title" className="text-xl font-bold">{c.title}</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">{c.lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={mail(c.subjectRole)} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:brightness-110">
              <Briefcase className="size-4" /> {c.role}
            </a>
            <a href={mail(c.subjectConsult)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold hover:border-primary">
              <MessageSquareText className="size-4" /> {c.consult}
            </a>
          </div>
        </div>
        <ul className="grid gap-2 text-sm">
          <li>
            <a href={`mailto:${owner.email}`} className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="size-4 text-primary" /> <span className="ltr">{owner.email}</span>
            </a>
          </li>
          {owner.publicPhone ? (
            <li>
              <a href={`tel:${owner.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="size-4 text-primary" /> <span className="ltr">{owner.phone}</span>
              </a>
            </li>
          ) : null}
          <li>
            <a href={owner.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
              <LinkedinIcon className="size-4 text-primary" /> <span className="ltr">linkedin.com/in/suhib-al-saleh-0a6136264</span>
            </a>
          </li>
          <li>
            <a href={owner.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
              <GithubIcon className="size-4 text-primary" /> <span className="ltr">github.com/{owner.githubHandle}</span>
            </a>
          </li>
          <li className="text-muted">{shell.footer[locale].location}</li>
          <li>
            <Link href={cvHref} className="font-semibold text-primary hover:underline">{c.cv}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
