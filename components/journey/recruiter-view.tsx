import Link from "next/link";
import { recruiterView, clientProblems } from "@/data/journey";
import { owner } from "@/data/portfolio";
import { t, type Locale } from "@/lib/i18n";

export function RecruiterView({ locale = "ar" }: { locale?: Locale }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {recruiterView.map((r) => (
        <div key={r.q.en} className="card reveal p-4">
          <dt className="text-sm font-bold text-primary">{t(r.q, locale)}</dt>
          <dd className="mt-1 text-sm">
            {t(r.a, locale)}
            {r.q.en.startsWith("How can I contact") ? (
              <span className="mt-2 block">
                <a href={`mailto:${owner.email}`} className="ltr font-semibold text-primary hover:underline">{owner.email}</a>
                {" · "}
                <a href={owner.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">LinkedIn</a>
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ClientMode({ locale = "ar" }: { locale?: Locale }) {
  const proofLabel = locale === "en" ? "Proof" : "الدليل";
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {clientProblems.map((p) => (
        <li key={p.need.en} className="card reveal flex flex-col gap-2 p-4">
          <div className="font-bold">{t(p.need, locale)}</div>
          <p className="text-sm text-muted">{t(p.answer, locale)}</p>
          <Link href={p.href} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            {proofLabel}: {t(p.proof, locale)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
