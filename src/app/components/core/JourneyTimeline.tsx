import { motion } from "motion/react";
import { journeyMilestones } from "../../data/content";
import { useIsMd, usePrefersReducedMotion } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";

const disciplineColors: Record<string, string> = {
  design: "#67E8F9",
  development: "#CC1234",
  security: "#10B981",
  core: "#B8A46A",
};

const disciplineLabels: Record<string, string> = {
  design: "Design",
  development: "Dev",
  security: "Security",
  core: "Core",
};

export function JourneyTimeline() {
  const isMd = useIsMd();
  const reduceMotion = usePrefersReducedMotion();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      aria-label="Milestones"
      style={{
        padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad}`,
        background: theme.bgSubtle,
        borderTop: `1px solid ${theme.borderSubtle}`,
      }}
    >
      <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
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
              Milestones
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
                fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
                fontWeight: 400,
                color: theme.fg,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Evidence.
            </motion.h2>
          </div>

          {/* Legend */}
          <motion.ul
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.45, delay: 0.1 },
                })}
            aria-label="Disciplines"
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
              flexWrap: "wrap",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {Object.entries(disciplineLabels)
              .filter(([k]) => k !== "core")
              .map(([key, label]) => (
                <li key={key} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: disciplineColors[key],
                      boxShadow: `0 0 0 3px ${disciplineColors[key]}22`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: theme.fgMuted,
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
          </motion.ul>
        </div>

        {/* Milestones — single-column rhythm with top dividers; two-up on md via gap */}
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
            columnGap: "3rem",
          }}
        >
          {journeyMilestones.map((milestone, i) => (
            <motion.li
              key={milestone.id}
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-40px" },
                    transition: { duration: 0.45, delay: Math.min(i * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] },
                  })}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                padding: "1.35rem 0",
                borderTop: `1px solid ${theme.borderSubtle}`,
                borderBottom: !isMd && i === journeyMilestones.length - 1 ? `1px solid ${theme.borderSubtle}` : "none",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: disciplineColors[milestone.discipline],
                  boxShadow: `0 0 0 3px ${disciplineColors[milestone.discipline]}22`,
                  transform: "translateY(-1px)",
                  alignSelf: "center",
                }}
              />

              <span
                style={{
                  flexShrink: 0,
                  fontFamily: CORE_FONTS.body,
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: theme.fgMuted,
                  width: "3.25rem",
                  lineHeight: 1.4,
                }}
              >
                {milestone.year}
              </span>

              <span
                style={{
                  flex: 1,
                  fontFamily: CORE_FONTS.display,
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: theme.fg,
                  lineHeight: 1.3,
                }}
              >
                {milestone.title}
              </span>

              <span
                style={{
                  flexShrink: 0,
                  fontFamily: CORE_FONTS.body,
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: theme.fgMuted,
                  textAlign: "right",
                  maxWidth: "7rem",
                  lineHeight: 1.5,
                }}
              >
                {milestone.note}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
