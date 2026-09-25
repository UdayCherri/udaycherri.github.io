import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useIsMd, usePrefersReducedMotion } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";

const identities = [
  {
    id: "yuukaycee",
    path: "/design",
    name: "YuuKayCee",
    archetype: "The Designer",
    motto: "Art washes away from the soul the dust of everyday life.",
    discipline: "Design",
    bg: "#080A12",
    accent: "#67E8F9",
    secondary: "#A5F3FC",
    font: "'Playfair Display', serif",
    description: "Brand identity, UI/UX, editorial design, and creative direction, from the Prism.",
    preview: [
      { label: "Brand Identity" },
      { label: "UI/UX Systems" },
      { label: "Typography" },
      { label: "Art Direction" },
    ],
  },
  {
    id: "spy",
    path: "/development",
    name: "Spy D. Veloper",
    archetype: "The Developer",
    motto: "First, solve the problem. Then, write the code.",
    discipline: "Development",
    bg: "#080C18",
    accent: "#CC1234",
    secondary: "#F0EEE5",
    font: "'Space Grotesk', sans-serif",
    description: "Distributed systems, infrastructure, open source, and language design, from the Framework.",
    preview: [
      { label: "Distributed Systems" },
      { label: "Open Source" },
      { label: "Infrastructure" },
      { label: "Language Design" },
    ],
  },
  {
    id: "cyb3r",
    path: "/security",
    name: "CYB3R-BO1",
    archetype: "The Security Researcher",
    motto: "Security begins with understanding.",
    discipline: "Security",
    bg: "#0F1318",
    accent: "#10B981",
    secondary: "#2DD4BF",
    font: "'IBM Plex Mono', monospace",
    description: "AI security, application security, CTF, and security tooling, from the Intelligence Network.",
    preview: [
      { label: "Vuln Research" },
      { label: "CTF Competitions" },
      { label: "Security Tools" },
      { label: "Systems Analysis" },
    ],
  },
];

export function IdentityDiscovery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isMd = useIsMd();
  const reduceMotion = usePrefersReducedMotion();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      aria-label="Choose your direction"
      style={{ background: theme.bg }}
    >
      {/* Transition text - bridges from understanding to choosing */}
      <div
        style={{
          padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad} clamp(2.5rem, 5vw, 4rem)`,
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "1fr 1fr" : "1fr",
              gap: isMd ? "4rem" : "1.5rem",
              alignItems: "end",
            }}
          >
            <div>
              <motion.p
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      viewport: { once: true },
                      transition: { duration: 0.45 },
                    })}
                style={{ ...CORE_EYEBROW, color: theme.accent, margin: "0 0 0.9rem" }}
              >
                Three Disciplines
              </motion.p>
              <motion.h2
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    })}
                style={{
                  fontFamily: CORE_FONTS.display,
                  fontSize: "clamp(2rem, 3.6vw, 3.25rem)",
                  fontWeight: 400,
                  color: theme.fg,
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                Choose your direction
              </motion.h2>
            </div>

            <motion.p
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                  })}
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "28rem",
                margin: 0,
              }}
            >
              Three professional practices. One source.
            </motion.p>
          </div>

          {/* Compact one-to-three connector - the Tree diagram, folded in */}
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2.25rem 0 0",
            }}
          >
            <div style={{ width: "1px", height: "28px", background: theme.accent, opacity: 0.6 }} />
            {isMd ? (
              <div style={{ display: "flex", alignItems: "center", width: "min(52%, 480px)" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#67E8F9", flexShrink: 0 }} />
                <span style={{ flex: 1, height: "1px", background: theme.borderSubtle }} />
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#CC1234", flexShrink: 0 }} />
                <span style={{ flex: 1, height: "1px", background: theme.borderSubtle }} />
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", flexShrink: 0 }} />
              </div>
            ) : (
              <div style={{ width: "1px", height: "20px", background: theme.borderSubtle }} />
            )}
          </div>
        </div>
      </div>

      {/* Identity panels - full-bleed triptych with hairline dividers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
          gap: "1px",
          background: "rgba(247,244,238,0.12)",
          borderTop: "1px solid rgba(247,244,238,0.12)",
          borderBottom: "1px solid rgba(247,244,238,0.12)",
        }}
      >
        {identities.map((identity, i) => {
          const active = activeId === identity.id;
          return (
            <motion.div
              key={identity.id}
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.55, delay: Math.min(i * 0.08, 0.16), ease: [0.22, 1, 0.36, 1] },
                  })}
              onMouseEnter={() => setActiveId(identity.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(identity.id)}
              onBlur={() => setActiveId(null)}
              style={{
                position: "relative",
                background: active ? identity.bg : darkIdle(mode),
                transition: "background 0.4s ease",
                overflow: "hidden",
                borderTop: `2px solid ${active ? identity.accent : `${identity.accent}40`}`,
                minHeight: isMd ? "600px" : "auto",
              }}
            >
              {/* Ambient glow on hover/focus */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "200px",
                  background: `radial-gradient(ellipse at 50% 0%, ${identity.accent}1a 0%, transparent 70%)`,
                  opacity: active ? 1 : 0,
                  transition: reduceMotion ? "none" : "opacity 0.4s ease",
                  pointerEvents: "none",
                }}
              />

              <Link
                to={identity.path}
                aria-label={`Enter ${identity.name} · ${identity.discipline}`}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "2rem",
                  minHeight: isMd ? "600px" : "480px",
                  padding: isMd ? "3rem 2.5rem 2.75rem" : "2.5rem 1.75rem",
                  textDecoration: "none",
                }}
              >
                <span style={{ position: "relative", display: "block" }}>
                  <span
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: identity.accent,
                      display: "block",
                      marginBottom: "1.5rem",
                      opacity: active ? 1 : 0.75,
                    }}
                  >
                    {identity.discipline}
                  </span>

                  <span
                    style={{
                      fontFamily: identity.font,
                      fontSize: "clamp(1.5rem, 2.4vw, 1.9rem)",
                      fontWeight: identity.id === "spy" ? 600 : 500,
                      color: "#F7F4EE",
                      display: "block",
                      marginBottom: "0.8rem",
                      lineHeight: 1.12,
                      letterSpacing: identity.id === "cyb3r" ? "0.03em" : "normal",
                    }}
                  >
                    {identity.name}
                  </span>

                  <span
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: identity.secondary,
                      display: "block",
                      marginBottom: "1.75rem",
                      opacity: 0.7,
                    }}
                  >
                    {identity.archetype}
                  </span>

                  <span
                    style={{
                      fontFamily: CORE_FONTS.display,
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      color: "#F7F4EE",
                      display: "block",
                      maxWidth: "19rem",
                      marginBottom: "1.5rem",
                      opacity: active ? 1 : 0.72,
                    }}
                  >
                    &ldquo;{identity.motto}&rdquo;
                  </span>

                  <span
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "rgba(247,244,238,0.62)",
                      display: "block",
                      maxWidth: "18rem",
                    }}
                  >
                    {identity.description}
                  </span>
                </span>

                <span style={{ position: "relative", display: "block" }}>
                  <span
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {identity.preview.map((item) => (
                      <span
                        key={item.label}
                        style={{
                          fontFamily: CORE_FONTS.body,
                          fontSize: "0.65rem",
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "0.4rem 0.8rem",
                          border: `1px solid ${active ? `${identity.accent}66` : "rgba(247,244,238,0.16)"}`,
                          color: active ? identity.accent : "rgba(247,244,238,0.6)",
                        }}
                      >
                        {item.label}
                      </span>
                    ))}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.7rem",
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: active ? identity.accent : "rgba(247,244,238,0.6)",
                      borderBottom: `1px solid ${active ? identity.accent : "transparent"}`,
                      paddingBottom: "3px",
                    }}
                  >
                    Enter
                    <ArrowRight
                      size={13}
                      strokeWidth={1.75}
                      style={{
                        transform: active && !reduceMotion ? "translateX(3px)" : "none",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </span>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function darkIdle(mode: string): string {
  return mode === "dark" ? "#141311" : "#211F1C";
}
