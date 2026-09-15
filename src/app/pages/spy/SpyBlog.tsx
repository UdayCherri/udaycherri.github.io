import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { devBlogPosts } from "../../data/development";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function SpyBlog() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);

  return (
    <div style={{ minHeight: "100vh", background: "transparent", padding: "4rem clamp(1.25rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "4rem" }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: `${theme.accent}99`,
              marginBottom: "1.5rem",
            }}
          >
            DEV_JOURNAL
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: theme.fg,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              textTransform: "uppercase",
            }}
          >
            Writing on<br />
            <span style={{ color: theme.accent }}>building things</span>
          </h1>
        </motion.div>

        {/* Article list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {devBlogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              style={{ padding: "2rem 0", borderBottom: `1px solid ${theme.borderSubtle}` }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        padding: "0.15rem 0.5rem",
                        border: `1px solid ${theme.accent}40`,
                        color: `${theme.accent}B3`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: theme.fgMuted }}>{post.date}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: `${theme.accent}66` }}>{post.readTime} read</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                      fontWeight: 600,
                      color: theme.fg,
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>

                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.8rem, 2vw, 0.85rem)", color: theme.fgMuted, lineHeight: 1.7, maxWidth: "600px" }}>
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  to={`/development/blog/${post.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    padding: "0.5rem",
                    border: `1px solid ${theme.borderSubtle}`,
                    flexShrink: 0,
                    alignSelf: "flex-start",
                  }}
                >
                  Read
                  <ArrowUpRight size={11} strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
