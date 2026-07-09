import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Terminal } from "lucide-react";
import { spyProjects } from "../../data/content";
import { useIsDesktop } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

// VaultChain: Client → Vault → Store flow diagram
function VaultChainDiagram({ accent }: { accent: string }) {
  return (
    <svg width="80" height="54" viewBox="0 0 80 54" fill="none">
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
    <svg width="80" height="54" viewBox="0 0 80 54" fill="none">
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
      {/* Workspace photograph */}
      <motion.img
        src="/images/spy-profile.png"
        alt="Engineering workspace"
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          filter: mode === "dark" ? "brightness(0.75) saturate(0.85)" : "brightness(0.9) saturate(0.8)",
        }}
      />

      {/* Accent overlay — gradient to bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? "linear-gradient(to top, rgba(9,11,15,0.8) 0%, rgba(9,11,15,0.1) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(244,242,237,0.75) 0%, rgba(244,242,237,0.05) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Accent edge line — top */}
      <div
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
      <div style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: theme.accent,
            marginBottom: "0.35rem",
          }}
        >
          The Framework
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: mode === "dark" ? "rgba(240,238,229,0.95)" : "rgba(28,28,28,0.9)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Spy D. Veloper
        </p>
      </div>
    </motion.div>
  );
}

export default function SpyHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const featured = spyProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          minHeight: "88vh",
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
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.75rem",
                border: `1px solid ${theme.accent}4D`,
                marginBottom: "2rem",
              }}
            >
              <Terminal size={10} strokeWidth={2} color={theme.accent} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: theme.accent,
                }}
              >
                Systems · Infrastructure · Open Source
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                fontWeight: 700,
                color: theme.fg,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
            >
              Creating<br />
              <span style={{ color: theme.accent }}>systems</span><br />
              that move<br />
              forward
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                lineHeight: 1.7,
                color: theme.fgMuted,
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Distributed systems, infrastructure tooling, and open-source software.
              Ideas only matter when built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <button
                onClick={() => navigate("/development/projects")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F0EEE5",
                  background: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  padding: "0.9rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                View Projects
                <ArrowRight size={12} strokeWidth={2} />
              </button>
              <button
                onClick={() => navigate("/development/open-source")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: theme.fgMuted,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0.9rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.fg;
                  e.currentTarget.style.borderColor = `${theme.fg}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.fgMuted;
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                }}
              >
                Open Source
              </button>
            </motion.div>
          </div>

          {/* Portrait — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProfileArea theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.6rem, 1.5vw, 0.6rem)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  marginBottom: "0.5rem",
                }}
              >
                Featured
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: theme.fg,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => navigate("/development/projects")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fgMuted)}
            >
              All Projects <ArrowRight size={12} strokeWidth={2} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => navigate(`/project/${project.id}`)}
                style={{
                  display: isDesktop ? "grid" : "flex",
                  gridTemplateColumns: isDesktop ? "80px 1fr 1fr auto" : undefined,
                  flexDirection: isDesktop ? undefined : "column",
                  gap: isDesktop ? "2rem" : "1rem",
                  alignItems: isDesktop ? "center" : "flex-start",
                  padding: "2rem 1.5rem",
                  background: `${theme.fg}05`,
                  border: `1px solid ${theme.fg}0A`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                whileHover={{
                  backgroundColor: `${theme.accent}0A`,
                  borderColor: `${theme.accent}33`,
                }}
              >
                {/* SVG diagram replacing number square */}
                <div
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
                      <div
                        style={{
                          width: "60px",
                          height: "40px",
                          background: project.coverColor + "20",
                          border: `1px solid ${project.coverColor}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.7rem",
                            color: project.coverColor,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1rem, 2vw, 1.15rem)",
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
                      fontSize: "clamp(0.75rem, 1.8vw, 0.8rem)",
                      color: theme.fgMuted,
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.slice(0, 3).map((tag) => (
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
      </section>
    </div>
  );
}
