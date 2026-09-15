import { motion } from "motion/react";
import { openSourceRepos } from "../../data/content";
import { Star, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function SpyOpenSource() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
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
            Public Repositories
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
            Open Source
          </h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {openSourceRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url === "#" ? undefined : repo.url}
              target={repo.url === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i * 0.06 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
                padding: "2rem 1.5rem",
                border: `1px solid ${theme.borderSubtle}`,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              whileHover={{
                backgroundColor: mode === "dark" ? "rgba(229,72,93,0.05)" : "rgba(204,18,52,0.03)",
                borderColor: mode === "dark" ? "rgba(229,72,93,0.25)" : "rgba(204,18,52,0.2)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: theme.fg,
                    }}
                  >
                    {repo.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: theme.accent,
                      padding: "0.15rem 0.5rem",
                      border: `1px solid ${theme.accent}44`,
                    }}
                  >
                    {repo.language}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                    color: theme.fgMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {repo.description}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Star size={12} strokeWidth={1.5} color={theme.fgMuted} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: theme.fgMuted,
                    }}
                  >
                    {repo.stars.toLocaleString()}
                  </span>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} color={theme.fgMuted} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
