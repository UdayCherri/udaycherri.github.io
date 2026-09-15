import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { spyProjects } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsDesktop } from "../../components/shared/useMediaQuery";

export default function SpyProjects() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const isDesktop = useIsDesktop();

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
            Projects
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
            All Projects
          </h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {spyProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
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
                display: isDesktop ? "grid" : "flex",
                gridTemplateColumns: isDesktop ? "60px 1fr 200px 40px" : undefined,
                flexDirection: isDesktop ? undefined : "column",
                gap: isDesktop ? "2rem" : "0.75rem",
                alignItems: isDesktop ? "center" : "flex-start",
                padding: "1.75rem 1.25rem",
                border: `1px solid ${theme.borderSubtle}`,
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                whileHover={{
                  backgroundColor: mode === "dark" ? "rgba(229,72,93,0.05)" : "rgba(204,18,52,0.03)",
                  borderColor: mode === "dark" ? "rgba(229,72,93,0.25)" : "rgba(204,18,52,0.2)",
                }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: theme.accent,
                  opacity: 0.7,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: theme.fg,
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                    color: theme.fgMuted,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.fgMuted,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowRight size={14} strokeWidth={1.5} color={theme.fgMuted} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
