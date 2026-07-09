import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { yuukayceeProjects } from "../../data/content";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

// Portrait hero — creative director editorial portrait with prismatic color treatment
function PortraitHero({ theme, mode }: { theme: ReturnType<typeof getIdentityTheme>; mode: "dark" | "light" }) {
  const borderColor = mode === "dark" ? "rgba(103,232,249,0.16)" : "rgba(8,145,178,0.2)";
  const captionBg = mode === "dark" ? "rgba(8,10,18,0.72)" : "rgba(245,248,255,0.82)";

  return (
    <motion.div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        aspectRatio: "3/4",
        overflow: "hidden",
        border: `1px solid ${borderColor}`,
      }}
      whileHover="hover"
    >
      {/* Portrait photograph */}
      <motion.img
        src="/images/yuukaycee-profile.png"
        alt="YuuKayCee"
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          filter: mode === "dark" ? "brightness(0.88) saturate(0.9)" : "brightness(0.96) saturate(0.85)",
        }}
      />

      {/* Prismatic color overlay — light passing through from top-left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? [
                "linear-gradient(128deg, rgba(103,232,249,0.08) 0%, rgba(45,212,191,0.04) 30%, rgba(196,181,253,0.04) 60%, rgba(244,114,182,0.03) 100%)",
                "linear-gradient(to top, rgba(8,10,18,0.55) 0%, transparent 50%)",
              ].join(", ")
            : [
                "linear-gradient(128deg, rgba(8,145,178,0.07) 0%, rgba(20,184,166,0.04) 30%, rgba(13,148,136,0.03) 60%, rgba(219,39,119,0.02) 100%)",
                "linear-gradient(to top, rgba(245,248,255,0.55) 0%, transparent 50%)",
              ].join(", "),
          pointerEvents: "none",
        }}
      />

      {/* Thin chromatic edge — top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: mode === "dark"
            ? "linear-gradient(90deg, rgba(103,232,249,0.6) 0%, rgba(45,212,191,0.4) 25%, rgba(196,181,253,0.4) 50%, rgba(244,114,182,0.4) 75%, rgba(251,191,36,0.4) 100%)"
            : "linear-gradient(90deg, rgba(8,145,178,0.5) 0%, rgba(20,184,166,0.4) 25%, rgba(13,148,136,0.3) 50%, rgba(219,39,119,0.3) 75%, rgba(217,119,6,0.3) 100%)",
          opacity: 0.8,
        }}
      />

      {/* Bottom identity label */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem 1.5rem 1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: theme.accent,
            marginBottom: "0.35rem",
          }}
        >
          Creative Director
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: mode === "dark" ? "rgba(240,238,248,0.95)" : "rgba(14,16,32,0.9)",
            letterSpacing: "0.02em",
          }}
        >
          YuuKayCee
        </p>
      </div>
    </motion.div>
  );
}

export default function YuuKayCeeHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const featured = yuukayceeProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      {/* Hero */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "6rem" : "3rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.6rem, 1.5vw, 0.65rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: "2rem",
              }}
            >
              Design · Identity · Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 400,
                color: theme.fg,
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Designing<br />
              <em style={{ color: theme.accent }}>connections</em><br />
              between worlds
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Brand identities, product systems, and visual language for organizations and individuals
              with something real to communicate.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => navigate("/design/work")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: theme.fg,
                background: "transparent",
                border: `1px solid ${theme.borderSubtle}`,
                padding: "1rem 2rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                borderColor: theme.accent,
                color: theme.accent,
              }}
            >
              View Work
              <ArrowRight size={12} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* Right: Creative director portrait — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <PortraitHero theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Work */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.6rem, 1.5vw, 0.65rem)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  marginBottom: "1rem",
                }}
              >
                Featured Work
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  color: theme.fg,
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => navigate("/design/work")}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fgMuted)}
            >
              All Work <ArrowRight size={12} strokeWidth={1.5} />
            </button>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: "2px",
            }}
          >
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "380px",
                    background: project.coverColor + "18",
                    border: `1px solid ${project.coverColor}20`,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = project.coverColor + "55";
                    el.style.background = project.coverColor + "26";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = project.coverColor + "20";
                    el.style.background = project.coverColor + "18";
                  }}
                >
                  <img
                    src="/images/nyxbureau-logo.png"
                    alt={project.title}
                    style={{ maxWidth: "55%", maxHeight: "55%", objectFit: "contain", position: "relative", zIndex: 1 }}
                  />
                </div>
                <div style={{ padding: "0 0.5rem 2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: project.coverColor,
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        color: theme.fgMuted,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: theme.fg,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
                      color: theme.fgMuted,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
