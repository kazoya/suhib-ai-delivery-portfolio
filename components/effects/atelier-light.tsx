"use client";

import { useEffect } from "react";
import { EFFECTS_ENABLED } from "@/components/effects/effects-gate";

/**
 * One passive pointer listener for the whole site. It writes CSS variables
 * only: a lamp position on each hero, a spotlight on the card under the
 * pointer, and a small tilt on the hero frame. Nothing is drawn here.
 * Reduced motion keeps the page still. The effects flag removes the listener.
 */
export function AtelierLight() {
  useEffect(() => {
    if (!EFFECTS_ENABLED) return;
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let px = 0;
    let py = 0;
    let lastStage: HTMLElement | null = null;

    const rest = () => {
      root.dataset.lux = reduce.matches ? "still" : "ready";
    };

    const apply = () => {
      frame = 0;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      root.style.setProperty("--lux-x", `${(px / w) * 100}%`);
      root.style.setProperty("--lux-y", `${(py / h) * 100}%`);

      document.querySelectorAll<HTMLElement>(".hero-mesh, .lux-hero").forEach((hero) => {
        const rect = hero.getBoundingClientRect();
        const inside = px >= rect.left && px <= rect.right && py >= rect.top && py <= rect.bottom && rect.width > 0;
        if (!inside) return;
        hero.style.setProperty("--lux-x", `${((px - rect.left) / rect.width) * 100}%`);
        hero.style.setProperty("--lux-y", `${((py - rect.top) / rect.height) * 100}%`);
      });

      const hit = document.elementFromPoint(px, py);
      const card = hit?.closest<HTMLElement>(".card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${px - rect.left}px`);
        card.style.setProperty("--spot-y", `${py - rect.top}px`);
      }

      const stage = hit?.closest<HTMLElement>(".lux-stage") ?? null;
      if (lastStage && lastStage !== stage) {
        lastStage.style.removeProperty("--tilt-x");
        lastStage.style.removeProperty("--tilt-y");
      }
      lastStage = stage;
      if (stage) {
        const rect = stage.getBoundingClientRect();
        const nx = (px - rect.left) / rect.width - 0.5;
        const ny = (py - rect.top) / rect.height - 0.5;
        stage.style.setProperty("--tilt-x", `${(ny * 2).toFixed(2)}deg`);
        stage.style.setProperty("--tilt-y", `${(nx * -3).toFixed(2)}deg`);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (reduce.matches) return;
      px = e.clientX;
      py = e.clientY;
      root.dataset.lux = "live";
      if (!frame) frame = requestAnimationFrame(apply);
    };

    rest();
    reduce.addEventListener("change", rest);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      reduce.removeEventListener("change", rest);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      delete root.dataset.lux;
      root.style.removeProperty("--lux-x");
      root.style.removeProperty("--lux-y");
    };
  }, []);

  return null;
}
