import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

/**
 * Security blog index - a gateway, not an archive. Publishing happens
 * on the off-site notebook; this page frames it and hands off.
 */
export default function CyberBlog() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "4rem clamp(1.25rem, 5vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ marginBottom: "3rem" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: theme.accent,
              opacity: 0.9,
              marginBottom: "1.5rem",
            }}
          >
            PUBLISHED_RESEARCH
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: theme.fg,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              transition: "color 0.3s ease",
            }}
          >
            Writing on<br />
            <span style={{ color: theme.accent }}>security &amp; systems</span>
          </h1>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.9rem, 1.8vw, 0.95rem)",
              lineHeight: 1.75,
              color: theme.fgMuted,
              maxWidth: "34rem",
              margin: "1.5rem 0 0",
            }}
          >
            Long-form notes live off-site. What follows is the way in.
          </p>
        </motion.div>

        {/* External mirror - the complete off-site notebook */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          style={{
            padding: "2rem",
            border: `1px solid ${theme.accent}44`,
            background: mode === "dark" ? "rgba(16,185,129,0.04)" : "rgba(4,120,87,0.05)",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: theme.accent,
              opacity: 0.9,
              margin: "0 0 1rem",
            }}
          >
            EXTERNAL_MIRROR
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: theme.fgMuted,
              margin: "0 0 1.5rem",
              maxWidth: "34rem",
            }}
          >
            Every writeup, tutorial, and research note: the complete public notebook.
          </p>
          <a
            href="https://cyb3r-bo1.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              minHeight: "52px",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              color: mode === "dark" ? "#0F1318" : "#FFFFFF",
              background: theme.accent,
              textDecoration: "none",
              padding: "0.85rem 1.75rem",
              transition: "filter 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
            }}
          >
            Open cyb3r-bo1.github.io
            <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
