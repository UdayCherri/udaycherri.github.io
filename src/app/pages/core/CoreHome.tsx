import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { udayProfile } from "../../data/content";
import { useIsDesktop } from "../../components/shared/useMediaQuery";
import { PhilosophySection } from "../../components/core/PhilosophySection";
import { JourneyTimeline } from "../../components/core/JourneyTimeline";
import { FeaturedWork } from "../../components/core/FeaturedWork";
import { IdentityDiscovery } from "../../components/core/IdentityDiscovery";
import { CurrentFocus } from "../../components/core/CurrentFocus";
import { IdentityTree } from "../../components/core/IdentityTree";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CoreHome() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const isDesktop = useIsDesktop();

  return (
    <div style={{ background: theme.bg, transition: "background 0.4s ease, color 0.4s ease" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(2rem, 8vw, 8rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: theme.borderSubtle,
            transformOrigin: "left",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr auto" : "1fr",
            gap: isDesktop ? "5rem" : "3rem",
            alignItems: "center",
            maxWidth: "1200px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: "2.5rem",
              }}
            >
              {udayProfile.archetype}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 300,
                color: theme.fg,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                marginBottom: "2.5rem",
              }}
            >
              {udayProfile.name}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "60px",
                height: "1px",
                background: theme.accent,
                marginBottom: "2.5rem",
                transformOrigin: "left",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                lineHeight: 1.75,
                color: theme.fgMuted,
                maxWidth: "560px",
              }}
            >
              {udayProfile.introduction}
            </motion.p>
          </div>

          {/* Portrait — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                width: "280px",
                aspectRatio: "3/4",
                overflow: "hidden",
                border: `1px solid ${theme.borderSubtle}`,
                flexShrink: 0,
              }}
            >
              <img
                src="/images/core-profile.jpg"
                alt="Professional founder portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  filter: mode === "dark" ? "brightness(0.82) saturate(0.85)" : "brightness(0.94) saturate(0.88)",
                }}
              />
              {/* Subtle gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: mode === "dark"
                    ? "linear-gradient(to top, rgba(17,17,16,0.7) 0%, transparent 55%)"
                    : "linear-gradient(to top, rgba(247,244,238,0.65) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              {/* Accent edge */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "1px",
                  background: `linear-gradient(to bottom, ${theme.accent}, transparent)`,
                  opacity: 0.5,
                }}
              />
              {/* Name label */}
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: theme.accent, marginBottom: "0.25rem", opacity: 0.8 }}>
                  The Core
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 400, color: mode === "dark" ? "rgba(237,232,222,0.95)" : "rgba(28,28,28,0.9)" }}>
                  Uday Cherri
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "clamp(2rem, 8vw, 8rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: theme.fgMuted,
            }}
          >
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={14} strokeWidth={1.5} color={theme.fgMuted} />
          </motion.div>
        </motion.div>
      </section>

      {/* Manifesto statement */}
      <PhilosophySection />

      {/* Evidence milestones */}
      <JourneyTimeline />

      {/* Selected Work */}
      <FeaturedWork />

      {/* Current Focus */}
      <CurrentFocus />

      {/* Identity Relationship */}
      <IdentityTree />

      {/* Identity Discovery */}
      <IdentityDiscovery />

      {/* Footer */}
      <div
        style={{
          padding: "5rem clamp(2rem, 8vw, 8rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color: theme.fgMuted,
            fontStyle: "italic",
          }}
        >
          {udayProfile.motto}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: theme.fgMuted,
            opacity: 0.6,
          }}
        >
          2026
        </p>
      </div>
    </div>
  );
}
