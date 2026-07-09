import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useIsMd } from "../shared/useMediaQuery";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const identities = [
  {
    id: "yuukaycee",
    path: "/design",
    name: "YuuKayCee",
    archetype: "The Architect",
    motto: "Designing connections between people, ideas, and worlds.",
    discipline: "Design",
    bg: "#080A12",
    accent: "#67E8F9",
    secondary: "#FDBA8C",
    font: "'Playfair Display', serif",
    description: "Brand identity, UI/UX, editorial design, and creative direction.",
    preview: [
      { label: "Brand Identity" },
      { label: "UI/UX Systems" },
      { label: "Typography" },
      { label: "Art Direction" },
    ],
  },
  {
    id: "spy",
    path: "/development",
    name: "Spy D. Veloper",
    archetype: "The Builder",
    motto: "Creating systems that move the future forward.",
    discipline: "Development",
    bg: "#080C18",
    accent: "#CC1234",
    secondary: "#F0EEE5",
    font: "'Space Grotesk', sans-serif",
    description: "Distributed systems, infrastructure, open source, and language design.",
    preview: [
      { label: "Distributed Systems" },
      { label: "Open Source" },
      { label: "Infrastructure" },
      { label: "Language Design" },
    ],
  },
  {
    id: "cyb3r",
    path: "/security",
    name: "CYB3R-BO1",
    archetype: "The Researcher",
    motto: "Security begins with understanding.",
    discipline: "Security",
    bg: "#0F1318",
    accent: "#10B981",
    secondary: "#2DD4BF",
    font: "'IBM Plex Mono', monospace",
    description: "Vulnerability research, CTF, security tooling, and systems analysis.",
    preview: [
      { label: "Vuln Research" },
      { label: "CTF Competitions" },
      { label: "Security Tools" },
      { label: "Systems Analysis" },
    ],
  },
];

export function IdentityDiscovery() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);
  const isMd = useIsMd();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      style={{
        background: theme.bg,
        transition: "background 0.4s ease",
      }}
    >
      {/* Transition text — bridges from understanding to choosing */}
      <div
        style={{
          padding: "8rem clamp(2rem, 8vw, 8rem) 6rem",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "1fr 1fr" : "1fr",
              gap: isMd ? "6rem" : "2rem",
              alignItems: "end",
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
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  marginBottom: "1rem",
                }}
              >
                Three Worlds
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: theme.fg,
                  lineHeight: 1.15,
                }}
              >
                Choose your direction
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "440px",
              }}
            >
              Each identity is a complete world — its own aesthetic, its own discipline, its own body of work. Enter the one that speaks to you.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Identity panels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
          minHeight: isMd ? "75vh" : "auto",
        }}
      >
        {identities.map((identity, i) => (
          <motion.div
            key={identity.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(identity.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(identity.path)}
            style={{
              position: "relative",
              background: hovered === identity.id ? identity.bg : "#141414",
              padding: isMd ? "3.5rem 2.5rem 4.5rem" : "3rem 2rem 3.5rem",
              cursor: "pointer",
              transition: "background 0.5s ease",
              overflow: "hidden",
              borderRight: isMd && i < 2 ? "1px solid rgba(247,244,238,0.04)" : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: isMd ? "auto" : "440px",
            }}
          >
            {/* Accent line — top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: identity.accent,
                opacity: hovered === identity.id ? 0.8 : 0.25,
                transition: "opacity 0.4s ease",
              }}
            />

            {/* Ambient glow on hover */}
            <motion.div
              animate={{
                opacity: hovered === identity.id ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "200px",
                background: `radial-gradient(ellipse at 50% 0%, ${identity.accent}14 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Content */}
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: identity.accent,
                  marginBottom: "1.75rem",
                  opacity: hovered === identity.id ? 1 : 0.5,
                  transition: "opacity 0.3s ease",
                }}
              >
                {identity.discipline}
              </p>

              <h3
                style={{
                  fontFamily: identity.font,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: identity.id === "spy" ? 600 : 400,
                  color: "#F7F4EE",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                  letterSpacing: identity.id === "cyb3r" ? "0.05em" : "normal",
                }}
              >
                {identity.name}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: identity.secondary,
                  marginBottom: "2rem",
                  opacity: 0.55,
                }}
              >
                {identity.archetype}
              </p>

              <motion.p
                animate={{
                  opacity: hovered === identity.id ? 1 : 0.45,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#F7F4EE",
                  maxWidth: "300px",
                  marginBottom: "2rem",
                }}
              >
                "{identity.motto}"
              </motion.p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  color: "rgba(247,244,238,0.4)",
                  maxWidth: "280px",
                  transition: "color 0.3s ease",
                }}
              >
                {identity.description}
              </p>
            </div>

            {/* Bottom section */}
            <div style={{ position: "relative", marginTop: "2.5rem" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {identity.preview.map((item) => (
                  <span
                    key={item.label}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.75rem",
                      border: `1px solid ${hovered === identity.id ? identity.accent + "60" : "rgba(247,244,238,0.1)"}`,
                      color: hovered === identity.id ? identity.accent : "rgba(247,244,238,0.3)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>

              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: hovered === identity.id ? identity.accent : "rgba(247,244,238,0.4)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  padding: 0,
                }}
              >
                Enter
                <motion.span
                  animate={{ x: hovered === identity.id ? 4 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ArrowRight size={12} strokeWidth={1.5} />
                </motion.span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
