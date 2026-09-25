// ─── Core design system - shared tokens for the Uday Cherri (Core) identity ───
// Keeps typography, spacing, and motion consistent across all Core pages.
// Other identities (design / development / security) keep their own fonts.

export const CORE_FONTS = {
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const CORE_EYEBROW = {
  fontFamily: CORE_FONTS.body,
  fontSize: "0.72rem",
  fontWeight: 500,
  letterSpacing: "0.28em",
  textTransform: "uppercase" as const,
  lineHeight: 1.5,
};

export const CORE_DISPLAY = {
  fontFamily: CORE_FONTS.display,
} as const;

export const CORE_LAYOUT = {
  maxWidth: "1200px",
  /** Consistent horizontal gutter used by every Core section + nav. */
  pad: "clamp(1.25rem, 5vw, 4rem)",
  /** Unified vertical rhythm: replaces the ad-hoc 5/6/8/10rem mix. */
  sectionY: "clamp(4.5rem, 9vw, 7.5rem)",
} as const;

/** Subtle, fast motion - used everywhere in Core. Disabled when the user
 *  prefers reduced motion (see usePrefersReducedMotion). */
export const CORE_MOTION = {
  fadeUp: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  fade: { duration: 0.45, ease: "easeOut" as const },
} as const;
