"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds `.in` to `.reveal` elements as they enter the viewport. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    els.forEach((e) => {
      if (!calm) {
        const group = e.parentElement?.querySelectorAll(":scope > .reveal");
        if (group && group.length > 1) {
          const idx = Array.prototype.indexOf.call(group, e);
          if (idx > 0) e.style.transitionDelay = `${Math.min(idx, 7) * 55}ms`;
        }
      }
      io.observe(e);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
