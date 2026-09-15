import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";
import { usePrefersReducedMotion } from "../shared/useMediaQuery";

export function PhilosophySection() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section
      id="philosophy"
      aria-label="Manifesto"
      style={{
        padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad}`,
        background: theme.bg,
        borderTop: `1px solid ${theme.borderSubtle}`,
        scrollMarginTop: "68px",
      }}
    >
      <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.5rem",
            maxWidth: "44rem",
          }}
        >
          <motion.p
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.45 },
                })}
            style={{ ...CORE_EYEBROW, color: theme.accent, margin: 0 }}
          >
            Manifesto
          </motion.p>

          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { scaleX: 0 },
                  whileInView: { scaleX: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                })}
            style={{
              width: "40px",
              height: "2px",
              background: theme.accent,
              transformOrigin: "left",
            }}
            aria-hidden="true"
          />

          <motion.p
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                })}
            style={{
              fontFamily: CORE_FONTS.display,
              fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.22,
              letterSpacing: "-0.01em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Carpe diem.
            <br />
            <span style={{ color: theme.fgMuted, fontStyle: "italic", fontWeight: 300 }}>
              Seize the day.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
