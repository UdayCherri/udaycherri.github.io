import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "../../components/core/coreDesign";
import { useIsDesktop, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { RouteTransition } from "../../components/shared/PageTransition";

const HEADER_HEIGHT = 68;
const MOTION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export default function CoreInDevelopment() {
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
    <div
      style={{
        background: theme.bg,
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <a href="#main-content" className="core-skip-link">
        Skip to content
      </a>

      <header style={{ width: "100%", borderBottom: `1px solid ${theme.borderSubtle}` }}>
        <div
          style={{
            maxWidth: CORE_LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `0 ${CORE_LAYOUT.pad}`,
            height: `${HEADER_HEIGHT}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            to="/"
            aria-label="Uday Cherri, home page"
            style={{
              fontFamily: CORE_FONTS.display,
              fontSize: "1.05rem",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              color: theme.fg,
              textDecoration: "none",
              textTransform: "none",
              display: "inline-flex",
              alignItems: "center",
              minHeight: "44px",
            }}
          >
            Uday Cherri
          </Link>
          <ThemeToggle identity="core" />
        </div>
      </header>

      <div style={{ flex: 1, display: "flex" }}>
        <RouteTransition persona="core">
          <main
            id="main-content"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              width: "100%",
              minHeight: "100%",
              padding: `clamp(2.5rem, 6vw, 4rem) ${CORE_LAYOUT.pad}`,
            }}
          >
          <div
            style={{
              width: "100%",
              maxWidth: CORE_LAYOUT.maxWidth,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isDesktop ? "1.2fr auto" : "1fr",
              gap: isDesktop ? "4rem" : "2.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ minWidth: 0, maxWidth: "36rem" }}>
              <motion.p
                {...fadeUp(0)}
                style={{
                  ...CORE_EYEBROW,
                  color: theme.accent,
                  margin: "0 0 1.5rem",
                }}
              >
                In development
              </motion.p>

              <motion.h1
                {...fadeUp(0.08)}
                style={{
                  fontFamily: CORE_FONTS.display,
                  fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
                  fontWeight: 400,
                  color: theme.fg,
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  margin: "0 0 1.75rem",
                  textWrap: "balance",
                }}
              >
                Uday Cherri
              </motion.h1>

              <motion.div
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { scaleX: 0, opacity: 0 },
                      animate: { scaleX: 1, opacity: 1 },
                      transition: {
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
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
                  margin: "0 0 2rem",
                  maxWidth: "32rem",
                  textWrap: "pretty",
                }}
              >
                Final-year B.Tech CSE student at RGUKT Nuzvid. The full portfolio is still being
                built. For now, email me.
              </motion.p>

              <motion.div
                {...fadeUp(0.26)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem 1.75rem",
                }}
              >
                <a
                  href="mailto:cherriuday@gmail.com"
                  style={{
                    ...CORE_EYEBROW,
                    color: theme.fg,
                    textDecoration: "none",
                    borderBottom: `1px solid ${theme.accent}`,
                    paddingBottom: "0.2rem",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  cherriuday@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/uday-kiran-cherri"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...CORE_EYEBROW,
                    color: theme.fgMuted,
                    textDecoration: "none",
                    minHeight: "44px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  LinkedIn
                  <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            <motion.figure
              {...fadeUp(0.15)}
              style={{
                position: "relative",
                width: isDesktop ? "360px" : "100%",
                maxWidth: isDesktop ? "360px" : "420px",
                aspectRatio: isDesktop ? "4 / 5" : "16 / 10",
                overflow: "hidden",
                border: `1px solid ${theme.borderSubtle}`,
                background: theme.bgSubtle,
                margin: 0,
                flexShrink: 0,
              }}
            >
              <img
                src={isDesktop ? "/images/core-profile.webp" : "/images/core-profile-mobile.webp"}
                alt="Portrait of Uday Cherri"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={isDesktop ? 800 : 840}
                height={isDesktop ? 1000 : 525}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: isDesktop ? "center top" : "center 20%",
                  display: "block",
                  filter:
                    mode === "dark"
                      ? "brightness(0.86) saturate(0.9)"
                      : "brightness(0.96) saturate(0.92)",
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
            </motion.figure>
          </div>
        </main>
        </RouteTransition>
      </div>

      <footer
        style={{
          borderTop: `1px solid ${theme.borderSubtle}`,
          padding: `1.5rem ${CORE_LAYOUT.pad}`,
        }}
      >
        <div
          style={{
            maxWidth: CORE_LAYOUT.maxWidth,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
      </footer>
    </div>
  );
}
