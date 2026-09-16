/**
 * Single source of truth for the effects feature flag.
 * `NEXT_PUBLIC_EFFECTS=off` at build time removes every effect (clock, node field,
 * reading progress). Read once, never touches the DOM, never reads secrets.
 */
export const EFFECTS_ENABLED = process.env.NEXT_PUBLIC_EFFECTS !== "off";
