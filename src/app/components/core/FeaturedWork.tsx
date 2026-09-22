import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { featuredWork } from "../../data/content";
import { useIsDesktop, usePrefersReducedMotion } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "./coreDesign";

// YuuKayCee editorial cover — type specimen. The design discipline
// represented the honest way: letterforms, not a placeholder logo.
function YuuKayCeeCover() {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "#080A12",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(103,232,249,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 2rem" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#67E8F9",
            margin: "0 0 0.75rem",
          }}
        >
          Type Specimen
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "4.5rem",
            lineHeight: 1,
            color: "#F0EEF8",
            margin: 0,
          }}
        >
          Aa
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(240,238,248,0.5)",
            margin: "0.75rem 0 0",
          }}
        >
          Playfair Display · Design
        </p>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(103,232,249,0.6) 0%, rgba(45,212,191,0.4) 25%, rgba(165,243,252,0.4) 50%, rgba(34,211,238,0.4) 75%, rgba(14,116,144,0.4) 100%)",
          opacity: 0.8,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(12,10,21,0.6) 100%)",
        }}
      />
    </div>
  );
}

// Spy D. Veloper editorial cover — mock Rust code snippet with red highlight
function SpyCover() {
  const lines = [
    { text: "use vault_core::{SecretStore, Config};", highlight: false },
    { text: "", highlight: false },
    { text: "async fn init_vault(cfg: Config) {", highlight: false },
    { text: "  let store = SecretStore::new(cfg)", highlight: false },
    { text: "    .with_replication(3)", highlight: true },
    { text: "    .with_encryption(AES_256_GCM)", highlight: false },
    { text: "    .build().await?;", highlight: false },
    { text: "  store.start().await", highlight: false },
    { text: "}", highlight: false },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "300px",
        background: "#080C18",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(240,238,229,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(240,238,229,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "340px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.35rem",
            marginBottom: "1rem",
            opacity: 0.4,
          }}
        >
          {["#CC1234", "#F0EEE5", "#F0EEE5"].map((c, i) => (
            <div
              key={i}
              style={{ width: "7px", height: "7px", borderRadius: "50%", background: c, opacity: i === 0 ? 1 : 0.3 }}
            />
          ))}
        </div>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "0.68rem",
              lineHeight: 1.7,
              color: line.highlight ? "#E5485D" : "rgba(240,238,229,0.62)",
              background: line.highlight ? "rgba(204,18,52,0.1)" : "transparent",
              padding: line.highlight ? "0 0.25rem" : "0",
              marginLeft: line.highlight ? "-0.25rem" : "0",
              whiteSpace: "pre",
              letterSpacing: "0.02em",
            }}
          >
            {line.text || " "}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,12,24,0.7) 0%, transparent 20%, transparent 80%, rgba(8,12,24,0.7) 100%)",
        }}
      />
    </div>
  );
}

// CYB3R-BO1 editorial cover — terminal window with vulnerability scan output
function CyberCover() {
  const termLines = [
    { text: "$ vuln-scan -t jwt-libs -d full", dim: false },
    { text: "  scanning 8 libraries...", dim: true },
    { text: "  [CRITICAL] node-jsonwebtoken: alg confusion", dim: false, accent: true },
    { text: "  [HIGH]     pyjwt: missing alg validation", dim: false },
    { text: "  [CRITICAL] go-jose: none-alg bypass", dim: false, accent: true },
    { text: "  patching in progress: 5/8 libraries", dim: true },
    { text: "  CVE-2024-1337  CVE-2024-1338  issued.", dim: false },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "300px",
        background: "#0F1318",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.015) 2px, rgba(16,185,129,0.015) 4px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          width: "90%",
          maxWidth: "360px",
          position: "relative",
          border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "rgba(16,185,129,0.08)",
            borderBottom: "1px solid rgba(16,185,129,0.15)",
            padding: "0.4rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          {[0.5, 0.25, 0.25].map((op, i) => (
            <div
              key={i}
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#10B981",
                opacity: op,
              }}
            />
          ))}
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.55rem",
              color: "rgba(16,185,129,0.55)",
              marginLeft: "0.5rem",
              letterSpacing: "0.08em",
            }}
          >
            cyb3r-bo1 — zsh
          </span>
        </div>
        <div style={{ padding: "0.75rem 1rem 1rem" }}>
          {termLines.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem",
                lineHeight: 1.75,
                color: line.accent
                  ? "#34D399"
                  : line.dim
                    ? "rgba(16,185,129,0.45)"
                    : "rgba(226,234,240,0.72)",
                letterSpacing: "0.02em",
                whiteSpace: "pre",
              }}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to top, rgba(16,185,129,0.06), transparent)",
        }}
      />
    </div>
  );
}

const coverComponents: Record<string, React.ReactNode> = {
  yuukaycee: <YuuKayCeeCover />,
  spy: <SpyCover />,
  cyb3r: <CyberCover />,
};

export function FeaturedWork() {
  const isDesktop = useIsDesktop();
  const reduceMotion = usePrefersReducedMotion();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      aria-label="Selected work"
      style={{
        padding: `${CORE_LAYOUT.sectionY} ${CORE_LAYOUT.pad}`,
        background: theme.bg,
        borderTop: `1px solid ${theme.borderSubtle}`,
      }}
    >
      <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem", maxWidth: "38rem" }}>
          <motion.p
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.45 },
                })}
            style={{ ...CORE_EYEBROW, color: theme.accent, margin: "0 0 0.9rem" }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                })}
            style={{
              fontFamily: CORE_FONTS.display,
              fontSize: "clamp(2rem, 3.4vw, 2.9rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Three disciplines. One body of work.
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
            gap: isDesktop ? "2rem" : "3rem",
          }}
        >
          {featuredWork.map((item, i) => {
            const active = activeId === item.id;
            return (
              <motion.article
                key={item.id}
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 14 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.55, delay: Math.min(i * 0.08, 0.16), ease: [0.22, 1, 0.36, 1] },
                    })}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId(null)}
                style={{
                  position: "relative",
                  border: `1px solid ${active ? theme.accentTertiary : theme.borderSubtle}`,
                  background: theme.surface,
                  boxShadow: theme.shadow,
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                  transform: active && !reduceMotion ? "translateY(-3px)" : "none",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    style={{
                      transition: reduceMotion ? "none" : "transform 0.5s ease",
                      transform: active && !reduceMotion ? "scale(1.02)" : "none",
                    }}
                  >
                    {coverComponents[item.identity]}
                  </div>
                </div>

                <div style={{ padding: "1.5rem 1.5rem 1.6rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1rem",
                      marginBottom: "0.7rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: item.coverColor,
                        margin: 0,
                      }}
                    >
                      {item.discipline}
                    </p>
                    <p
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontVariantNumeric: "tabular-nums",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        color: theme.fgMuted,
                        margin: 0,
                      }}
                    >
                      {item.year}
                    </p>
                  </div>
                  <h3
                    style={{
                      fontFamily: CORE_FONTS.display,
                      fontSize: "1.45rem",
                      fontWeight: 400,
                      color: theme.fg,
                      margin: "0 0 0.6rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: theme.fgMuted,
                      margin: "0 0 1.25rem",
                    }}
                  >
                    {item.description}
                  </p>
                  {/* Stretched link — the whole card is keyboard-activatable */}
                  <Link
                    to={item.path}
                    aria-label={`Explore ${item.title}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.55rem",
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: theme.fg,
                      textDecoration: "none",
                      borderBottom: `1px solid ${active ? theme.accent : "transparent"}`,
                      paddingBottom: "3px",
                    }}
                  >
                    Explore
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
                  {/* Click target expansion */}
                  <Link
                    to={item.path}
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
  );
}
