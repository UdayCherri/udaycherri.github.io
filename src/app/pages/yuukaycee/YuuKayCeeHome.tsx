import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { yuukayceeProjects } from "../../data/content";
import { useIsDesktop, useIsMd, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

// Portrait hero — creative director editorial portrait with prismatic color treatment
function PortraitHero({
  theme,
  mode,
  aspect = "4/5",
}: {
  theme: ReturnType<typeof getIdentityTheme>;
  mode: "dark" | "light";
  aspect?: string;
}) {
  const borderColor = mode === "dark" ? "rgba(103,232,249,0.2)" : "rgba(14,116,144,0.25)";

  return (
    <figure
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        aspectRatio: aspect,
        overflow: "hidden",
        border: `1px solid ${borderColor}`,
        margin: 0,
        background: theme.bgSubtle,
      }}
    >
      {/* Portrait photograph */}
      <img
        src="/images/yuukaycee-profile.png"
        alt="Portrait of YuuKayCee, creative director"
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
          objectFit: aspect === "4/5" ? "contain" : "cover",
          objectPosition: "center top",
          display: "block",
          filter: mode === "dark" ? "brightness(0.9) saturate(0.92)" : "brightness(1) saturate(0.95)",
        }}
      />

      {/* Prismatic color overlay — light passing through from top-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: mode === "dark"
            ? [
                "linear-gradient(128deg, rgba(103,232,249,0.08) 0%, rgba(45,212,191,0.04) 30%, rgba(165,243,252,0.04) 60%, rgba(34,211,238,0.03) 100%)",
                "linear-gradient(to top, rgba(8,10,18,0.6) 0%, transparent 50%)",
              ].join(", ")
            : [
                "linear-gradient(128deg, rgba(14,116,144,0.08) 0%, rgba(20,184,166,0.04) 30%, rgba(13,148,136,0.03) 60%, rgba(21,94,117,0.03) 100%)",
                "linear-gradient(to top, rgba(5,8,14,0.62) 0%, transparent 52%)",
              ].join(", "),
          pointerEvents: "none",
        }}
      />

      {/* Thin chromatic edge — top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: mode === "dark"
            ? "linear-gradient(90deg, rgba(103,232,249,0.6) 0%, rgba(45,212,191,0.4) 25%, rgba(165,243,252,0.45) 50%, rgba(34,211,238,0.4) 75%, rgba(14,116,144,0.35) 100%)"
            : "linear-gradient(90deg, rgba(14,116,144,0.55) 0%, rgba(20,184,166,0.4) 25%, rgba(13,148,136,0.35) 50%, rgba(21,94,117,0.35) 75%, rgba(12,74,110,0.3) 100%)",
          opacity: 0.8,
        }}
      />

      {/* Bottom identity label */}
      <figcaption
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
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: mode === "dark" ? theme.accent : "#8ADCEC",
            margin: "0 0 0.35rem",
          }}
        >
          Creative Director
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            fontWeight: 500,
            color: "#F2EFFA",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          YuuKayCee
        </p>
      </figcaption>
    </figure>
  );
}

export default function YuuKayCeeHome() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const reduceMotion = usePrefersReducedMotion();
  const featured = yuukayceeProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();
  const [activeId, setActiveId] = useState<string | null>(null);

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
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
          {/* Left: text */}
          <div style={{ minWidth: 0 }}>
            <motion.p
              {...enter(0)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: theme.accent,
                margin: "0 0 1.5rem",
              }}
            >
              Design · Identity · Experience
            </motion.p>

            <motion.h1
              {...enter(0.08)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 500,
                color: theme.fg,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                margin: "0 0 1.5rem",
                textWrap: "balance",
              }}
            >
              Designing<br />
              <em style={{ color: theme.accent }}>connections</em><br />
              between disciplines
            </motion.h1>

            <motion.p
              {...enter(0.16)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.8vw, 1.02rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "27rem",
                margin: "0 0 2.25rem",
              }}
            >
              Brand identities, product systems, and visual language for organizations and individuals
              with something real to communicate.
            </motion.p>

            <motion.div {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.24 } })}>
              <button
                type="button"
                onClick={() => navigate("/design/work")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  minHeight: "52px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: theme.fg,
                  background: "transparent",
                  border: `1px solid ${theme.borderSubtle}`,
                  padding: "0.9rem 2rem",
                  cursor: "pointer",
                  transition: "border-color 0.25s ease, color 0.25s ease, background 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                  e.currentTarget.style.color = theme.fg;
                }}
              >
                View Work
                <ArrowRight size={13} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </motion.div>

            {/* Mobile portrait — keeps the hero balanced on small screens */}
            {!isDesktop && (
              <motion.div
                {...enter(0.2)}
                style={{ marginTop: "2.5rem" }}
              >
                <PortraitHero theme={theme} mode={mode} aspect="16/10" />
              </motion.div>
            )}
          </div>

          {/* Right: Creative director portrait — desktop only */}
          {isDesktop && (
            <motion.div
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                  })}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <PortraitHero theme={theme} mode={mode} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Work */}
      <section
        aria-label="Featured work"
        style={{
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
          background: mode === "dark" ? "transparent" : theme.bgSubtle,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.5 },
                })}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  margin: "0 0 0.9rem",
                }}
              >
                Featured Work
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.9rem, 3.4vw, 2.9rem)",
                  fontWeight: 500,
                  color: theme.fg,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/design/work")}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: theme.fgMuted,
                background: "transparent",
                border: "none",
                borderBottom: `1px solid transparent`,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
                padding: "0 0.25rem",
                transition: "color 0.2s ease, border-color 0.2s ease",
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
              All Work <ArrowRight size={13} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: isMd ? "2rem" : "2.5rem",
            }}
          >
            {featured.map((project, i) => {
              const active = activeId === project.id;
              return (
                <motion.article
                  key={project.id}
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 16 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.55, delay: Math.min(i * 0.08, 0.16), ease: [0.22, 1, 0.36, 1] },
                      })}
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(project.id)}
                  onBlur={() => setActiveId(null)}
                  style={{
                    position: "relative",
                    border: `1px solid ${active ? `${project.coverColor}66` : theme.borderSubtle}`,
                    background: theme.surface,
                    boxShadow: theme.shadow,
                    overflow: "hidden",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                    transform: active && !reduceMotion ? "translateY(-3px)" : "none",
                  }}
                >
                  <div
                    style={{
                      height: "340px",
                      background: `${project.coverColor}14`,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: `1px solid ${theme.borderSubtle}`,
                      padding: "2rem",
                      textAlign: "center",
                    }}
                  >
                    {/* Typographic cover — artwork placeholder until final pieces land */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          letterSpacing: "0.26em",
                          textTransform: "uppercase",
                          color: project.coverColor,
                          margin: "0 0 1rem",
                        }}
                      >
                        {project.category} — N° {String(i + 1).padStart(2, "0")}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                          lineHeight: 1.15,
                          color: theme.fg,
                          margin: 0,
                          textWrap: "balance",
                        }}
                      >
                        {project.title}
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem 1.5rem 1.6rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "1rem",
                        marginBottom: "0.6rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.68rem",
                          fontWeight: 600,
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
                          fontVariantNumeric: "tabular-nums",
                          fontSize: "0.72rem",
                          color: theme.fgMuted,
                        }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.55rem",
                        fontWeight: 500,
                        color: theme.fg,
                        margin: "0 0 0.5rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: theme.fgMuted,
                        lineHeight: 1.65,
                        margin: "0 0 1.1rem",
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <Link
                      to={`/project/${project.id}`}
                      aria-label={`Open ${project.title}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: theme.fg,
                        textDecoration: "none",
                        borderBottom: `1px solid ${active ? theme.accent : "transparent"}`,
                        paddingBottom: "3px",
                      }}
                    >
                      Open
                      <ArrowRight
                        size={13}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        style={{
                          transform: active ? "translateX(3px)" : "none",
                          transition: reduceMotion ? "none" : "transform 0.25s ease",
                        }}
                      />
                    </Link>
                    <Link
                      to={`/project/${project.id}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ position: "absolute", inset: 0 }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
