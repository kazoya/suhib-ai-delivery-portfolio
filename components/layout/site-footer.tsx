import Link from "next/link";
import { GithubIcon } from "@/components/shared/github-icon";
import { owner, platformSummary } from "@/data/portfolio";
import { BrandMark } from "@/components/layout/brand-mark";
import { SiteQr } from "@/components/shared/site-qr";

export function SiteFooter() {
  return (
    <footer className="no-print mt-20 border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={40} />
            <div>
              <div className="text-lg font-bold">{owner.name}</div>
              <div className="text-sm text-muted">{owner.title}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted">
            محفظة مُولَّدة من تقارير منصة Master Brain بتاريخ {platformSummary.generated}. كل رقم فيها مأخوذ من عقل مشروع أو
            سجل تقدّم مسجَّل، لا شيء مُقدَّر.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">التنقل</div>
          <ul className="grid gap-2 text-sm text-muted">
            <li><Link className="hover:text-foreground" href="/projects">الأعمال</Link></li>
            <li><Link className="hover:text-foreground" href="/platform">المنصة والأرقام</Link></li>
            <li><Link className="hover:text-foreground" href="/docs/profile">الوثائق</Link></li>
            <li><Link className="hover:text-foreground" href="/cv">السيرة الذاتية</Link></li>
            <li><Link className="hover:text-foreground" href="/journal">كيف بُنيت هذه المحفظة</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">حسابات عامة</div>
          <ul className="grid gap-2 text-sm text-muted">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={owner.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" /> github.com/{owner.githubHandle}
              </a>
            </li>
            <li><a className="hover:text-foreground" href={owner.mostaql} target="_blank" rel="noopener noreferrer">مستقل — kazoyan</a></li>
            <li><a className="hover:text-foreground" href={owner.baeed} target="_blank" rel="noopener noreferrer">بعيد — suhib_asrawi</a></li>
          </ul>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <SiteQr />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-muted">
          <span>© 2026 {owner.nameEn}. Next.js 16 · Tailwind 4 · Recharts · Vercel.</span>
          <span className="ltr">Built with Claude Code · data snapshot {platformSummary.generated}</span>
        </div>
      </div>
    </footer>
  );
}
