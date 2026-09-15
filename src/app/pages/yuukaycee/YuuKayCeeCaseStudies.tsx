import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { yuukayceeProjects } from "../../data/content";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const caseStudies = yuukayceeProjects.filter((p) => p.featured);

export default function YuuKayCeeCaseStudies() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "6rem" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1rem",
            }}
          >
            Case Studies
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.1,
            }}
          >
            Deep project breakdowns
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
              color: theme.fgMuted,
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Each case study documents the full project arc — from brief through execution. Evidence of process, not just result.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate(`/project/${project.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/project/${project.id}`);
                  }
                }}
                tabIndex={0}
                role="link"
                aria-label={`Open ${project.title}`}
                style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
                padding: "2.5rem 1.5rem",
                border: `1px solid ${theme.borderSubtle}`,
                cursor: "pointer",
                transition: "border-color 0.3s ease, color 0.3s ease",
              }}
              whileHover={{
                backgroundColor: mode === "dark" ? "rgba(103,232,249,0.03)" : "rgba(14,116,144,0.04)",
              }}
            >
              <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
                <div
                  style={{
                    width: "180px",
                    height: "120px",
                    background: project.coverColor + "15",
                    border: `1px solid ${project.coverColor}30`,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {/* Monogram placeholder until final artwork lands */}
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: "3rem",
                      lineHeight: 1,
                      color: project.coverColor,
                      opacity: 0.85,
                    }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: project.coverColor,
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        color: theme.fgMuted,
                        opacity: 0.7,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      fontWeight: 400,
                      color: theme.fg,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)",
                      color: theme.fgMuted,
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {project.overview}
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          padding: "0.2rem 0.6rem",
                          border: `1px solid ${theme.borderSubtle}`,
                          color: theme.fgMuted,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ArrowRight size={16} strokeWidth={1.5} color={theme.fgMuted} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
