import type { CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { IdentityTheme } from "../../data/identityThemes";

export interface MarkdownFonts {
  heading: string;
  body: string;
  mono: string;
}

interface MarkdownProps {
  children: string;
  theme: IdentityTheme;
  fonts: MarkdownFonts;
}

export function Markdown({ children, theme, fonts }: MarkdownProps) {
  const link = theme.accent;
  const body: CSSProperties = {
    fontFamily: fonts.body,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: theme.fgMuted,
  };
  const heading: CSSProperties = {
    fontFamily: fonts.heading,
    color: theme.fg,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  };
  const codeBg = theme.bgSubtle;

  return (
    <div className="md-body" style={body}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...p }) => (
            <h1 style={{ ...heading, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", margin: "2.5rem 0 1.25rem" }} {...p} />
          ),
          h2: ({ node, ...p }) => (
            <h2 style={{ ...heading, fontSize: "clamp(1.4rem, 3vw, 1.8rem)", margin: "2.5rem 0 1rem" }} {...p} />
          ),
          h3: ({ node, ...p }) => (
            <h3 style={{ ...heading, fontSize: "1.2rem", margin: "2rem 0 0.75rem" }} {...p} />
          ),
          p: ({ node, ...p }) => <p style={{ margin: "0 0 1.35rem" }} {...p} />,
          a: ({ node, ...p }) => (
            <a
              style={{ color: link, textDecoration: "none", borderBottom: `1px solid ${link}55` }}
              target="_blank"
              rel="noopener noreferrer"
              {...p}
            />
          ),
          ul: ({ node, ...p }) => <ul style={{ margin: "0 0 1.35rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }} {...p} />,
          ol: ({ node, ...p }) => <ol style={{ margin: "0 0 1.35rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }} {...p} />,
          li: ({ node, ...p }) => <li style={{ paddingLeft: "0.25rem" }} {...p} />,
          strong: ({ node, ...p }) => <strong style={{ color: theme.fg, fontWeight: 600 }} {...p} />,
          blockquote: ({ node, ...p }) => (
            <blockquote
              style={{
                margin: "0 0 1.35rem",
                padding: "0.5rem 0 0.5rem 1.25rem",
                borderLeft: `2px solid ${theme.accent}`,
                color: theme.fg,
                fontStyle: "italic",
              }}
              {...p}
            />
          ),
          hr: () => <hr style={{ border: "none", borderTop: `1px solid ${theme.borderSubtle}`, margin: "2.5rem 0" }} />,
          img: ({ node, ...p }) => (
            <img style={{ maxWidth: "100%", borderRadius: "4px", margin: "1rem 0" }} {...p} />
          ),
          code: ({ node, className, children, ...p }) => {
            const isBlock = typeof className === "string" && className.includes("language-");
            if (isBlock) {
              return (
                <code style={{ fontFamily: fonts.mono, background: "transparent", color: "inherit" }} {...p}>
                  {children}
                </code>
              );
            }
            return (
              <code
                style={{
                  fontFamily: fonts.mono,
                  fontSize: "0.85em",
                  background: codeBg,
                  border: `1px solid ${theme.borderSubtle}`,
                  borderRadius: "3px",
                  padding: "0.1rem 0.35rem",
                  color: theme.fg,
                }}
                {...p}
              >
                {children}
              </code>
            );
          },
          pre: ({ node, ...p }) => (
            <pre
              style={{
                fontFamily: fonts.mono,
                fontSize: "0.85rem",
                lineHeight: 1.6,
                background: "#0d1117",
                color: "#e6edf3",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "1.25rem",
                overflowX: "auto",
                margin: "0 0 1.5rem",
              }}
              {...p}
            />
          ),
          table: ({ node, ...p }) => (
            <div style={{ overflowX: "auto", margin: "0 0 1.5rem" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "0.9rem" }} {...p} />
            </div>
          ),
          th: ({ node, ...p }) => (
            <th style={{ textAlign: "left", padding: "0.5rem 0.75rem", borderBottom: `1px solid ${theme.accent}`, color: theme.fg }} {...p} />
          ),
          td: ({ node, ...p }) => (
            <td style={{ padding: "0.5rem 0.75rem", borderBottom: `1px solid ${theme.borderSubtle}` }} {...p} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
