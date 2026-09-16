"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import type { Locale } from "@/lib/i18n";

type Theme = "light" | "dark";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
const getServerSnapshot = (): Theme => "light";

export function ThemeToggle({ locale = "ar" }: { locale?: Locale }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* private mode */ }
  }

  const label = locale === "en" ? (theme === "dark" ? "Light mode" : "Dark mode") : theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن";
  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-foreground"
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  );
}
