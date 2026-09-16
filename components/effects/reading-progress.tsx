"use client";

import { useEffect, useRef } from "react";
import { EFFECTS_ENABLED } from "@/components/effects/effects-gate";

/**
 * Thin reading-progress bar fixed to the top edge. Width follows the scroll
 * fraction of the document; updates are coalesced to one per animation frame.
 * Out of the layout flow (fixed, 2px), so it never moves content or the skip link.
 */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!EFFECTS_ENABLED) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const range = doc.scrollHeight - doc.clientHeight;
      const f = range > 0 ? Math.min(1, Math.max(0, doc.scrollTop / range)) : 0;
      el.style.transform = `scaleX(${f})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!EFFECTS_ENABLED) return null;
  return (
    <div
      ref={ref}
      data-effect="reading-progress"
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary rtl:origin-right"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
