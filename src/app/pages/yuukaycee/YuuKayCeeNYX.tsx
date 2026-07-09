import { motion } from "motion/react";
import { nyxBureau } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsMd, useIsDesktop } from "../../components/shared/useMediaQuery";

export default function YuuKayCeeNYX() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const isMd = useIsMd();
  const isDesktop = useIsDesktop();

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      {/* Hero */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          borderBottom: `1px solid ${theme.borderSubtle}`,
          minHeight: "50vh",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 50%, ${mode === "dark" ? "rgba(103,232,249,0.05)" : "rgba(8,145,178,0.04)"} 0%, transparent 60%)`,
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1.5rem",
            }}
          >
            Creative Studio
          </motion.p>
          <motion.img
            src="/images/nyxbureau-logo.png"
            alt="NYX Bureau"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ height: "56px", width: "auto", objectFit: "contain", marginBottom: "2rem", display: "block" }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            NYX Bureau
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              lineHeight: 1.75,
              color: theme.fgMuted,
              maxWidth: "600px",
            }}
          >
            {nyxBureau.vision}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "8rem clamp(2rem, 6vw, 6rem)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "4rem",
            }}
          >
            Services
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd
                ? `repeat(${Math.min(nyxBureau.services.length, 2)}, 1fr)`
                : "1fr",
              gap: "1px",
              background: theme.borderSubtle,
            }}
          >
            {nyxBureau.services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "3rem",
                  background: theme.bg,
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.accent,
                    marginBottom: "1.5rem",
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: theme.fg,
                    marginBottom: "1rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
                    color: theme.fgMuted,
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          padding: "8rem clamp(2rem, 6vw, 6rem)",
          borderTop: `1px solid ${theme.borderSubtle}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "4rem",
            }}
          >
            Process
          </motion.p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "repeat(4, 1fr)" : isMd ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            {nyxBureau.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: theme.accent,
                    opacity: 0.2,
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </p>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: theme.fg,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                    color: theme.fgMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
