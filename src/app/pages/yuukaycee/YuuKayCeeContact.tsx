import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";

export default function YuuKayCeeContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    /* Centered in the space below the fixed bar: the layout already
       offsets for its 80px header, so no second offset here. */
    <main
      style={{
        minHeight: "calc(100dvh - 80px)",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "44rem", margin: "0 auto", width: "100%" }}>
        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } })}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: theme.accent,
            margin: "0 0 1.25rem",
          }}
        >
          Contact
        </motion.p>

        <motion.h1
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              })}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
            fontWeight: 500,
            color: theme.fg,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            margin: "0 0 1.5rem",
            textWrap: "balance",
          }}
        >
          Let&apos;s make<br />
          <em style={{ color: theme.accent }}>something together</em>
        </motion.h1>

        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.12 } })}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: theme.fgMuted,
            margin: "0 0 2.5rem",
            maxWidth: "36rem",
          }}
        >
            Brand identity, product design, typographic systems: if it involves creating visual experiences
          that communicate clearly and feel right, I want to hear about it.
        </motion.p>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.18 },
              })}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <a
            href="mailto:yuukaycee@nyxbureau.com"
            aria-label="Email YuuKayCee at yuukaycee@nyxbureau.com"
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
                  fontFamily: "'DM Sans', sans-serif",
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
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  overflowWrap: "anywhere",
                }}
              >
                yuukaycee@nyxbureau.com
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
            {[{ label: "Twitter", url: "https://x.com/YuuKaycee" }].map(({ label, url }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
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
