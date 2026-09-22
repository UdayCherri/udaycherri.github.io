import { motion } from "motion/react";
import { cyberResearch } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CyberResearch() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: theme.accent,
              opacity: 0.65,
              marginBottom: "1rem",
            }}
          >
            RESEARCH_ARCHIVE
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              color: theme.fg,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Security Research
          </h1>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
              color: theme.fgMuted,
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Original vulnerability research. Full disclosure policy — all findings responsibly disclosed before publication.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {cyberResearch.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{
                padding: "3rem 2rem",
                border: `1px solid ${theme.borderSubtle}`,
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.accent + "33";
                el.style.background = theme.accent + "04";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.borderSubtle;
                el.style.background = "transparent";
              }}
            >
              <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: theme.fgMuted,
                    opacity: 0.65,
                  }}
                >
                  {item.year}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    color: theme.accentSecondary,
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                  }}
                >
                  {item.subtitle}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    padding: "0.15rem 0.5rem",
                    border: `1px solid ${item.severity === "Critical" ? "rgba(239,68,68,0.4)" : item.severity === "High" ? "rgba(245,158,11,0.4)" : "rgba(107,114,128,0.35)"}`,
                    color: item.severity === "Critical" ? "rgba(239,68,68,0.9)" : item.severity === "High" ? "rgba(245,158,11,0.9)" : "rgba(107,114,128,0.8)",
                  }}
                >
                  {item.severity}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
                  fontWeight: 500,
                  color: theme.fg,
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
                  color: theme.fgMuted,
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {item.summary}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {item.findings.map((finding) => (
                  <div key={finding} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.65rem",
                        color: theme.accent,
                        opacity: 0.7,
                        marginTop: "0.15rem",
                        flexShrink: 0,
                      }}
                    >
                      &gt;
                    </span>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "clamp(0.7rem, 1.4vw, 0.75rem)",
                        color: theme.fgMuted,
                        lineHeight: 1.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {finding}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.accent,
                      opacity: 0.7,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
