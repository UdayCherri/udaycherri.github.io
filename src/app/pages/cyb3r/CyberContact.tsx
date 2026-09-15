import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";

export default function CyberContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const reduceMotion = usePrefersReducedMotion();

  return (
    /* Centered in the space below the fixed bar: the layout already
       offsets for its 68px header, so no second offset here. */
    <main
      style={{
        minHeight: "calc(100dvh - 68px)",
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
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            color: theme.accent,
            margin: "0 0 1.25rem",
          }}
        >
          {"// CONTACT"}
        </motion.p>

        <motion.h1
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4 },
              })}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: theme.fg,
            letterSpacing: "-0.02em",
            lineHeight: 1.12,
            margin: "0 0 1.5rem",
            textWrap: "balance",
          }}
        >
          Discuss<br />
          <span style={{ color: theme.accent }}>responsible research</span>
        </motion.h1>

        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.12 } })}
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: theme.fgMuted,
            margin: "0 0 2.5rem",
            maxWidth: "36rem",
          }}
        >
          Vulnerability disclosures, security research collaboration, CTF team inquiries.
          All communications encrypted where possible.
        </motion.p>

        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: 0.18 } })}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <a
            href="mailto:cyb3rbo1@scr1ptk1dd13s.xyz"
            aria-label="Email CYB3R-BO1 at cyb3rbo1@scr1ptk1dd13s.xyz"
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
                borderRadius: "3px",
              }}
            >
              <Mail size={15} strokeWidth={1.75} color={theme.accent} />
            </span>
            <span style={{ minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  color: theme.fgMuted,
                  marginBottom: "0.2rem",
                }}
              >
                {"$ secure-mail cyb3rbo1"}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "clamp(0.78rem, 1.6vw, 0.85rem)",
                  overflowWrap: "anywhere",
                }}
              >
                cyb3rbo1@scr1ptk1dd13s.xyz
              </span>
            </span>
            <ArrowUpRight size={15} strokeWidth={1.75} color={theme.fgMuted} style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden="true" />
          </a>

          <ul
            aria-label="Security profiles"
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
              { label: "GitHub", url: "https://github.com/CYB3R-BO1" },
              { label: "Twitter", url: "https://x.com/CYB3R_BO1" },
              { label: "HackerOne", url: "https://hackerone.com/cyb3r_bo1" },
              { label: "HackTheBox", url: "https://app.hackthebox.com/profile/cyb3r_bo1" },
              { label: "TryHackMe", url: "https://tryhackme.com/p/CYB3RBO1" },
              { label: "Instagram", url: "https://www.instagram.com/the_cyb3r_bo1/" },
            ].map(({ label, url }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
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
