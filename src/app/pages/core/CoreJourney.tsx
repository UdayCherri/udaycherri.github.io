import { CoreNav } from "../../components/core/CoreNav";
import { JourneyTimeline } from "../../components/core/JourneyTimeline";
import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "../../components/core/coreDesign";
import { RouteTransition } from "../../components/shared/PageTransition";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";

export default function CoreJourney() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div style={{ background: theme.bg, minHeight: "100vh", transition: "background 0.3s ease" }}>
      <a href="#main-content" className="core-skip-link">
        Skip to content
      </a>
      <CoreNav />
      <RouteTransition persona="core">
      <main id="main-content" style={{ paddingTop: "68px" }}>
        <div
          style={{
            padding: `clamp(3.5rem, 8vw, 5.5rem) ${CORE_LAYOUT.pad} clamp(2.5rem, 5vw, 3.5rem)`,
            borderBottom: `1px solid ${theme.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
            <motion.p
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45 } })}
              style={{ ...CORE_EYEBROW, color: theme.accent, margin: "0 0 1rem" }}
            >
              Record
            </motion.p>
            <motion.h1
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  })}
              style={{
                fontFamily: CORE_FONTS.display,
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 400,
                color: theme.fg,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                maxWidth: "14ch",
                margin: "0 0 1.25rem",
                textWrap: "balance",
              }}
            >
              The road so far.
            </motion.h1>
            <motion.p
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.12 } })}
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "34rem",
                margin: 0,
              }}
            >
              How I got here, in roughly chronological order.
            </motion.p>
          </div>
        </div>
        <JourneyTimeline />
      </main>
      </RouteTransition>
    </div>
  );
}
