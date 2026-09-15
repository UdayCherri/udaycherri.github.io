import { motion } from "motion/react";
import { ctfArchive } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CyberCTF() {
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
            COMPETITION_ARCHIVE
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              color: theme.fg,
              letterSpacing: "-0.02em",
            }}
          >
            CTF Archive
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
            Competition history and notable solves. CTF is where theoretical knowledge meets operational execution under pressure.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {ctfArchive.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{
                padding: "2.5rem 2rem",
                border: `1px solid ${theme.borderSubtle}`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.accent + "33";
                el.style.background = theme.accent + "03";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.borderSubtle;
                el.style.background = "transparent";
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: theme.fgMuted,
                      opacity: 0.55,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {event.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: theme.fg,
                      lineHeight: 1.3,
                    }}
                  >
                    {event.event}
                  </h3>
                </div>
                <div
                  style={{
                    padding: "0.35rem 0.75rem",
                    border: `1px solid ${theme.accent}44`,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: theme.accent,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.placement}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {event.categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.5rem",
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.accent,
                      opacity: 0.7,
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {event.notableSolves.map((solve) => (
                  <div key={solve} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: theme.accentSecondary,
                        opacity: 0.65,
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
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
                      {solve}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
