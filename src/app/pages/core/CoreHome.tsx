import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router";
import { udayProfile } from "../../data/content";
import { useIsDesktop, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { PhilosophySection } from "../../components/core/PhilosophySection";
import { JourneyTimeline } from "../../components/core/JourneyTimeline";
import { FeaturedWork } from "../../components/core/FeaturedWork";
import { IdentityDiscovery } from "../../components/core/IdentityDiscovery";
import { CurrentFocus } from "../../components/core/CurrentFocus";
import { IdentityTree } from "../../components/core/IdentityTree";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "../../components/core/coreDesign";
import { RouteTransition } from "../../components/shared/PageTransition";

const MOTION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export default function CoreHome() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const isDesktop = useIsDesktop();
  const reduceMotion = usePrefersReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { ...MOTION, delay },
        };

  return (
    <div style={{ background: theme.bg, transition: "background 0.3s ease, color 0.3s ease" }}>
      <RouteTransition persona="core">
      <main id="main-content">
        {/* Hero */}
        <section
          aria-label="Introduction"
          style={{
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: `calc(68px + clamp(2rem, 6vw, 4rem)) ${CORE_LAYOUT.pad} clamp(3rem, 6vw, 5rem)`,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1.25fr auto" : "1fr",
              gap: isDesktop ? "4rem" : "2.5rem",
              alignItems: "center",
              maxWidth: CORE_LAYOUT.maxWidth,
              margin: "0 auto",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Text column */}
            <div style={{ minWidth: 0 }}>
              <motion.p
                {...fadeUp(0)}
                style={{
                  ...CORE_EYEBROW,
                  color: theme.accent,
                  margin: "0 0 1.5rem",
                }}
              >
                {udayProfile.archetype}
              </motion.p>

              <motion.h1
                {...fadeUp(0.08)}
                style={{
                  fontFamily: CORE_FONTS.display,
                  fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
                  fontWeight: 400,
                  color: theme.fg,
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  margin: "0 0 1.75rem",
                  textWrap: "balance",
                }}
              >
                {udayProfile.name}
              </motion.h1>

              <motion.div
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { scaleX: 0, opacity: 0 },
                      animate: { scaleX: 1, opacity: 1 },
                      transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                    })}
                style={{
                  width: "64px",
                  height: "2px",
                  background: theme.accent,
                  marginBottom: "1.75rem",
                  transformOrigin: "left",
                }}
                aria-hidden="true"
              />

              <motion.p
                {...fadeUp(0.18)}
                style={{
                  fontFamily: CORE_FONTS.body,
                  fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: theme.fgMuted,
                  maxWidth: "34rem",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {udayProfile.introduction}
              </motion.p>

              {/* Mobile portrait — keeps the hero balanced where the desktop frame is hidden */}
              {!isDesktop && (
                <motion.figure
                  {...fadeUp(0.24)}
                  style={{ margin: "2.25rem 0 0", maxWidth: "420px" }}
                >
                  <img
                    src="/images/core-profile.jpg"
                    alt="Portrait of Uday Cherri"
                    loading="eager"
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      display: "block",
                      border: `1px solid ${theme.borderSubtle}`,
                      filter:
                        mode === "dark"
                          ? "brightness(0.86) saturate(0.9)"
                          : "brightness(0.96) saturate(0.92)",
                    }}
                  />
                  <figcaption
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.72rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: theme.fgMuted,
                      paddingTop: "0.75rem",
                    }}
                  >
                    Uday Cherri
                  </figcaption>
                </motion.figure>
              )}
            </div>

            {/* Portrait — desktop only */}
            {isDesktop && (
              <motion.figure
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                    })}
                style={{
                  position: "relative",
                  width: "400px",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  border: `1px solid ${theme.borderSubtle}`,
                  flexShrink: 0,
                  margin: 0,
                  background: theme.bgSubtle,
                }}
              >
                <img
                  src="/images/core-profile.png"
                  alt="Portrait of Uday Cherri"
                  loading="eager"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    filter:
                      mode === "dark"
                        ? "brightness(0.86) saturate(0.9)"
                        : "brightness(1) saturate(0.95)",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      mode === "dark"
                        ? "linear-gradient(to top, rgba(19,18,16,0.72) 0%, transparent 50%)"
                        : "linear-gradient(to top, rgba(12,12,11,0.62) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "2px",
                    background: theme.accentTertiary,
                    opacity: 0.7,
                  }}
                />
                <figcaption style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                  <p
                    style={{
                      fontFamily: CORE_FONTS.display,
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "#F3EEE3",
                      margin: 0,
                    }}
                  >
                    Uday Cherri
                  </p>
                </figcaption>
              </motion.figure>
            )}
          </div>

          {/* Scroll cue — static, doubles as a skip link to the manifesto */}
          <motion.a
            href="#philosophy"
            {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.5 } })}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: CORE_LAYOUT.pad,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.9rem",
              textDecoration: "none",
            }}
            aria-label="Scroll to manifesto"
          >
            <span
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: theme.fgMuted,
              }}
            >
              Scroll
            </span>
            <span
              aria-hidden="true"
              style={{ display: "block", width: "48px", height: "1px", background: theme.borderSubtle, position: "relative", overflow: "hidden" }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "50%",
                  background: theme.accent,
                }}
              />
            </span>
          </motion.a>
        </section>

        {/* Manifesto statement */}
        <PhilosophySection />

        {/* Evidence milestones */}
        <JourneyTimeline />

        {/* Selected Work */}
        <FeaturedWork />

        {/* Current Focus */}
        <CurrentFocus />

        {/* Identity Relationship */}
        <IdentityTree />

        {/* Identity Discovery */}
        <IdentityDiscovery />
      </main>
      </RouteTransition>

      {/* Footer */}
      <footer
        style={{
          padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad} 2.5rem`,
          borderTop: `1px solid ${theme.borderSubtle}`,
          background: theme.bg,
        }}
      >
        <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "2rem",
              paddingBottom: "2.5rem",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  ...CORE_EYEBROW,
                  color: theme.accent,
                  margin: "0 0 0.9rem",
                }}
              >
                Uday Cherri
              </p>
              <p
                style={{
                  fontFamily: CORE_FONTS.display,
                  fontSize: "1.35rem",
                  fontStyle: "italic",
                  color: theme.fg,
                  margin: 0,
                  maxWidth: "28rem",
                  lineHeight: 1.4,
                }}
              >
                {udayProfile.motto}
              </p>
            </div>
            <nav aria-label="Footer" style={{ display: "flex", gap: "0.5rem 2rem", flexWrap: "wrap" }}>
              {[
                { to: "/journey", label: "Journey" },
                { to: "/work", label: "Work" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: CORE_FONTS.body,
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                  }}
                >
                  {label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: CORE_FONTS.body,
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: theme.fg,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0 1rem",
                  minHeight: "44px",
                  cursor: "pointer",
                }}
                aria-label="Back to top"
              >
                Top
                <ArrowUp size={13} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </nav>
          </div>
          <div
            style={{
              borderTop: `1px solid ${theme.borderSubtle}`,
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem 1rem",
            }}
          >
            <p
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: theme.fgMuted,
                margin: 0,
              }}
            >
              © 2026 Uday Cherri
            </p>
            <p
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                color: theme.fgMuted,
                margin: 0,
              }}
            >
              Design / Development / Security
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
