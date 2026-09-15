import { motion } from "motion/react";
import { spySystems } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";

export default function SpySystems() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "0.75rem",
            }}
          >
            Architecture
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: theme.fg,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Systems
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
              color: theme.fgMuted,
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Architectural patterns and system designs. How things are built, not just that they were.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? `repeat(${Math.min(spySystems.length, 3)}, 1fr)`
              : isMd
              ? `repeat(${Math.min(spySystems.length, 2)}, 1fr)`
              : "1fr",
            gap: "1px",
            background: theme.borderSubtle,
          }}
        >
          {spySystems.map((system, i) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              style={{
                padding: "2.5rem",
                background: theme.bg,
                borderTop: "2px solid transparent",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: theme.accent,
                    opacity: 0.7,
                  }}
                >
                  SYS_{String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.5rem",
                    border: `1px solid ${system.status === "Production" ? theme.accent + "44" : theme.borderSubtle}`,
                    color: system.status === "Production" ? theme.accent : theme.fgMuted,
                  }}
                >
                  {system.status}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: theme.fg,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                {system.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                  color: theme.fgMuted,
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {system.description}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {system.components.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      padding: "0.2rem 0.5rem",
                      background: mode === "dark" ? "rgba(240,238,229,0.03)" : "rgba(28,12,24,0.03)",
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.fgMuted,
                    }}
                  >
                    {c}
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
