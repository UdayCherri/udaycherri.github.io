export interface IdentityTheme {
  bg: string;
  bgSubtle: string;
  /** Raised surface for cards, email rows, and panels. */
  surface: string;
  /** Soft elevation shadow. "none" in dark themes. */
  shadow: string;
  fg: string;
  fgMuted: string;
  accent: string;
  accentSecondary: string;
  accentTertiary: string;
  navBg: string;
  navBgScrolled: string;
  borderSubtle: string;
  gridLine: string;
}

// ─── YuuKayCee ───────────────────────────────────────────────────────────────
// Cyan-family system: bright cyan primary, ice tint secondary, deep cyan
// tertiary - one hue, three roles (emphasis, lift, depth).

const yuukayceeDark: IdentityTheme = {
  bg: "#080A12",
  bgSubtle: "#0D0F1A",
  surface: "#0E1120",
  shadow: "none",
  fg: "#F0EEF8",
  fgMuted: "rgba(240,238,248,0.72)",
  accent: "#67E8F9",          // cyan - primary
  accentSecondary: "#A5F3FC", // ice cyan - secondary lift
  accentTertiary: "#0E7490",  // deep cyan - fills, large surfaces
  navBg: "transparent",
  navBgScrolled: "rgba(8,10,18,0.92)",
  borderSubtle: "rgba(103,232,249,0.14)",
  gridLine: "rgba(103,232,249,0.02)",
};

const yuukayceeLight: IdentityTheme = {
  bg: "#F1F6FC",
  bgSubtle: "#E1ECF7",
  surface: "#FFFFFF",
  shadow: "0 1px 2px rgba(14,30,60,0.05), 0 10px 28px rgba(14,116,144,0.08)",
  fg: "#0E1020",
  fgMuted: "rgba(14,16,32,0.72)",
  accent: "#0E7490",          // deep cyan - primary (darkened for ≥4.5:1 on ivory)
  accentSecondary: "#0D9488", // teal - secondary
  accentTertiary: "#155E75",  // abyssal cyan - fills, depth
  navBg: "transparent",
  navBgScrolled: "rgba(241,246,252,0.92)",
  borderSubtle: "rgba(14,116,144,0.16)",
  gridLine: "rgba(8,145,178,0.04)",
};

// ─── Spy D. Veloper ──────────────────────────────────────────────────────────

const spyDark: IdentityTheme = {
  bg: "#080C18",
  bgSubtle: "#0D1020",
  surface: "#0D1224",
  shadow: "none",
  fg: "#F0EEE5",
  fgMuted: "rgba(240,238,229,0.72)",
  accent: "#E5485D",          // signal red, brightened for ≥4.5:1 on near-black
  accentSecondary: "#F0EEE5",
  accentTertiary: "#CC1234",  // deep brand red - fills, large surfaces
  navBg: "rgba(8,12,24,0.7)",
  navBgScrolled: "rgba(8,12,24,0.94)",
  borderSubtle: "rgba(229,72,93,0.18)",
  gridLine: "rgba(240,238,229,0.025)",
};

const spyLight: IdentityTheme = {
  bg: "#F4F2ED",
  bgSubtle: "#E5DFCC",
  surface: "#FCFBF6",
  shadow: "4px 4px 0 rgba(8,12,24,0.07)",
  fg: "#080C18",
  fgMuted: "rgba(8,12,24,0.72)",
  accent: "#CC1234",          // brand red - already ≥4.5:1 on bone
  accentSecondary: "#080C18",
  accentTertiary: "#CC1234",
  navBg: "rgba(244,242,237,0.7)",
  navBgScrolled: "rgba(244,242,237,0.96)",
  borderSubtle: "rgba(204,18,52,0.18)",
  gridLine: "rgba(8,12,24,0.045)",
};

// ─── CYB3R-BO1 ───────────────────────────────────────────────────────────────

const cyberDark: IdentityTheme = {
  bg: "#0F1318",
  bgSubtle: "#141A20",
  surface: "#151C24",
  shadow: "none",
  fg: "#E2EAF0",
  fgMuted: "rgba(226,234,240,0.72)",
  accent: "#10B981",
  accentSecondary: "#2DD4BF",
  accentTertiary: "#10B981",
  navBg: "#0F1318",
  navBgScrolled: "#0F1318",
  borderSubtle: "rgba(16,185,129,0.16)",
  gridLine: "rgba(16,185,129,0.02)",
};

const cyberLight: IdentityTheme = {
  bg: "#E7F2EC",
  bgSubtle: "#D3E6DA",
  surface: "#F4FAF6",
  shadow: "0 1px 2px rgba(10,40,30,0.06), 0 10px 28px rgba(4,120,87,0.1)",
  fg: "#0C1512",
  fgMuted: "rgba(12,21,18,0.74)",
  accent: "#047857",          // deep emerald - darkened for ≥4.5:1 on mist
  accentSecondary: "#0D9488",
  accentTertiary: "#059669",
  navBg: "#E7F2EC",
  navBgScrolled: "#E7F2EC",
  borderSubtle: "rgba(4,120,87,0.24)",
  gridLine: "rgba(5,150,105,0.06)",
};

// ─── Core (Uday Cherri) ───────────────────────────────────────────────────────
// Light: ivory/stone/deep-bronze - Gallery / Architectural Space
// Dark:  warm-graphite/champagne - Observatory / Nexus
// Accent is text-safe in both modes (≥4.5:1 on bg) so eyebrow labels stay
// legible; accentTertiary carries the decorative champagne tone.

const coreDark: IdentityTheme = {
  bg: "#131210",
  bgSubtle: "#1C1B19",
  surface: "#1E1D1A",
  shadow: "none",
  fg: "#EDE8DC",
  fgMuted: "rgba(237,232,220,0.72)",
  accent: "#D2B87A",
  accentSecondary: "#EDE8DC",
  accentTertiary: "#A68C4E",
  navBg: "transparent",
  navBgScrolled: "rgba(19,18,16,0.92)",
  borderSubtle: "rgba(237,232,220,0.12)",
  gridLine: "transparent",
};

const coreLight: IdentityTheme = {
  bg: "#F7F4ED",
  bgSubtle: "#ECE6D6",
  surface: "#FFFDF7",
  shadow: "0 1px 2px rgba(62,50,20,0.05), 0 10px 28px rgba(62,50,20,0.07)",
  fg: "#1B1A18",
  fgMuted: "rgba(27,26,24,0.72)",
  accent: "#7A5F26",
  accentSecondary: "#1B1A18",
  accentTertiary: "#B8A46A",
  navBg: "transparent",
  navBgScrolled: "rgba(247,244,237,0.92)",
  borderSubtle: "rgba(27,26,24,0.12)",
  gridLine: "transparent",
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const identityThemeMap = {
  yuukaycee: { dark: yuukayceeDark, light: yuukayceeLight },
  spy: { dark: spyDark, light: spyLight },
  cyb3r: { dark: cyberDark, light: cyberLight },
  core: { dark: coreDark, light: coreLight },
} as const;

export function getIdentityTheme(
  identity: keyof typeof identityThemeMap,
  mode: "dark" | "light"
): IdentityTheme {
  return identityThemeMap[identity][mode];
}
