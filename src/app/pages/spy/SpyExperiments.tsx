import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { spyProjects } from "../../data/content";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const experiments = spyProjects.filter((p) => p.category === "Experiments");

export default function SpyExperiments() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);

  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            R&D
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: theme.fg,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Experiments
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
              color: theme.fgMuted,
              marginTop: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Prototypes, proofs of concept, and technical explorations. Where production constraints don't apply.
          </p>
        </motion.div>

        {experiments.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {experiments.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
                onClick={() => navigate(`/project/${exp.id}`)}
                style={{
                  padding: "2.5rem",
                  border: `1px solid ${theme.borderSubtle}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = mode === "dark" ? "rgba(204,18,52,0.04)" : "rgba(204,18,52,0.03)";
                  el.style.borderColor = mode === "dark" ? "rgba(204,18,52,0.2)" : "rgba(204,18,52,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "transparent";
                  el.style.borderColor = theme.borderSubtle;
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: theme.fg,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                        color: theme.fgMuted,
                        marginBottom: "1rem",
                      }}
                    >
                      {exp.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                        color: theme.fgMuted,
                        lineHeight: 1.65,
                        maxWidth: "600px",
                      }}
                    >
                      {exp.overview}
                    </p>
                  </div>
                  <ArrowRight size={14} strokeWidth={1.5} color={theme.fgMuted} style={{ marginLeft: "2rem", flexShrink: 0 }} />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "3rem",
              border: `1px solid ${theme.borderSubtle}`,
              cursor: "default",
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: theme.accent,
                marginBottom: "1rem",
                opacity: 0.7,
              }}
            >
              EXP_01
            </p>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: theme.fg,
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Prism Language
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                color: theme.fgMuted,
              }}
            >
              Declarative DSL for data transformation. Compiles to Rust.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
