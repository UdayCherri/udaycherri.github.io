import { motion } from "motion/react";
import { Link } from "react-router";
import { useIsMd, usePrefersReducedMotion } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";

const identities = [
  {
    id: "yuukaycee",
    path: "/design",
    name: "YuuKayCee",
    role: "The Prism",
    discipline: "Design",
    accent: "#67E8F9",
    font: "'Playfair Display', serif",
  },
  {
    id: "spy",
    path: "/development",
    name: "Spy D. Veloper",
    role: "The Builder",
    discipline: "Development",
    accent: "#CC1234",
    font: "'Space Grotesk', sans-serif",
  },
  {
    id: "cyb3r",
    path: "/security",
    name: "CYB3R-BO1",
    role: "The Researcher",
    discipline: "Security",
    accent: "#10B981",
    font: "'IBM Plex Mono', monospace",
  },
];

export function IdentityTree() {
  const isMd = useIsMd();
  const reduceMotion = usePrefersReducedMotion();
  const { mode } = useTheme();
  const dark = mode === "dark";

  const band = dark ? "#161513" : "#ECE7DA";
  const ink = dark ? "#EDE8DC" : "#1B1A18";
  const inkMuted = dark ? "rgba(237,232,220,0.66)" : "rgba(27,26,24,0.66)";
  const hairline = dark ? "rgba(237,232,220,0.1)" : "rgba(27,26,24,0.12)";
  const bronze = dark ? "#D2B87A" : "#7A5F26";
  const cardBg = getIdentityTheme("core", mode).surface;
  const cardShadow = getIdentityTheme("core", mode).shadow;

  return (
    <section
      aria-label="One source, three disciplines"
      style={{
        padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad}`,
        background: band,
        borderTop: `1px solid ${hairline}`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: dark
            ? "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(210,184,122,0.07) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(122,95,38,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto", position: "relative" }}>
        <motion.p
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.45 },
              })}
          style={{ ...CORE_EYEBROW, color: bronze, margin: "0 0 2.5rem", textAlign: "center" }}
        >
          One source. Three disciplines.
        </motion.p>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              })}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: CORE_FONTS.body,
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: bronze,
              margin: "0 0 0.8rem",
            }}
          >
            The Architect
          </p>
          <h2
            style={{
              fontFamily: CORE_FONTS.display,
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              color: ink,
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Uday Cherri
          </h2>
        </motion.div>

        {/* Simplified connector — one stem, one branch, three nodes */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2rem 0 2.75rem",
          }}
        >
          <div style={{ width: "1px", height: "36px", background: dark ? "rgba(210,184,122,0.45)" : "rgba(122,95,38,0.4)" }} />
          {isMd ? (
            <div style={{ display: "flex", alignItems: "center", width: "min(66%, 640px)" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: identities[0].accent, flexShrink: 0 }} />
              <span style={{ flex: 1, height: "1px", background: hairline }} />
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: identities[1].accent, flexShrink: 0 }} />
              <span style={{ flex: 1, height: "1px", background: hairline }} />
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: identities[2].accent, flexShrink: 0 }} />
            </div>
          ) : (
            <div style={{ width: "1px", height: "24px", background: hairline }} />
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
            gap: "1.25rem",
          }}
        >
          {identities.map((identity, i) => (
            <motion.div
              key={identity.id}
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 14 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: Math.min(i * 0.08, 0.16), ease: [0.22, 1, 0.36, 1] },
                  })}
            >
              <Link
                to={identity.path}
                aria-label={`${identity.name} — ${identity.discipline}`}
                style={{
                  display: "block",
                  padding: "1.75rem 1.6rem 1.6rem",
                  background: cardBg,
                  boxShadow: cardShadow,
                  border: `1px solid ${hairline}`,
                  borderTop: `2px solid ${identity.accent}`,
                  textDecoration: "none",
                  position: "relative",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!reduceMotion) e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = `${identity.accent}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = hairline;
                }}
              >
                <p
                  style={{
                    fontFamily: CORE_FONTS.body,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: identity.accent,
                    margin: "0 0 1rem",
                  }}
                >
                  {identity.discipline}
                </p>

                <h3
                  style={{
                    fontFamily: identity.font,
                    fontSize: "1.35rem",
                    fontWeight: identity.id === "spy" ? 600 : 500,
                    color: dark ? "#EDE8DC" : "#1B1A18",
                    lineHeight: 1.15,
                    margin: "0 0 0.5rem",
                    letterSpacing: identity.id === "cyb3r" ? "0.03em" : "normal",
                  }}
                >
                  {identity.name}
                </h3>

                <p
                  style={{
                    fontFamily: CORE_FONTS.body,
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: inkMuted,
                    margin: 0,
                  }}
                >
                  {identity.role}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
