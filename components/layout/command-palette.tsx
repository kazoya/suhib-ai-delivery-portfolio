"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, FileText, FolderKanban, Home, LayoutDashboard, Search, UserRound } from "lucide-react";
import { docs, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string; hint?: string; href: string; group: string; icon: React.ReactNode };

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const pages: Item[] = [
      { id: "home", label: "الرئيسية", href: "/", group: "صفحات", icon: <Home className="size-4" /> },
      { id: "projects", label: "الأعمال", href: "/projects", group: "صفحات", icon: <FolderKanban className="size-4" /> },
      { id: "platform", label: "المنصة والأرقام", hint: "مخططات ورسوم", href: "/platform", group: "صفحات", icon: <LayoutDashboard className="size-4" /> },
      { id: "cv", label: "السيرة الذاتية", hint: "قابلة للطباعة", href: "/cv", group: "صفحات", icon: <UserRound className="size-4" /> },
      { id: "journal", label: "كيف بُنيت هذه المحفظة", href: "/journal", group: "صفحات", icon: <FileText className="size-4" /> },
      { id: "en", label: "English summary", href: "/en", group: "صفحات", icon: <FileText className="size-4" /> },
    ];
    const proj: Item[] = projects.map((p) => ({
      id: `p-${p.id}`, label: p.name, hint: `${p.status}${p.progress ? ` · ${p.progress}%` : ""}`, href: `/projects/${p.id}`, group: "الأعمال", icon: <FolderKanban className="size-4" />,
    }));
    const dd: Item[] = docs.map((d) => ({ id: `d-${d.slug}`, label: d.title, hint: d.file, href: `/docs/${d.slug}`, group: "الوثائق", icon: <FileText className="size-4" /> }));
    return [...pages, ...proj, ...dd];
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) => (i.label + " " + (i.hint ?? "") + " " + i.group).toLowerCase().includes(s));
  }, [items, q]);

  function openPalette() {
    setQ(""); setActive(0); setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 10);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => { if (v) return false; setQ(""); setActive(0); setTimeout(() => inputRef.current?.focus(), 10); return true; });
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => openPalette();
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("open-command-palette", onOpen); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function go(item: Item) { setOpen(false); router.push(item.href); }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === "Enter" && filtered[active]) go(filtered[active]);
  }

  if (!open) return null;

  let lastGroup = "";
  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center bg-black/40 p-4 pt-[12vh] backdrop-blur-sm" onClick={() => setOpen(false)} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="لوحة الأوامر"
        className="card w-full max-w-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-5 text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onInputKey}
            placeholder="ابحث عن مشروع أو صفحة أو وثيقة…"
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
            aria-label="بحث"
          />
          <kbd className="ltr rounded-md bg-surface-2 px-1.5 text-[11px] font-mono text-muted">Esc</kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {filtered.length === 0 ? <li className="px-3 py-6 text-center text-sm text-muted">لا نتائج.</li> : null}
          {filtered.map((item, idx) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            return (
              <li key={item.id} role="option" aria-selected={idx === active}>
                {showGroup ? <div className="px-3 pb-1 pt-2 text-[11px] font-bold text-muted">{item.group}</div> : null}
                <button
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => go(item)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm",
                    idx === active ? "bg-primary-soft text-primary" : "hover:bg-surface-2",
                  )}
                >
                  <span className="text-muted">{item.icon}</span>
                  <span className="flex-1">
                    <span className="block font-medium">{item.label}</span>
                    {item.hint ? <span className="block text-xs text-muted">{item.hint}</span> : null}
                  </span>
                  <ArrowLeft className="size-4 opacity-50" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
