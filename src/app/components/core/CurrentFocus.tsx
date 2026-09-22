import { motion } from "motion/react";
import { currentFocus } from "../../data/content";
import { useIsMd, usePrefersReducedMotion } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";

export function CurrentFocus() {
  const isMd = useIsMd();
  const reduceMotion = usePrefersReducedMotion();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      aria-label="Current studio focus"
      style={{
        padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad}`,
        background: theme.bg,
        borderTop: `1px solid ${theme.borderSubtle}`,
      }}
    >
      <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "minmax(220px, 1fr) 2fr" : "1fr",
            gap: isMd ? "4rem" : "2rem",
            alignItems: "start",
          }}
        >
          <div style={{ position: isMd ? "sticky" : "static", top: "calc(68px + 2rem)" }}>
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
              Now
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
                fontSize: "clamp(2rem, 3vw, 2.7rem)",
                fontWeight: 400,
                color: theme.fg,
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                margin: "0 0 1rem",
              }}
            >
              Current studio focus
            </motion.h2>
            <motion.p
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.45, delay: 0.1 },
                  })}
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: theme.fgMuted,
                maxWidth: "22rem",
                margin: 0,
              }}
            >
              What I&apos;m working on right now.
            </motion.p>
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: `1px solid ${theme.borderSubtle}` }}>
            {currentFocus.map((item, i) => (
              <motion.li
                key={item.id}
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 10 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: "-40px" },
                      transition: { duration: 0.45, delay: Math.min(i * 0.06, 0.18), ease: [0.22, 1, 0.36, 1] },
                    })}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem 1.5rem",
                  flexWrap: "wrap",
                  padding: "1.5rem 0",
                  borderBottom: `1px solid ${theme.borderSubtle}`,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0 }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.accent,
                      boxShadow: `0 0 0 4px ${item.accent}1f`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: CORE_FONTS.display,
                      fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
                      fontWeight: 400,
                      color: theme.fg,
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </span>
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: theme.fgMuted,
                    }}
                  >
                    {item.category}
                  </span>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "0.45rem 0.8rem",
                      borderRadius: "999px",
                      border: `1px solid ${theme.borderSubtle}`,
                      background: theme.bgSubtle,
                      color: theme.fg,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: item.accent,
                        flexShrink: 0,
                      }}
                    />
                    {item.status}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
