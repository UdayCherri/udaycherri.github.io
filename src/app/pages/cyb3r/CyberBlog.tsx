import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { cyberBlogPosts } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const categories = ["All", "CTF Writeup", "Vulnerability Research", "Security Research", "Tutorial"];

export default function CyberBlog() {
  const [active, setActive] = useState("All");
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);

  const filtered =
    active === "All"
      ? cyberBlogPosts
      : cyberBlogPosts.filter((p) => p.category === active);

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
style={{ marginBottom: "4rem" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
              letterSpacing: "0.2em",
              color: `${theme.accent}99`,
              marginBottom: "1.5rem",
            }}
          >
            PUBLISHED_RESEARCH
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              color: theme.fg,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              transition: "color 0.3s ease",
            }}
          >
            Writing on<br />
            <span style={{ color: theme.accent }}>security &amp; systems</span>
          </h1>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                padding: "0.55rem 1rem",
                minHeight: "44px",
                background: active === cat ? theme.accent : "transparent",
                border: `1px solid ${active === cat ? theme.accent : theme.borderSubtle}`,
                color: active === cat ? (mode === "dark" ? "#0F1318" : "#fff") : theme.fgMuted,
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
                borderRadius: "2px",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Article list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {filtered.map((post, i) => (
<motion.div
key={post.id}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{
                padding: "2rem 0",
                borderBottom: `1px solid ${theme.borderSubtle}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "200px" }}>
                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        padding: "0.15rem 0.5rem",
                        border: `1px solid ${theme.accent}40`,
                        color: `${theme.accent}B3`,
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: theme.fgMuted,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {post.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: `${theme.accent}66`,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                      fontWeight: 500,
                      color: theme.fg,
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
                      color: theme.fgMuted,
                      lineHeight: 1.7,
                      maxWidth: "600px",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* Read post */}
                <Link
                  to={`/security/blog/${post.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    padding: "0.5rem",
                    border: `1px solid ${theme.borderSubtle}`,
                    transition: "all 0.15s ease",
                    flexShrink: 0,
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = theme.accent;
                    el.style.borderColor = `${theme.accent}80`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = theme.fgMuted;
                    el.style.borderColor = theme.borderSubtle;
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
