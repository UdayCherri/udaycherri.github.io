import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router";
import { ArrowRight, ArrowUpRight, Shield, Key } from "lucide-react";
import { cyberResearch, securityProjects } from "../../data/content";
import { useIsDesktop, useIsMd, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { severityStyle, severityWidth } from "./cyberSeverity";

const researchIcons: Record<string, React.ReactNode> = {
  "jwt-confusion": <Key size={16} strokeWidth={1.5} />,
};

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
      {/* Security researcher photograph - mobile crop served on small screens */}
      <picture style={{ display: "contents" }}>
        <source media="(max-width: 1023px)" srcSet="/images/cyb3r-profile-mobile.png" />
        <img
          src="/images/cyb3r-profile.png"
          alt="CYB3R-BO1 security researcher portrait"
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            filter: mode === "dark" ? "brightness(0.8) saturate(0.85)" : "brightness(0.97) saturate(0.9)",
          }}
        />
      </picture>

      {/* Gradient overlay - bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? "linear-gradient(to top, rgba(5,7,12,0.88) 0%, rgba(5,7,12,0.1) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(3,6,5,0.62) 0%, rgba(3,6,5,0.08) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle green accent edge - top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* Identity classification - top */}
      <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: mode === "dark" ? theme.accent : "#34D399", letterSpacing: "0.12em", margin: 0 }}>
          CLASS: RESEARCHER
        </p>
      </div>

      {/* Identity label - bottom */}
      <figcaption style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.22em", color: mode === "dark" ? theme.accent : "#34D399", margin: "0 0 0.35rem" }}>
          SECURITY RESEARCHER
        </p>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.1rem", fontWeight: 600, color: "#EAFBF3", letterSpacing: "0.05em", margin: 0 }}>
          CYB3R-BO1
        </p>
      </figcaption>
    </figure>
  );
}

export default function CyberHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const reduceMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();
  const [activeId, setActiveId] = useState<string | null>(null);

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
              style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", minHeight: "44px", marginBottom: "1.5rem" }}
            >
              <Shield size={12} strokeWidth={2} color={theme.accent} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  color: theme.accent,
                }}
              >
                {"// RESEARCH_LOG"}
              </span>
            </motion.div>

            <motion.h1
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 0.08, ease: "easeOut" },
                  })}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(2rem, 5vw, 4.25rem)",
                fontWeight: 600,
                color: theme.fg,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                margin: "0 0 1.5rem",
                textWrap: "balance",
              }}
            >
              Security<br />
              begins with<br />
              <span style={{ color: theme.accent }}>understanding</span>
            </motion.h1>

            <motion.p
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.16 } })}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "clamp(0.9rem, 1.8vw, 0.95rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "27rem",
                margin: "0 0 1.25rem",
              }}
            >
              AI security and application security. Understanding systems
              deeply enough to secure them, proven in CTF competition.
            </motion.p>

            <motion.p
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.2 } })}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                margin: "0 0 2.25rem",
              }}
              aria-label="Focus areas: AI security primary, application security secondary"
            >
              <span style={{ color: theme.accent, fontWeight: 600 }}>PRIMARY: AI SECURITY</span>
              <span style={{ color: theme.fgMuted }}> · SECONDARY: APPSEC</span>
            </motion.p>

            <motion.div
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: 0.22 } })}
              style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
            >
              <button
                type="button"
                onClick={() => navigate("/security/research")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  minHeight: "52px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: mode === "dark" ? "#0F1318" : "#FFFFFF",
                  background: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "filter 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
              >
                View Research
                <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/security/ctf-archive")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  minHeight: "52px",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: theme.fg,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.borderColor = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.fg;
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                }}
              >
                CTF Archive
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

          {/* Portrait - desktop only */}
          {isDesktop && (
            <motion.div
              {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.12 } })}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProfileArea theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Security Highlights */}
      <section
        aria-label="Security highlights"
        style={{
          padding: "clamp(4rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 3rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
          background: mode === "dark" ? "transparent" : theme.bgSubtle,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              color: theme.accent,
              margin: "0 0 2.5rem",
            }}
          >
            SECURITY_HIGHLIGHTS
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: "1px",
              background: theme.borderSubtle,
              border: `1px solid ${theme.borderSubtle}`,
            }}
          >
            {cyberResearch.map((item, i) => {
              const sev = severityStyle(item.severity, mode);
              const active = activeId === item.id;
              return (
                <motion.article
                  key={item.id}
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 12 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.35, delay: Math.min(i * 0.06, 0.12) },
                      })}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(item.id)}
                  onBlur={() => setActiveId(null)}
                  style={{
                    position: "relative",
                    padding: "2rem",
                    background: active ? theme.bgSubtle : theme.surface,
                    boxShadow: theme.shadow,
                    transition: "background 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span aria-hidden="true" style={{ color: theme.accent, display: "inline-flex" }}>
                      {researchIcons[item.id] ?? <Shield size={16} strokeWidth={1.5} />}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        color: theme.fgMuted,
                        opacity: 0.8,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ~/research/{item.id}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "0.9rem" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontVariantNumeric: "tabular-nums",
                        fontSize: "0.68rem",
                        letterSpacing: "0.12em",
                        color: theme.fgMuted,
                      }}
                    >
                      {item.year}
                    </span>
                    {/* Static severity badge - no looping pulse */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        padding: "0.3rem 0.6rem",
                        border: `1px solid ${sev.border}`,
                        color: sev.color,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ width: "5px", height: "5px", borderRadius: "50%", background: sev.bar }}
                      />
                      {item.severity.toUpperCase()}
                    </span>
                  </div>

                  {/* Severity bar */}
                  <div
                    role="img"
                    aria-label={`Severity ${item.severity}`}
                    style={{
                      width: "100%",
                      height: "4px",
                      background: theme.borderSubtle,
                      marginBottom: "1.25rem",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: severityWidth[item.severity] ?? "30%",
                        background: sev.bar,
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                      fontWeight: 600,
                      color: theme.fg,
                      lineHeight: 1.35,
                      margin: "0 0 0.7rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: theme.fgMuted,
                      lineHeight: 1.65,
                      margin: "0 0 1.4rem",
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.4rem" }}>
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.08em",
                          padding: "0.28rem 0.6rem",
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
                    to={`/project/${item.id}`}
                    aria-label={`Read research: ${item.title}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      color: active ? theme.accent : theme.fgMuted,
                      textDecoration: "none",
                      borderBottom: `1px solid ${active ? theme.accent : "transparent"}`,
                      paddingBottom: "2px",
                    }}
                  >
                    READ
                    <ArrowRight size={12} strokeWidth={2} aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/project/${item.id}`}
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

      {/* Security Projects teaser */}
      <section
        aria-label="Security tools"
        style={{
          padding: "clamp(4rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 3rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
          background: mode === "dark" ? "transparent" : theme.bg,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: theme.accent,
                margin: 0,
              }}
            >
              SECURITY_TOOLS
            </p>
            <button
              type="button"
              onClick={() => navigate("/security/security-projects")}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                borderBottom: "1px solid transparent",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
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
              All Projects <ArrowRight size={12} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: "1px",
              background: theme.borderSubtle,
              border: `1px solid ${theme.borderSubtle}`,
            }}
          >
            {securityProjects.slice(0, 2).map((project, i) => {
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
                        transition: { duration: 0.35, delay: Math.min(i * 0.06, 0.1) },
                      })}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                  style={{
                    position: "relative",
                    padding: "2rem",
                    background: active ? theme.bgSubtle : theme.surface,
                    boxShadow: theme.shadow,
                    borderTop: `2px solid ${active ? theme.accent : "transparent"}`,
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.65rem",
                        letterSpacing: "0.14em",
                        color: theme.accent,
                        margin: 0,
                      }}
                    >
                      [{project.category.toUpperCase()}]
                    </p>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        color: theme.fgMuted,
                        opacity: 0.8,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ~/tools/{project.id}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                      fontWeight: 600,
                      color: theme.fg,
                      margin: "0 0 0.6rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: theme.fgMuted,
                      lineHeight: 1.65,
                      margin: "0 0 1.25rem",
                    }}
                  >
                    {project.description}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    aria-label={`Open security project: ${project.title}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      color: active ? theme.accent : theme.fgMuted,
                      textDecoration: "none",
                      borderBottom: `1px solid ${active ? theme.accent : "transparent"}`,
                      paddingBottom: "2px",
                    }}
                  >
                    OPEN
                    <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
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
