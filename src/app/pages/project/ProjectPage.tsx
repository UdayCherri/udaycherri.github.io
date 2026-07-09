import { useParams, useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { yuukayceeProjects, spyProjects, cyberResearch, securityProjects } from "../../data/content";
import type { Project } from "../../data/content";
import { useIsDesktop } from "../../components/shared/useMediaQuery";

const allProjects: Project[] = [
  ...yuukayceeProjects,
  ...spyProjects,
  ...(cyberResearch.map((r) => ({
    id: r.id,
    identity: "cyb3r" as const,
    title: r.title,
    subtitle: r.subtitle,
    category: "Research",
    year: r.year,
    tags: r.tags,
    overview: r.summary,
    problem: "",
    approach: "",
    process: r.findings,
    outcome: "",
    lessons: "",
    featured: false,
    coverColor: r.coverColor,
  }))),
  ...(securityProjects.map((p) => ({
    id: p.id,
    identity: "cyb3r" as const,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    year: p.year,
    tags: p.tags,
    overview: p.description,
    problem: "",
    approach: "",
    process: [],
    outcome: "",
    lessons: "",
    featured: false,
    coverColor: p.coverColor,
  }))),
];

const identityThemes = {
  yuukaycee: {
    bg: "#080A12",
    fg: "#F0EEF8",
    accent: "#67E8F9",
    muted: "rgba(240,238,248,0.45)",
    border: "rgba(103,232,249,0.1)",
    headlineFont: "'Playfair Display', serif",
    bodyFont: "'DM Sans', sans-serif",
    monoFont: "'DM Sans', sans-serif",
    label: "YuuKayCee",
    backPath: "/design",
  },
  spy: {
    bg: "#080C18",
    fg: "#F0EEE5",
    accent: "#CC1234",
    muted: "rgba(240,238,229,0.4)",
    border: "rgba(204,18,52,0.1)",
    headlineFont: "'Space Grotesk', sans-serif",
    bodyFont: "'Space Grotesk', sans-serif",
    monoFont: "'JetBrains Mono', monospace",
    label: "Spy D. Veloper",
    backPath: "/development",
  },
  cyb3r: {
    bg: "#0F1318",
    fg: "#E2EAF0",
    accent: "#10B981",
    muted: "rgba(226,234,240,0.4)",
    border: "rgba(16,185,129,0.1)",
    headlineFont: "'IBM Plex Mono', monospace",
    bodyFont: "'IBM Plex Sans', sans-serif",
    monoFont: "'IBM Plex Mono', monospace",
    label: "CYB3R-BO1",
    backPath: "/security",
  },
  core: {
    bg: "#F7F4EE",
    fg: "#1C1C1C",
    accent: "#B8A46A",
    muted: "#6B6B6B",
    border: "rgba(28,28,28,0.08)",
    headlineFont: "'Cormorant Garamond', serif",
    bodyFont: "'Inter', sans-serif",
    monoFont: "'Inter', sans-serif",
    label: "Uday Cherri",
    backPath: "/",
  },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F7F4EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
            color: "#1C1C1C",
          }}
        >
          Project not found
        </p>
        <Link
          to="/"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6B6B6B",
            textDecoration: "none",
          }}
        >
          Return home
        </Link>
      </div>
    );
  }

  const theme = identityThemes[project.identity];

  return (
    <div style={{ background: theme.bg, minHeight: "100vh", color: theme.fg }}>
      {/* Top bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.25rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: theme.bg + "e8",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <button
          onClick={() => navigate(theme.backPath)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: theme.bodyFont,
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: theme.muted,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = theme.muted)}
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          {theme.label}
        </button>
        <p
          style={{
            fontFamily: theme.bodyFont,
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: theme.accent,
          }}
        >
          {project.category} · {project.year}
        </p>
      </div>

      {/* Cover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          paddingTop: "80px",
          minHeight: "60vh",
          background: project.coverColor + "18",
          display: "flex",
          alignItems: "flex-end",
          padding: "80px clamp(2rem, 8vw, 8rem) 5rem",
          borderBottom: `1px solid ${theme.border}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.cover && (
          <img
            src={project.cover}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: project.cover
              ? `linear-gradient(to top, ${theme.bg} 0%, ${theme.bg}99 35%, transparent 100%)`
              : `radial-gradient(ellipse at 30% 40%, ${project.coverColor}20 0%, transparent 60%)`,
          }}
        />
        <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1.5rem",
            }}
          >
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: theme.headlineFont,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: project.identity === "spy" ? 700 : 400,
              color: theme.fg,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              letterSpacing: project.identity === "spy" ? "-0.02em" : "0",
              textTransform: project.identity === "spy" ? "uppercase" : "none",
            }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "1.1rem",
              color: theme.muted,
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            {project.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2rem" }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: theme.monoFont,
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  padding: "0.3rem 0.75rem",
                  border: `1px solid ${theme.accent}30`,
                  color: theme.accent,
                  opacity: 0.7,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* External links */}
          {(project.github || project.website) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: theme.monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: theme.fg,
                    textDecoration: "none",
                    padding: "0.6rem 1.1rem",
                    border: `1px solid ${theme.accent}`,
                  }}
                >
                  Source <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: theme.monoFont,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: theme.bg,
                    background: theme.accent,
                    textDecoration: "none",
                    padding: "0.6rem 1.1rem",
                    border: `1px solid ${theme.accent}`,
                  }}
                >
                  Live <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Content sections */}
      <div style={{ padding: "0 clamp(2rem, 8vw, 8rem)", maxWidth: "900px", margin: "0 auto" }}>
        {/* Overview */}
        <section style={{ padding: "6rem 0", borderBottom: `1px solid ${theme.border}` }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "2rem",
            }}
          >
            Overview
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: theme.headlineFont,
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              fontWeight: project.identity === "spy" ? 600 : 300,
              color: theme.fg,
              lineHeight: 1.4,
              textTransform: project.identity === "spy" ? "uppercase" : "none",
            }}
          >
            {project.overview}
          </motion.p>
        </section>

        {/* Problem */}
        {project.problem && (
        <section style={{ padding: "6rem 0", borderBottom: `1px solid ${theme.border}` }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "200px 1fr" : "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <p
              style={{
                fontFamily: theme.bodyFont,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: theme.accent,
                paddingTop: "0.4rem",
              }}
            >
              Problem
            </p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: theme.bodyFont,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: theme.muted,
              }}
            >
              {project.problem}
            </motion.p>
          </div>
        </section>
        )}

        {/* Approach */}
        {project.approach && (
        <section style={{ padding: "6rem 0", borderBottom: `1px solid ${theme.border}` }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "200px 1fr" : "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <p
              style={{
                fontFamily: theme.bodyFont,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: theme.accent,
                paddingTop: "0.4rem",
              }}
            >
              Approach
            </p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: theme.bodyFont,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: theme.muted,
              }}
            >
              {project.approach}
            </motion.p>
          </div>
        </section>
        )}

        {/* Process */}
        {project.process.length > 0 && (
        <section style={{ padding: "6rem 0", borderBottom: `1px solid ${theme.border}` }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "3rem",
            }}
          >
            Process
          </motion.p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  display: "flex",
                  gap: "1.75rem",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                {/* Step indicator column */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  {/* Numbered circle */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: `1px solid ${theme.accent}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: theme.bg,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: theme.monoFont,
                        fontSize: "0.6rem",
                        color: theme.accent,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Connecting line (not on last step) */}
                  {i < project.process.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "40px",
                        background: `${theme.accent}30`,
                        marginTop: "4px",
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div style={{ paddingBottom: i < project.process.length - 1 ? "2rem" : 0, paddingTop: "4px" }}>
                  <p
                    style={{
                      fontFamily: theme.bodyFont,
                      fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                      lineHeight: 1.6,
                      color: theme.muted,
                    }}
                  >
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        )}

        {/* Outcome */}
        {project.outcome && (
        <section style={{ padding: "6rem 0", borderBottom: `1px solid ${theme.border}` }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "200px 1fr" : "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <p
              style={{
                fontFamily: theme.bodyFont,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: theme.accent,
                paddingTop: "0.4rem",
              }}
            >
              Outcome
            </p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: theme.headlineFont,
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: project.identity === "spy" ? 600 : 300,
                color: theme.fg,
                lineHeight: 1.5,
                textTransform: project.identity === "spy" ? "uppercase" : "none",
              }}
            >
              {project.outcome}
            </motion.p>
          </div>
        </section>
        )}

        {/* Lessons */}
        {project.lessons && (
          <section style={{ padding: "6rem 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isDesktop ? "200px 1fr" : "1fr",
                gap: "4rem",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontFamily: theme.bodyFont,
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  paddingTop: "0.4rem",
                }}
              >
                Lessons Learned
              </p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: theme.bodyFont,
                  fontSize: "1rem",
                  fontStyle: project.identity === "yuukaycee" ? "italic" : "normal",
                  lineHeight: 1.75,
                  color: theme.muted,
                }}
              >
                {project.lessons}
              </motion.p>
            </div>
          </section>
        )}

        {/* Back CTA */}
        <div
          style={{
            padding: "4rem 0 8rem",
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <button
            onClick={() => navigate(theme.backPath)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: theme.bodyFont,
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: theme.muted,
              background: "transparent",
              border: `1px solid ${theme.border}`,
              padding: "1rem 2rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent;
              e.currentTarget.style.color = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.border;
              e.currentTarget.style.color = theme.muted;
            }}
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to {theme.label}
          </button>
        </div>
      </div>
    </div>
  );
}
