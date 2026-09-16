"use client";

import { useSyncExternalStore } from "react";

/**
 * One `matchMedia` listener per query, hydration-safe: the server snapshot is
 * always `false`, so the first client render matches the HTML and the real
 * value applies on the next commit.
 */
function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const useReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");
export const useIsPhone = () => useMediaQuery("(max-width: 767px)");

/** `true` while the document is visible (tab in front). Server snapshot: true. */
export function useDocumentVisible(): boolean {
  return useSyncExternalStore(
    (cb) => {
      document.addEventListener("visibilitychange", cb);
      return () => document.removeEventListener("visibilitychange", cb);
    },
    () => !document.hidden,
    () => true,
  );
}
