"use client";

import { useEffect, useRef } from "react";
import { EFFECTS_ENABLED } from "@/components/effects/effects-gate";
import { useDocumentVisible, useIsPhone, useReducedMotion } from "@/components/effects/use-media";

type Node = { x: number; y: number; vx: number; vy: number };

const MAX_DESKTOP = 60;
const MAX_PHONE = 25;
const LINK_DIST = 130;
const POINTER_RADIUS = 110;
const SPEED = 12; // px per second

function parseRgb(color: string): [number, number, number] {
  // getComputedStyle returns rgb(a) for hex tokens; fall back to the brand green
  const m = color.match(/(\d+(?:\.\d+)?)/g);
  if (m && m.length >= 3) return [Number(m[0]), Number(m[1]), Number(m[2])];
  return [15, 110, 86];
}

/**
 * Decorative node field for a hero. Draws behind the content, never captures
 * the pointer, uses the page's `--primary` token at 0.25–0.35 alpha. The loop
 * runs only while the hero is on screen and the tab is visible; under
 * `prefers-reduced-motion` a single static frame is drawn and nothing animates.
 */
export function NodeFieldCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const phone = useIsPhone();
  const visible = useDocumentVisible();

  useEffect(() => {
    if (!EFFECTS_ENABLED) return;
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const [r, g, b] = parseRgb(getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    let inView = true;
    let last = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const seed = () => {
      const count = phone ? MAX_PHONE : MAX_DESKTOP;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!nodes.length) seed();
      else nodes.forEach((n) => { n.x = Math.min(n.x, w); n.y = Math.min(n.y, h); });
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const c = nodes[j];
          const dx = a.x - c.x;
          const dy = a.y - c.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.3 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
        // link to pointer
        if (pointer.active) {
          const d = Math.hypot(a.x - pointer.x, a.y - pointer.y);
          if (d < POINTER_RADIUS) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.35 * (1 - d / POINTER_RADIUS)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }
      // nodes
      ctx.fillStyle = `rgba(${r},${g},${b},0.35)`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (t: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (t - last) / 1000 || 0);
      last = t;
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduced || !visible || !inView) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(step);
      canvas.dataset.running = "true";
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      canvas.dataset.running = "false";
    };

    // observers and listeners
    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    });
    ro.observe(host);
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    io.observe(host);
    const onMove = (e: PointerEvent) => {
      if (reduced) return;
      const rect = host.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= w && pointer.y <= h;
    };
    const onLeave = () => { pointer.active = false; };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    resize();
    canvas.dataset.mode = reduced ? "static" : "motion";
    if (reduced) stop(); else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, phone, visible]);

  if (!EFFECTS_ENABLED) return null;
  return (
    <canvas
      ref={ref}
      data-effect="node-field"
      aria-hidden="true"
      className={className ?? "pointer-events-none absolute inset-0 -z-0 h-full w-full"}
    />
  );
}
