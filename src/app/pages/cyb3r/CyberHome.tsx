import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Shield, Key, Package, Cpu } from "lucide-react";
import { cyberResearch, securityProjects } from "../../data/content";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const researchIcons: Record<string, React.ReactNode> = {
  "jwt-confusion": <Key size={16} strokeWidth={1.5} />,
  "supply-chain-analysis": <Package size={16} strokeWidth={1.5} />,
  "kernel-analysis": <Cpu size={16} strokeWidth={1.5} />,
};

const severityWidth: Record<string, string> = {
  Critical: "100%",
  High: "75%",
  Medium: "45%",
  Low: "20%",
};

const severityColor: Record<string, string> = {
  Critical: "rgba(239,68,68,0.8)",
  High: "rgba(245,158,11,0.8)",
  Medium: "rgba(107,114,128,0.7)",
  Low: "rgba(59,130,246,0.6)",
};

const severityBorder: Record<string, string> = {
  Critical: "rgba(239,68,68,0.4)",
  High: "rgba(245,158,11,0.4)",
  Medium: "rgba(107,114,128,0.4)",
  Low: "rgba(59,130,246,0.4)",
};

function ProfileArea({ theme, mode }: { theme: ReturnType<typeof getIdentityTheme>; mode: "dark" | "light" }) {
  return (
    <motion.div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        aspectRatio: "4/5",
        overflow: "hidden",
        flexShrink: 0,
        border: `1px solid ${theme.borderSubtle}`,
      }}
      whileHover="hover"
    >
      {/* Security researcher photograph */}
      <motion.img
        src="/images/cyb3r-profile.png"
        alt="Security researcher portrait"
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          filter: mode === "dark" ? "brightness(0.78) saturate(0.8)" : "brightness(0.92) saturate(0.82)",
        }}
      />

      {/* Gradient overlay — bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? "linear-gradient(to top, rgba(5,7,12,0.85) 0%, rgba(5,7,12,0.1) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(238,244,241,0.8) 0%, rgba(238,244,241,0.05) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle green accent edge — top */}
      <div
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

      {/* Identity classification — top */}
      <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: `${theme.accent}99`, letterSpacing: "0.12em" }}>
          CLASS: RESEARCHER
        </p>
      </div>

      {/* Identity label — bottom */}
      <div style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.25em", color: theme.accent, marginBottom: "0.35rem", opacity: 0.8 }}>
          THE INTELLIGENCE NETWORK
        </p>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.1rem", fontWeight: 500, color: mode === "dark" ? "rgba(236,253,245,0.95)" : "rgba(5,30,18,0.9)", letterSpacing: "0.05em" }}>
          CYB3R-BO1
        </p>
      </div>
    </motion.div>
  );
}

export default function CyberHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "5rem" : "3rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}
            >
              <Shield size={10} strokeWidth={2} color={theme.accent} />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
                  letterSpacing: "0.15em",
                  color: `${theme.accent}B3`,
                }}
              >
                SECURITY_BEGINS_WITH_UNDERSTANDING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 500,
                color: theme.fg,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                transition: "color 0.3s ease",
              }}
            >
              Security<br />
              begins with<br />
              <span style={{ color: theme.accent }}>understanding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Vulnerability research, CTF competition, security tooling.
              Understanding systems deeply enough to secure them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <button
                onClick={() => navigate("/security/research")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: mode === "dark" ? "#0F1318" : "#fff",
                  background: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                View Research
                <ArrowRight size={12} strokeWidth={2} />
              </button>
              <button
                onClick={() => navigate("/security/ctf-archive")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: theme.fgMuted,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.borderColor = `${theme.accent}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.fgMuted;
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                }}
              >
                CTF Archive
              </button>
            </motion.div>
          </div>

          {/* Portrait — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProfileArea theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Security Highlights */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
              letterSpacing: "0.2em",
              color: `${theme.accent}99`,
              marginBottom: "3rem",
            }}
          >
            SECURITY_HIGHLIGHTS
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd
                ? `repeat(${Math.min(cyberResearch.length, 3)}, 1fr)`
                : "1fr",
              gap: "1px",
              background: `${theme.accent}0F`,
            }}
          >
            {cyberResearch.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                onClick={() => navigate("/security/research")}
                style={{
                  padding: "2.5rem",
                  background: theme.bg,
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = `${theme.accent}0A`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = theme.bg;
                }}
              >
                {/* Category icon */}
                <div
                  style={{
                    color: `${theme.accent}99`,
                    marginBottom: "1rem",
                  }}
                >
                  {researchIcons[item.id]}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: `${theme.accent}80`,
                    }}
                  >
                    {item.year}
                  </span>
                  <motion.span
                    animate={
                      item.severity === "Critical"
                        ? { scale: [1, 1.04, 1], transition: { repeat: Infinity, duration: 3 } }
                        : {}
                    }
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      padding: "0.15rem 0.5rem",
                      border: `1px solid ${severityBorder[item.severity] ?? "rgba(107,114,128,0.4)"}`,
                      color: severityColor[item.severity] ?? "rgba(107,114,128,0.8)",
                      display: "inline-block",
                    }}
                  >
                    {item.severity}
                  </motion.span>
                </div>

                {/* Severity bar */}
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    background: `${theme.accent}15`,
                    marginBottom: "1.25rem",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: severityWidth[item.severity] ?? "30%",
                      background: severityColor[item.severity] ?? "rgba(107,114,128,0.7)",
                      borderRadius: "2px",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "clamp(0.85rem, 2vw, 1rem)",
                    fontWeight: 500,
                    color: theme.fg,
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "clamp(0.75rem, 1.8vw, 0.8rem)",
                    color: theme.fgMuted,
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.subtitle}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.5rem",
                        border: `1px solid ${theme.borderSubtle}`,
                        color: `${theme.accent}80`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Projects teaser */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
                letterSpacing: "0.2em",
                color: `${theme.accent}80`,
              }}
            >
              SECURITY_TOOLS
            </p>
            <button
              onClick={() => navigate("/security/security-projects")}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fgMuted)}
            >
              All Projects <ArrowRight size={10} strokeWidth={2} />
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd
                ? `repeat(${Math.min(securityProjects.slice(0, 2).length, 2)}, 1fr)`
                : "1fr",
              gap: "1px",
              background: `${theme.accent}0D`,
            }}
          >
            {securityProjects.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => navigate("/security/security-projects")}
                style={{
                  padding: "2.5rem",
                  background: theme.bg,
                  cursor: "pointer",
                  borderTop: "2px solid transparent",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = theme.accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                }}
              >
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: theme.accent,
                    opacity: 0.6,
                    marginBottom: "1rem",
                  }}
                >
                  [{project.category.toUpperCase()}]
                </p>
                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    fontWeight: 500,
                    color: theme.fg,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "clamp(0.78rem, 2vw, 0.82rem)",
                    color: theme.fgMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
