import { CoreNav } from "../../components/core/CoreNav";
import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "../../components/core/coreDesign";
import { RouteTransition } from "../../components/shared/PageTransition";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";

const socials = [
  { label: "GitHub", url: "https://github.com/UdayCherri" },
  { label: "LinkedIn", url: "https://linkedin.com/in/uday-kiran-cherri" },
  { label: "Twitter", url: "https://x.com/Uday_Cherri" },
  { label: "Instagram", url: "https://www.instagram.com/uday.cherri/" },
];

export default function CoreContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s ease",
      }}
    >
      <a href="#main-content" className="core-skip-link">
        Skip to content
      </a>
      <CoreNav />
      <RouteTransition persona="core">
      <main
        id="main-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `calc(68px + clamp(2.5rem, 6vw, 4rem)) ${CORE_LAYOUT.pad} clamp(3rem, 6vw, 5rem)`,
        }}
      >
        <div style={{ maxWidth: "44rem", margin: "0 auto", width: "100%" }}>
          <motion.p
            {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45 } })}
            style={{ ...CORE_EYEBROW, color: theme.accent, margin: "0 0 1.25rem" }}
          >
            Contact
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
              fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
              margin: "0 0 1.5rem",
              textWrap: "balance",
            }}
          >
            Start a conversation
          </motion.h1>

          <motion.p
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                })}
            style={{
              fontFamily: CORE_FONTS.body,
              fontSize: "1rem",
              lineHeight: 1.75,
              color: theme.fgMuted,
              margin: "0 0 2.5rem",
              maxWidth: "36rem",
            }}
          >
            Whether you&apos;re looking to collaborate on a design project, build something ambitious, or
              discuss security research, I&apos;m interested in work that matters.
          </motion.p>

          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] },
                })}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <a
              href="mailto:cherriuday@gmail.com"
              aria-label="Email Uday Cherri at cherriuday@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: theme.fg,
                padding: "1rem 1.25rem",
                minHeight: "64px",
                border: `1px solid ${theme.borderSubtle}`,
                background: theme.surface,
                boxShadow: theme.shadow,
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.borderSubtle;
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  flexShrink: 0,
                  border: `1px solid ${theme.borderSubtle}`,
                  borderRadius: "50%",
                }}
              >
                <Mail size={16} strokeWidth={1.75} color={theme.accent} />
              </span>
              <span style={{ minWidth: 0 }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: CORE_FONTS.body,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.fgMuted,
                    marginBottom: "0.2rem",
                  }}
                >
                  Email
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: CORE_FONTS.body,
                    fontSize: "1rem",
                    letterSpacing: "0.01em",
                    overflowWrap: "anywhere",
                  }}
                >
                  cherriuday@gmail.com
                </span>
              </span>
              <ArrowUpRight size={16} strokeWidth={1.75} color={theme.fgMuted} style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden="true" />
            </a>

            <ul
              aria-label="Social profiles"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.75rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {socials.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: theme.fgMuted,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      minHeight: "48px",
                      width: "100%",
                      padding: "0.65rem 1rem",
                      border: `1px solid ${theme.borderSubtle}`,
                      transition: "color 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.fg;
                      e.currentTarget.style.borderColor = theme.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.fgMuted;
                      e.currentTarget.style.borderColor = theme.borderSubtle;
                    }}
                  >
                    {label}
                    <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
      </RouteTransition>
    </div>
  );
}
