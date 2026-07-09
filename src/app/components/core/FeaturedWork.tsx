import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { featuredWork } from "../../data/content";
import { useIsDesktop } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

// YuuKayCee editorial cover — NYX Bureau logo
function YuuKayCeeCover() {
  return (
    <div
      style={{
        width: "100%",
        height: "320px",
        background: "#080A12",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/nyxbureau-logo.png"
        alt="NYX Bureau"
        style={{ maxWidth: "55%", maxHeight: "55%", objectFit: "contain", position: "relative", zIndex: 1 }}
      />
      <div
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
      style={{
        width: "100%",
        height: "320px",
        background: "#080C18",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(240,238,229,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(240,238,229,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Code block */}
      <div
        style={{
          position: "relative",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "340px",
        }}
      >
        {/* Top bar */}
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
              fontSize: "0.6rem",
              lineHeight: 1.7,
              color: line.highlight ? "#CC1234" : "rgba(240,238,229,0.55)",
              background: line.highlight ? "rgba(204,18,52,0.08)" : "transparent",
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
      {/* Fade top/bottom */}
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
    { text: "$ vuln-scan --target jwt-libs --depth full", dim: false },
    { text: "  scanning 8 libraries...", dim: true },
    { text: "  [CRITICAL] node-jsonwebtoken: alg confusion", dim: false, accent: true },
    { text: "  [HIGH]     pyjwt: missing alg validation", dim: false },
    { text: "  [CRITICAL] go-jose: none-alg bypass", dim: false, accent: true },
    { text: "  patching in progress: 5/8 libraries", dim: true },
    { text: "  CVE-2024-1337  CVE-2024-1338  issued.", dim: false },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "320px",
        background: "#0F1318",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.015) 2px, rgba(16,185,129,0.015) 4px)",
          pointerEvents: "none",
        }}
      />
      {/* Terminal window */}
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
        {/* Title bar */}
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
              fontSize: "0.5rem",
              color: "rgba(16,185,129,0.5)",
              marginLeft: "0.5rem",
              letterSpacing: "0.08em",
            }}
          >
            cyb3r-bo1 — zsh
          </span>
        </div>
        {/* Content */}
        <div style={{ padding: "0.75rem 1rem 1rem" }}>
          {termLines.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                lineHeight: 1.75,
                color: line.accent
                  ? "#10B981"
                  : line.dim
                  ? "rgba(16,185,129,0.35)"
                  : "rgba(226,234,240,0.65)",
                letterSpacing: "0.02em",
                whiteSpace: "pre",
              }}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
      {/* Glow at bottom */}
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
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      style={{
        padding: "10rem clamp(2rem, 8vw, 8rem)",
        background: theme.bg,
        borderTop: `1px solid ${theme.borderSubtle}`,
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "5rem",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.6rem, 1.5vw, 0.65rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: "1rem",
              }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: theme.fg,
                lineHeight: 1.15,
              }}
            >
              Three disciplines.<br />One body of work.
            </motion.h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
            gap: "2px",
          }}
        >
          {featuredWork.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => navigate(item.path)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Editorial cover composition */}
              {coverComponents[item.identity]}

              {/* Meta */}
              <div style={{ padding: "1.5rem 0 2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: item.coverColor,
                    }}
                  >
                    {item.discipline}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: theme.fgMuted,
                    }}
                  >
                    {item.year}
                  </p>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: theme.fg,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
                    lineHeight: 1.6,
                    color: theme.fgMuted,
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.fg,
                  }}
                >
                  Explore
                  <ArrowRight size={11} strokeWidth={1.5} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
