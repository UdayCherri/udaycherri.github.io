import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import { spyProjects } from "../../data/content";
import { useIsDesktop, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

// VaultChain: Client → Vault → Store flow diagram
function VaultChainDiagram({ accent }: { accent: string }) {
  return (
    <svg width="80" height="54" viewBox="0 0 80 54" fill="none" aria-hidden="true">
      <rect x="1" y="16" width="20" height="22" rx="2" stroke={accent} strokeWidth="0.75" />
      <text x="11" y="30" textAnchor="middle" fontFamily="monospace" fontSize="5" fill={accent} opacity={0.7}>Client</text>
      <line x1="21" y1="27" x2="29" y2="27" stroke={accent} strokeWidth="0.75" />
      <polygon points="29,24 34,27 29,30" fill={accent} opacity={0.8} />
      <rect x="34" y="12" width="12" height="30" rx="2" stroke={accent} strokeWidth="1" />
      <text x="40" y="29" textAnchor="middle" fontFamily="monospace" fontSize="4" fill={accent}>Vault</text>
      <line x1="46" y1="27" x2="54" y2="27" stroke={accent} strokeWidth="0.75" />
      <polygon points="54,24 59,27 54,30" fill={accent} opacity={0.8} />
      <rect x="59" y="16" width="20" height="22" rx="2" stroke={accent} strokeWidth="0.75" opacity={0.7} />
      <text x="69" y="30" textAnchor="middle" fontFamily="monospace" fontSize="5" fill={accent} opacity={0.6}>Store</text>
    </svg>
  );
}

// Conduit: Source → Transform → Sink pipeline
function ConduitDiagram({ accent }: { accent: string }) {
  return (
    <svg width="80" height="54" viewBox="0 0 80 54" fill="none" aria-hidden="true">
      <rect x="1" y="20" width="18" height="14" rx="2" stroke={accent} strokeWidth="0.75" opacity={0.7} />
      <text x="10" y="30" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill={accent} opacity={0.65}>src</text>
      <line x1="19" y1="27" x2="25" y2="27" stroke={accent} strokeWidth="0.75" />
      <polygon points="25,24 30,27 25,30" fill={accent} opacity={0.8} />
      <rect x="30" y="15" width="20" height="24" rx="3" stroke={accent} strokeWidth="1" />
      <text x="40" y="26" textAnchor="middle" fontFamily="monospace" fontSize="4" fill={accent}>xform</text>
      <line x1="50" y1="27" x2="56" y2="27" stroke={accent} strokeWidth="0.75" />
      <polygon points="56,24 61,27 56,30" fill={accent} opacity={0.8} />
      <rect x="61" y="20" width="18" height="14" rx="2" stroke={accent} strokeWidth="0.75" opacity={0.7} />
      <text x="70" y="30" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill={accent} opacity={0.65}>sink</text>
    </svg>
  );
}

const diagrams: Record<string, (accent: string) => React.ReactNode> = {
  vaultchain: (accent) => <VaultChainDiagram accent={accent} />,
  conduit: (accent) => <ConduitDiagram accent={accent} />,
};

// Generic schematic — blueprint module used when a project has no dedicated diagram
function GenericDiagram({ accent }: { accent: string }) {
  return (
    <svg width="80" height="54" viewBox="0 0 80 54" fill="none" aria-hidden="true">
      <rect x="1" y="8" width="78" height="38" rx="2" stroke={accent} strokeWidth="0.75" strokeDasharray="3 3" opacity={0.5} />
      <rect x="10" y="21" width="12" height="12" rx="1" stroke={accent} strokeWidth="0.75" />
      <rect x="58" y="21" width="12" height="12" rx="1" stroke={accent} strokeWidth="0.75" opacity={0.7} />
      <line x1="22" y1="27" x2="58" y2="27" stroke={accent} strokeWidth="0.75" />
      <polygon points="54,24 59,27 54,30" fill={accent} opacity={0.8} />
      <circle cx="40" cy="27" r="2" stroke={accent} strokeWidth="0.75" />
    </svg>
  );
}

function ProfileArea({
  theme,
  mode,
  aspect = "4/5",
}: {
  theme: ReturnType<typeof getIdentityTheme>;
  mode: "dark" | "light";
  aspect?: string;
}) {
  return (
    <figure
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        aspectRatio: aspect,
        overflow: "hidden",
        flexShrink: 0,
        border: `1px solid ${theme.borderSubtle}`,
        margin: 0,
        background: theme.bgSubtle,
      }}
    >
      {/* Workspace photograph */}
      <img
        src="/images/spy-profile.png"
        alt="Spy D. Veloper engineering workspace"
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          filter: mode === "dark" ? "brightness(0.78) saturate(0.9)" : "brightness(0.95) saturate(0.9)",
        }}
      />

      {/* Accent overlay — gradient to bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? "linear-gradient(to top, rgba(9,11,15,0.82) 0%, rgba(9,11,15,0.1) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(5,7,10,0.62) 0%, rgba(5,7,10,0.08) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Accent edge line — top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${theme.accent}, transparent)`,
          opacity: 0.7,
        }}
      />

      {/* Corner bracket marks */}
      {([
        { x: "0", y: "0", bt: true, bb: false, bl: true, br: false },
        { x: "calc(100% - 12px)", y: "0", bt: true, bb: false, bl: false, br: true },
        { x: "0", y: "calc(100% - 12px)", bt: false, bb: true, bl: true, br: false },
        { x: "calc(100% - 12px)", y: "calc(100% - 12px)", bt: false, bb: true, bl: false, br: true },
      ] as const).map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: "12px",
            height: "12px",
            borderTop: pos.bt ? `1px solid ${theme.accent}` : "none",
            borderBottom: pos.bb ? `1px solid ${theme.accent}` : "none",
            borderLeft: pos.bl ? `1px solid ${theme.accent}` : "none",
            borderRight: pos.br ? `1px solid ${theme.accent}` : "none",
            opacity: 0.6,
          }}
        />
      ))}

      {/* Identity label */}
      <figcaption style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: mode === "dark" ? theme.accent : "#E5485D",
            margin: "0 0 0.35rem",
          }}
        >
          Systems Engineer
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#F2EFE6",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            margin: 0,
          }}
        >
          Spy D. Veloper
        </p>
      </figcaption>
    </figure>
  );
}

export default function SpyHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const reduceMotion = usePrefersReducedMotion();
  const featured = spyProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();
  const [activeId, setActiveId] = useState<string | null>(null);

  // Deep brand red keeps cream button text ≥4.5:1; bright accent is for text/icons.
  const solidRed = theme.accentTertiary;

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        aria-label="Introduction"
        style={{
          padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
          minHeight: "88svh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "5rem" : "2.5rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <motion.div
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35 } })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.5rem 0.85rem",
                minHeight: "44px",
                border: `1px solid ${theme.borderSubtle}`,
                background: theme.bgSubtle,
                marginBottom: "1.75rem",
              }}
            >
              <Terminal size={12} strokeWidth={2} color={theme.accent} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: theme.accent,
                }}
              >
                Systems · Infrastructure · Open Source
              </span>
            </motion.div>

            <motion.h1
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.45, delay: 0.08, ease: "easeOut" },
                  })}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 4.75rem)",
                fontWeight: 700,
                color: theme.fg,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                margin: "0 0 1.5rem",
                textTransform: "uppercase",
                textWrap: "balance",
              }}
            >
              Creating<br />
              <span style={{ color: theme.accent }}>systems</span><br />
              that move<br />
              forward
            </motion.h1>

            <motion.p
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.16 } })}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(0.9rem, 1.8vw, 0.95rem)",
                lineHeight: 1.7,
                color: theme.fgMuted,
                maxWidth: "27rem",
                margin: "0 0 2.25rem",
              }}
            >
              Distributed systems, infrastructure tooling, and open-source software.
              Ideas only matter when built.
            </motion.p>

            <motion.div
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.35, delay: 0.22 } })}
              style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
            >
              <button
                type="button"
                onClick={() => navigate("/development/projects")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  minHeight: "52px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F5F2EA",
                  background: solidRed,
                  border: `1px solid ${solidRed}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "filter 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
              >
                View Projects
                <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/development/open-source")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  minHeight: "52px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: theme.fg,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                }}
              >
                Open Source
              </button>
            </motion.div>

            {!isDesktop && (
              <motion.div
                {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45, delay: 0.2 } })}
                style={{ marginTop: "2.5rem" }}
              >
                <ProfileArea theme={theme} mode={mode} aspect="16/10" />
              </motion.div>
            )}
          </div>

          {/* Portrait — desktop only */}
          {isDesktop && (
            <motion.div
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.15 } })}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProfileArea theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section
        aria-label="Selected projects"
        style={{
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
          background: mode === "dark" ? "transparent" : theme.bgSubtle,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  margin: "0 0 0.7rem",
                }}
              >
                Featured
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: theme.fg,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/development/projects")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                borderBottom: "1px solid transparent",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
                padding: "0 0.25rem",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.accent;
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.fgMuted;
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              All Projects <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {featured.map((project, i) => {
              const active = activeId === project.id;
              return (
                <motion.article
                  key={project.id}
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 12 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.4, delay: Math.min(i * 0.06, 0.12) },
                      })}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                  style={{
                    position: "relative",
                    display: isDesktop ? "grid" : "flex",
                    gridTemplateColumns: isDesktop ? "80px 1fr 1fr auto" : undefined,
                    flexDirection: isDesktop ? undefined : "column",
                    gap: isDesktop ? "2rem" : "1rem",
                    alignItems: isDesktop ? "center" : "flex-start",
                    padding: "1.75rem 1.5rem",
                    background: active ? theme.bgSubtle : theme.surface,
                    border: `1px solid ${active ? theme.accent : theme.borderSubtle}`,
                    boxShadow: theme.shadow,
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: isDesktop ? "80px" : "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {diagrams[project.id]
                      ? diagrams[project.id](project.coverColor)
                      : (
                        <GenericDiagram accent={project.coverColor} />
                      )}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        fontWeight: 700,
                        color: theme.fg,
                        margin: "0 0 0.3rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        lineHeight: 1.25,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: theme.fgMuted,
                        margin: 0,
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }} aria-label="Technologies">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.06em",
                          padding: "0.3rem 0.6rem",
                          border: `1px solid ${theme.borderSubtle}`,
                          background: theme.bgSubtle,
                          color: theme.fgMuted,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/project/${project.id}`}
                    aria-label={`Open ${project.title}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "44px",
                      height: "44px",
                      flexShrink: 0,
                      border: `1px solid ${active ? theme.accent : theme.borderSubtle}`,
                      color: active ? theme.accent : theme.fgMuted,
                      transition: "color 0.2s ease, border-color 0.2s ease",
                    }}
                  >
                    <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/project/${project.id}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: "absolute", inset: 0 }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
