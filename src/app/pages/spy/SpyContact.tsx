import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";

export default function SpyContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    /* Centered in the space below the fixed bar: the layout already
       offsets for its 72px header, so no second offset here. */
    <main
      style={{
        minHeight: "calc(100dvh - 72px)",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "44rem", margin: "0 auto", width: "100%" }}>
        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } })}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: theme.accent,
            margin: "0 0 1.25rem",
          }}
        >
          {"// Contact"}
        </motion.p>

        <motion.h1
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, ease: "easeOut" },
              })}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4.25rem)",
            fontWeight: 700,
            color: theme.fg,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
            margin: "0 0 1.5rem",
            textWrap: "balance",
          }}
        >
          Build something<br />
          <span style={{ color: theme.accent }}>real.</span>
        </motion.h1>

        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35, delay: 0.12 } })}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: theme.fgMuted,
            margin: "0 0 2.5rem",
            maxWidth: "36rem",
          }}
        >
          Distributed systems, infrastructure challenges, open-source collaboration.
          If the problem is interesting and the constraints are real, I&apos;m interested.
        </motion.p>

        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35, delay: 0.18 } })}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <a
            href="mailto:spyd.veloper@gmail.com"
            aria-label="Email Spy D. Veloper at spyd.veloper@gmail.com"
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
              transition: "border-color 0.2s ease",
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
              }}
            >
              <Mail size={15} strokeWidth={1.75} color={theme.accent} />
            </span>
            <span style={{ minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  color: theme.fgMuted,
                  marginBottom: "0.2rem",
                }}
              >
                {"$ mail spyd.veloper"}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  overflowWrap: "anywhere",
                }}
              >
                spyd.veloper@gmail.com
              </span>
            </span>
            <ArrowUpRight size={15} strokeWidth={1.75} color={theme.fgMuted} style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden="true" />
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
            {[
              { label: "GitHub", url: "https://github.com/Spy-D-Veloper" },
              { label: "Twitter", url: "https://x.com/SpyD_Veloper" },
              { label: "Instagram", url: "https://www.instagram.com/spyd.veloper/" },
            ].map(({ label, url }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
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
                    e.currentTarget.style.color = theme.accent;
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
  );
}
