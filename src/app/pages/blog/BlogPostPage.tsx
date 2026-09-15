import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { Markdown, type MarkdownFonts } from "../../components/shared/Markdown";
import { getPostBody, type BlogSection } from "../../lib/blog";
import { cyberBlogPosts } from "../../data/security";
import { devBlogPosts } from "../../data/development";

interface PostMeta {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const config: Record<
  BlogSection,
  { identity: "cyb3r" | "spy"; basePath: string; posts: PostMeta[]; fonts: MarkdownFonts }
> = {
  security: {
    identity: "cyb3r",
    basePath: "/security/blog",
    posts: cyberBlogPosts,
    fonts: { heading: "'IBM Plex Mono', monospace", body: "'IBM Plex Sans', sans-serif", mono: "'IBM Plex Mono', monospace" },
  },
  development: {
    identity: "spy",
    basePath: "/development/blog",
    posts: devBlogPosts,
    fonts: { heading: "'Space Grotesk', sans-serif", body: "'Space Grotesk', sans-serif", mono: "'JetBrains Mono', monospace" },
  },
};

export default function BlogPostPage({ section }: { section: BlogSection }) {
  const { slug } = useParams<{ slug: string }>();
  const { mode } = useTheme();
  const { identity, basePath, posts, fonts } = config[section];
  const theme = getIdentityTheme(identity, mode);

  const post = posts.find((p) => p.slug === slug);
  const body = slug ? getPostBody(section, slug) : undefined;

  const backLink = (
    <Link
      to={basePath}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: fonts.mono,
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: theme.fgMuted,
        textDecoration: "none",
      }}
    >
      <ArrowLeft size={12} strokeWidth={1.5} /> All posts
    </Link>
  );

  if (!post || !body) {
    return (
      <div style={{ padding: "6rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: "1.6rem", color: theme.fg }}>Post not found</h1>
          {backLink}
        </div>
      </div>
    );
  }

  // Note: no page-level transition here — the discipline layout already
  // wraps this route. Nesting two pathname-keyed transitions compounds
  // their wait states into a visible stutter.
  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem) 8rem", minHeight: "100vh" }}>
      <article style={{ maxWidth: "720px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "3rem" }}
        >
          <div style={{ marginBottom: "1.5rem" }}>{backLink}</div>

          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                padding: "0.15rem 0.5rem",
                border: `1px solid ${theme.accent}40`,
                color: `${theme.accent}B3`,
              }}
            >
              {post.category}
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: "0.6rem", color: theme.fgMuted }}>{post.date}</span>
            <span style={{ fontFamily: fonts.mono, fontSize: "0.6rem", color: `${theme.accent}66` }}>{post.readTime} read</span>
          </div>

          <h1
            style={{
              fontFamily: fonts.heading,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 500,
              color: theme.fg,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Markdown theme={theme} fonts={fonts}>
            {body}
          </Markdown>
        </motion.div>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: `1px solid ${theme.borderSubtle}` }}>
          {backLink}
        </div>
      </article>
    </div>
  );
}
