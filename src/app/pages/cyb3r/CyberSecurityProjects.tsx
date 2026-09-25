import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { securityProjects } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsMd } from "../../components/shared/useMediaQuery";

export default function CyberSecurityProjects() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const isMd = useIsMd();

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              opacity: 0.9,
              marginBottom: "1rem",
            }}
          >
            TOOLING_&_PROJECTS
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: theme.fg,
              letterSpacing: "-0.02em",
            }}
          >
            Security Projects
          </h1>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd
              ? `repeat(${Math.min(securityProjects.length, 2)}, 1fr)`
              : "1fr",
            gap: "1px",
            background: theme.borderSubtle,
          }}
        >
          {securityProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{
                padding: "2.5rem",
                background: theme.bg,
                borderTop: "2px solid transparent",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderTopColor = theme.accent;
                el.style.background = theme.accent + "05";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderTopColor = "transparent";
                el.style.background = theme.bg;
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: theme.accent,
                    opacity: 0.7,
                  }}
                >
                  [{project.category.toUpperCase()}]
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    color: theme.fgMuted,
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                  }}
                >
                  {project.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "1.1rem",
              fontWeight: 600,
                  color: theme.fg,
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.7rem",
                  color: theme.accentSecondary,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  opacity: 0.75,
                }}
              >
                {project.subtitle}
              </p>

              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                  color: theme.fgMuted,
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.06em",
                      padding: "0.2rem 0.5rem",
                    border: `1px solid ${theme.borderSubtle}`,
                    color: theme.accent,
                    opacity: 0.85,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
                <Link
                  to={`/project/${project.id}`}
                  aria-label={`Open detail: ${project.title}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    borderBottom: "1px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.accent;
                    e.currentTarget.style.borderBottomColor = theme.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.fgMuted;
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  OPEN DETAIL
                  <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
                </Link>
                <a
                  href="https://github.com/CYB3R-BO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CYB3R-BO1 on GitHub"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    borderBottom: "1px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.accent;
                    e.currentTarget.style.borderBottomColor = theme.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.fgMuted;
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  GITHUB
                  <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
