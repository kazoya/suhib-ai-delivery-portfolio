"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenText, FileText, FolderKanban, Home, LayoutDashboard, Mail, Search, UserRound } from "lucide-react";
import { docs, projects, statusLabel } from "@/data/portfolio";
import { chapters } from "@/data/journey";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string; hint?: string; href: string; group: string; icon: React.ReactNode; keywords?: string };

const copy = {
  ar: { dialog: "لوحة الأوامر", placeholder: "ابحث عن مشروع أو صفحة أو فصل…", search: "بحث", none: "لا نتائج.", pages: "صفحات", projects: "الأعمال", chapters: "فصول السجل", docs: "الوثائق", contact: "تواصل" },
  en: { dialog: "Command palette", placeholder: "Search a project, page or chapter…", search: "Search", none: "No results.", pages: "Pages", projects: "Projects", chapters: "Journal chapters", docs: "Documents", contact: "Contact" },
};

export function CommandPalette({ locale = "ar" }: { locale?: Locale }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const c = copy[locale];
  const Arrow = locale === "en" ? ArrowRight : ArrowLeft;

  const items = useMemo<Item[]>(() => {
    const pages: Item[] =
      locale === "en"
        ? [
            { id: "home", label: "Home", href: "/en", group: c.pages, icon: <Home className="size-4" /> },
            { id: "journal", label: "Engineering journal", hint: "DOS → AI agents", href: "/en/journal", group: c.pages, icon: <BookOpenText className="size-4" /> },
            { id: "projects", label: "Projects (Arabic)", href: "/projects", group: c.pages, icon: <FolderKanban className="size-4" /> },
            { id: "cv", label: "CV", hint: "printable", href: "/cv", group: c.pages, icon: <UserRound className="size-4" /> },
            { id: "contact", label: "Contact", hint: "email · LinkedIn", href: "/en#contact", group: c.pages, icon: <Mail className="size-4" /> },
            { id: "ar", label: "الموقع بالعربية", href: "/", group: c.pages, icon: <Home className="size-4" /> },
          ]
        : [
            { id: "home", label: "الرئيسية", href: "/", group: c.pages, icon: <Home className="size-4" /> },
            { id: "projects", label: "الأعمال", href: "/projects", group: c.pages, icon: <FolderKanban className="size-4" /> },
            { id: "journal", label: "السجل الهندسي", hint: "من DOS إلى وكلاء الذكاء الاصطناعي", href: "/journal", group: c.pages, icon: <BookOpenText className="size-4" /> },
            { id: "platform", label: "المنصة", hint: "مخططات ورسوم", href: "/platform", group: c.pages, icon: <LayoutDashboard className="size-4" /> },
            { id: "cv", label: "السيرة الذاتية", hint: "قابلة للطباعة", href: "/cv", group: c.pages, icon: <UserRound className="size-4" /> },
            { id: "contact", label: "تواصل", hint: "بريد · LinkedIn", href: "/#contact", group: c.pages, icon: <Mail className="size-4" /> },
            { id: "en", label: "English", href: "/en", group: c.pages, icon: <FileText className="size-4" /> },
          ];
    const proj: Item[] = projects.map((p) => ({
      id: `p-${p.id}`,
      label: locale === "en" ? p.nameEn : p.name,
      hint: statusLabel[p.statusKey][locale],
      href: `/projects/${p.id}`,
      group: c.projects,
      icon: <FolderKanban className="size-4" />,
      keywords: `${p.name} ${p.nameEn} ${p.stack.join(" ")}`,
    }));
    const ch: Item[] = chapters.map((x) => ({
      id: `c-${x.id}`,
      label: `${x.n} — ${locale === "en" ? x.title.en : x.title.ar}`,
      href: `${locale === "en" ? "/en/journal" : "/journal"}#chapter-${x.id}`,
      group: c.chapters,
      icon: <BookOpenText className="size-4" />,
      keywords: `${x.title.ar} ${x.title.en}`,
    }));
    const dd: Item[] = locale === "en" ? [] : docs.map((d) => ({ id: `d-${d.slug}`, label: d.title, hint: d.file, href: `/docs/${d.slug}`, group: c.docs, icon: <FileText className="size-4" /> }));
    return [...pages, ...proj, ...ch, ...dd];
  }, [locale, c]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) => (i.label + " " + (i.hint ?? "") + " " + i.group + " " + (i.keywords ?? "")).toLowerCase().includes(s));
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

  // keep the active option visible while arrowing through the list
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  // focus trap: Tab cycles inside the dialog
  function onDialogKey(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>("input, button:not([disabled])");
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={c.dialog}
        className="card w-full max-w-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onDialogKey}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-5 text-muted" />
          <input
            ref={inputRef}
            id="command-palette-input"
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onInputKey}
            placeholder={c.placeholder}
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
            aria-label={c.search}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={filtered[active] ? `cp-${filtered[active].id}` : undefined}
            autoComplete="off"
          />
          <kbd className="ltr rounded-md bg-surface-2 px-1.5 text-[11px] font-mono text-muted">Esc</kbd>
        </div>
        <ul id="command-palette-list" ref={listRef} className="max-h-[50vh] overflow-y-auto p-2" role="listbox" aria-label={c.dialog}>
          {filtered.length === 0 ? <li className="px-3 py-6 text-center text-sm text-muted">{c.none}</li> : null}
          {filtered.map((item, idx) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            return (
              <li key={item.id} id={`cp-${item.id}`} role="option" aria-selected={idx === active} data-idx={idx}>
                {showGroup ? <div className="px-3 pb-1 pt-2 text-[11px] font-bold text-muted">{item.group}</div> : null}
                <button
                  type="button"
                  tabIndex={-1}
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
                  <Arrow className="size-4 opacity-50" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
