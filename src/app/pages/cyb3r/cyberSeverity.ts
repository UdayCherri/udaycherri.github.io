/** Shared severity scale for the security persona - one source of truth,
 *  used by both the home highlights and the research archive. */

export const severityWidth: Record<string, string> = {
  Critical: "100%",
  High: "75%",
  Medium: "45%",
  Low: "20%",
};

/** Severity colors adapt to the theme: translucent brights on dark,
 *  solid deep tones on light so small badge text stays legible. */
export function severityStyle(severity: string, mode: "dark" | "light"): { color: string; border: string; bar: string } {
  if (mode === "light") {
    const map: Record<string, { color: string; border: string; bar: string }> = {
      Critical: { color: "#B91C1C", border: "rgba(185,28,28,0.4)", bar: "#DC2626" },
      High: { color: "#B45309", border: "rgba(180,83,9,0.4)", bar: "#D97706" },
      Medium: { color: "#4B5563", border: "rgba(75,85,99,0.4)", bar: "#6B7280" },
      Low: { color: "#1D4ED8", border: "rgba(29,78,216,0.4)", bar: "#3B82F6" },
    };
    return map[severity] ?? map.Medium;
  }
  const map: Record<string, { color: string; border: string; bar: string }> = {
    Critical: { color: "rgba(239,68,68,0.95)", border: "rgba(239,68,68,0.45)", bar: "rgba(239,68,68,0.85)" },
    High: { color: "rgba(245,158,11,0.95)", border: "rgba(245,158,11,0.45)", bar: "rgba(245,158,11,0.85)" },
    Medium: { color: "rgba(156,163,175,0.9)", border: "rgba(156,163,175,0.4)", bar: "rgba(156,163,175,0.7)" },
    Low: { color: "rgba(96,165,250,0.9)", border: "rgba(96,165,250,0.4)", bar: "rgba(96,165,250,0.7)" },
  };
  return map[severity] ?? map.Medium;
}
