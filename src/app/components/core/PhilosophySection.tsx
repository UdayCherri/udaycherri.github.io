import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export function PhilosophySection() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <section
      style={{
        padding: "6rem clamp(2rem, 8vw, 8rem)",
        background: theme.bg,
        borderTop: `1px solid ${theme.borderSubtle}`,
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "40px",
              height: "1px",
              background: theme.accent,
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 300,
              color: theme.fg,
              lineHeight: 1.25,
              maxWidth: "680px",
              letterSpacing: "-0.01em",
            }}
          >
            Carpe diem.
            <br />
            <span style={{ color: theme.fgMuted, fontStyle: "italic" }}>
              Seize the day.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
