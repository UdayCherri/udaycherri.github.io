import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useIsMd } from "../shared/useMediaQuery";

const identities = [
  {
    id: "yuukaycee",
    path: "/design",
    name: "YuuKayCee",
    role: "The Prism",
    discipline: "Design",
    accent: "#67E8F9",
    font: "'Playfair Display', serif",
  },
  {
    id: "spy",
    path: "/development",
    name: "Spy D. Veloper",
    role: "The Builder",
    discipline: "Development",
    accent: "#CC1234",
    font: "'Space Grotesk', sans-serif",
  },
  {
    id: "cyb3r",
    path: "/security",
    name: "CYB3R-BO1",
    role: "The Researcher",
    discipline: "Security",
    accent: "#10B981",
    font: "'IBM Plex Mono', monospace",
  },
];

export function IdentityTree() {
  const navigate = useNavigate();
  const isMd = useIsMd();

  return (
    <section
      style={{
        padding: "8rem clamp(2rem, 8vw, 8rem) 6rem",
        background: "#1C1C1C",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(184,164,106,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#B8A46A",
            marginBottom: "5rem",
            textAlign: "center",
          }}
        >
          One source. Three disciplines.
        </motion.p>

        {/* Core identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#B8A46A",
              marginBottom: "1rem",
            }}
          >
            The Architect
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              color: "#F7F4EE",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Uday Cherri
          </h2>
        </motion.div>

        {/* Connecting element */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2.5rem 0",
            transformOrigin: "top",
          }}
        >
          {/* Vertical stem */}
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "rgba(184,164,106,0.4)",
            }}
          />
          {/* Horizontal bar */}
          {isMd && (
            <div
              style={{
                position: "relative",
                width: "66%",
                height: "1px",
                background: "rgba(184,164,106,0.25)",
              }}
            >
              {/* Left endpoint */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#67E8F9",
                  opacity: 0.7,
                }}
              />
              {/* Center mark */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#CC1234",
                  opacity: 0.7,
                }}
              />
              {/* Right endpoint */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translate(50%, -50%)",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#10B981",
                  opacity: 0.7,
                }}
              />
              {/* Three drops */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "1px",
                  height: "20px",
                  background: "rgba(103,232,249,0.4)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  width: "1px",
                  height: "20px",
                  background: "rgba(204,18,52,0.4)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "1px",
                  height: "20px",
                  background: "rgba(16,185,129,0.4)",
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Three identities */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
            gap: isMd ? "2px" : "1px",
            marginTop: isMd ? "0" : "2rem",
          }}
        >
          {identities.map((identity, i) => (
            <motion.div
              key={identity.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.5 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => navigate(identity.path)}
              style={{
                padding: "2.5rem",
                border: "1px solid rgba(247,244,238,0.06)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
              whileHover={{
                borderColor: identity.accent + "40",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: identity.accent,
                  opacity: 0.6,
                }}
              />

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: identity.accent,
                  marginBottom: "1.25rem",
                  opacity: 0.75,
                }}
              >
                {identity.discipline}
              </p>

              <h3
                style={{
                  fontFamily: identity.font,
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: identity.id === "spy" ? 600 : 400,
                  color: "#F7F4EE",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                  letterSpacing: identity.id === "cyb3r" ? "0.05em" : "normal",
                }}
              >
                {identity.name}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(247,244,238,0.35)",
                }}
              >
                {identity.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
