import { useState } from "react";
import { Link } from "react-router";

interface DisciplineBrandProps {
  /** Discipline display name, e.g. "YuuKayCee" */
  name: string;
  /** Path to the discipline home, e.g. "/design" */
  homePath: string;
  /** Display font for the discipline name */
  nameFont: string;
  nameWeight?: number;
  nameSize?: string;
  nameSpacing?: string;
  uppercase?: boolean;
  fg: string;
  muted: string;
  accent: string;
}

/**
 * Stacked brand lockup for discipline navbars.
 * Pairs the discipline identity (links home) with a quiet "Uday Cherri"
 * eyebrow (links back to The Core) — so the separate arrow + name
 * cluster on the right side of the bar is no longer needed.
 */
export function DisciplineBrand({
  name,
  homePath,
  nameFont,
  nameWeight = 500,
  nameSize = "1.05rem",
  nameSpacing = "0.04em",
  uppercase = false,
  fg,
  muted,
  accent,
}: DisciplineBrandProps) {
  const [hover, setHover] = useState<"core" | "home" | null>(null);

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        lineHeight: 1.25,
        minHeight: "44px",
        /* Allow graceful shrink on very narrow screens. */
        minWidth: 0,
        flexShrink: 1,
      }}
    >
      <Link
        to="/"
        title="Back to Uday Cherri (The Core)"
        aria-label="Back to Uday Cherri home"
        onMouseEnter={() => setHover("core")}
        onMouseLeave={() => setHover(null)}
        onFocus={() => setHover("core")}
        onBlur={() => setHover(null)}
        style={{
          fontFamily: "'Inter', 'DM Sans', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textDecoration: hover === "core" ? "underline" : "none",
          textUnderlineOffset: "3px",
          color: hover === "core" ? accent : muted,
          transition: "color 0.2s ease",
        }}
      >
        Uday Cherri
      </Link>
      <Link
        to={homePath}
        aria-label={`${name} — home`}
        onMouseEnter={() => setHover("home")}
        onMouseLeave={() => setHover(null)}
        onFocus={() => setHover("home")}
        onBlur={() => setHover(null)}
        style={{
          fontFamily: nameFont,
          fontSize: nameSize,
          fontWeight: nameWeight,
          letterSpacing: nameSpacing,
          textTransform: uppercase ? "uppercase" : "none",
          color: fg,
          textDecoration: "none",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </Link>
    </span>
  );
}
