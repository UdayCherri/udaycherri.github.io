import { motion } from "motion/react";
import { yuukayceeProjects } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsMd } from "../../components/shared/useMediaQuery";

const archive = yuukayceeProjects.filter((p) => !p.featured);

export default function YuuKayCeeArchive() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const isMd = useIsMd();

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "6rem" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1rem",
            }}
          >
            Archive
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: theme.fg,
              lineHeight: 1.1,
            }}
          >
            Creative Explorations
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
              color: theme.fgMuted,
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Work that isn't in the main portfolio. Experiments, early directions, and explorations that informed what came after.
          </p>
        </motion.div>

        {/* Archive list */}
        <div>
          {archive.length === 0 ? (
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: theme.fgMuted,
                lineHeight: 1.7,
                padding: "1.75rem 0",
                borderBottom: `1px solid ${theme.borderSubtle}`,
              }}
            >
              The archive is being organized. Check back soon.
            </p>
          ) : (
          archive.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: isMd ? "grid" : "flex",
                gridTemplateColumns: isMd ? "60px 1fr 80px" : undefined,
                flexDirection: isMd ? undefined : "column",
                gap: isMd ? "2rem" : "0.5rem",
                alignItems: isMd ? "center" : "flex-start",
                padding: "1.75rem 0",
                borderBottom: `1px solid ${theme.borderSubtle}`,
                cursor: "default",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: theme.fgMuted,
                  opacity: 0.65,
                }}
              >
                {project.year}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: theme.fg,
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)",
                    color: theme.fgMuted,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: project.coverColor,
                  textAlign: "right",
                }}
              >
                {project.category}
              </span>
            </motion.div>
          ))
          )}
        </div>
      </div>
    </div>
  );
}
