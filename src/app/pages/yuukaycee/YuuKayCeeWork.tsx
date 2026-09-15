import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Layers, Monitor, Type, Image, Lightbulb, Grid3X3 } from "lucide-react";
import { yuukayceeProjects } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";

const filters = [
  { label: "All", icon: <Grid3X3 size={11} strokeWidth={1.5} /> },
  { label: "Branding", icon: <Layers size={11} strokeWidth={1.5} /> },
  { label: "UI/UX", icon: <Monitor size={11} strokeWidth={1.5} /> },
  { label: "Typography", icon: <Type size={11} strokeWidth={1.5} /> },
  { label: "Posters", icon: <Image size={11} strokeWidth={1.5} /> },
  { label: "Concepts", icon: <Lightbulb size={11} strokeWidth={1.5} /> },
];

// Category-specific geometric SVG compositions for card covers
function CategoryCover({ category, coverColor }: { category: string; coverColor: string }) {
  const baseStyle: React.CSSProperties = {
    height: "280px",
    background: coverColor + "12",
    border: `1px solid ${coverColor}20`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    transition: "all 0.4s ease",
  };

  if (category === "Branding") {
    return (
      <div style={baseStyle} className="yk-card-cover">
        {/* Type-specimen placeholder until final artwork lands */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "4rem",
              lineHeight: 1,
              color: coverColor,
              margin: 0,
            }}
          >
            Aa
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: coverColor,
              opacity: 0.7,
              margin: "0.6rem 0 0",
            }}
          >
            Branding
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 40% 40%, ${coverColor}18 0%, transparent 65%)`,
          }}
        />
      </div>
    );
  }

  if (category === "UI/UX") {
    return (
      <div style={baseStyle} className="yk-card-cover">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" opacity={0.55}>
          <rect x="4" y="4" width="132" height="92" rx="3" stroke={coverColor} strokeWidth="0.75" />
          <line x1="4" y1="18" x2="136" y2="18" stroke={coverColor} strokeWidth="0.5" opacity={0.6} />
          <rect x="10" y="6" width="5" height="5" rx="1" fill={coverColor} opacity={0.5} />
          <rect x="18" y="6" width="5" height="5" rx="1" fill={coverColor} opacity={0.3} />
          <rect x="26" y="6" width="5" height="5" rx="1" fill={coverColor} opacity={0.2} />
          {[0,1,2,3].map((row) => (
            [0,1,2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={14 + col * 40}
                y={28 + row * 18}
                width={32}
                height={12}
                rx="2"
                fill={row === 1 && col === 1 ? coverColor : "transparent"}
                stroke={coverColor}
                strokeWidth="0.5"
                opacity={row === 1 && col === 1 ? 0.4 : 0.2}
              />
            ))
          ))}
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 60% 30%, ${coverColor}15 0%, transparent 65%)`,
          }}
        />
      </div>
    );
  }

  if (category === "Typography") {
    return (
      <div style={baseStyle} className="yk-card-cover">
        <svg width="130" height="100" viewBox="0 0 130 100" fill="none" opacity={0.55}>
          {/* Baseline */}
          <line x1="10" y1="72" x2="120" y2="72" stroke={coverColor} strokeWidth="0.75" />
          {/* x-height */}
          <line x1="10" y1="52" x2="120" y2="52" stroke={coverColor} strokeWidth="0.5" opacity={0.5} strokeDasharray="4 3" />
          {/* Cap height */}
          <line x1="10" y1="30" x2="120" y2="30" stroke={coverColor} strokeWidth="0.5" opacity={0.4} strokeDasharray="4 3" />
          {/* Descender */}
          <line x1="10" y1="86" x2="120" y2="86" stroke={coverColor} strokeWidth="0.4" opacity={0.3} strokeDasharray="3 4" />
          {/* Letter shapes: A */}
          <path d="M30 72 L42 30 L54 72" stroke={coverColor} strokeWidth="1" fill="none" />
          <line x1="33" y1="58" x2="51" y2="58" stroke={coverColor} strokeWidth="1" />
          {/* Letter shapes: g */}
          <circle cx="80" cy="58" r="12" stroke={coverColor} strokeWidth="1" fill="none" />
          <path d="M92 52 L92 82 Q92 90 80 90 Q68 90 68 84" stroke={coverColor} strokeWidth="1" fill="none" />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% 60%, ${coverColor}12 0%, transparent 65%)`,
          }}
        />
      </div>
    );
  }

  if (category === "Posters") {
    return (
      <div style={baseStyle} className="yk-card-cover">
        <svg width="100" height="130" viewBox="0 0 100 130" fill="none" opacity={0.55}>
          {/* Poster frame */}
          <rect x="8" y="8" width="84" height="114" stroke={coverColor} strokeWidth="0.75" rx="2" />
          {/* Halftone dots */}
          {[0,1,2,3,4,5].map((row) =>
            [0,1,2,3,4].map((col) => {
              const r = (row + col) % 3 === 0 ? 3.5 : (row + col) % 3 === 1 ? 2.5 : 1.5;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={22 + col * 15}
                  cy={28 + row * 14}
                  r={r}
                  fill={coverColor}
                  opacity={0.35}
                />
              );
            })
          )}
          {/* Bottom text bar */}
          <rect x="8" y="102" width="84" height="20" fill={coverColor} opacity={0.15} />
          <line x1="18" y1="110" x2="55" y2="110" stroke={coverColor} strokeWidth="1.5" />
          <line x1="18" y1="115" x2="40" y2="115" stroke={coverColor} strokeWidth="0.75" opacity={0.5} />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 30% 30%, ${coverColor}18 0%, transparent 65%)`,
          }}
        />
      </div>
    );
  }

  // Concepts — node-and-edge network
  return (
    <div style={baseStyle} className="yk-card-cover">
      <svg width="140" height="120" viewBox="0 0 140 120" fill="none" opacity={0.55}>
        {/* Edges */}
        <line x1="40" y1="60" x2="70" y2="30" stroke={coverColor} strokeWidth="0.5" opacity={0.5} />
        <line x1="40" y1="60" x2="70" y2="90" stroke={coverColor} strokeWidth="0.5" opacity={0.5} />
        <line x1="70" y1="30" x2="100" y2="50" stroke={coverColor} strokeWidth="0.5" opacity={0.5} />
        <line x1="70" y1="90" x2="100" y2="70" stroke={coverColor} strokeWidth="0.5" opacity={0.5} />
        <line x1="100" y1="50" x2="100" y2="70" stroke={coverColor} strokeWidth="0.5" opacity={0.5} />
        <line x1="70" y1="30" x2="70" y2="90" stroke={coverColor} strokeWidth="0.3" opacity={0.3} strokeDasharray="3 3" />
        {/* Nodes */}
        {[
          [40, 60, 6, 0.6],
          [70, 30, 5, 0.5],
          [70, 90, 5, 0.5],
          [100, 50, 7, 0.7],
          [100, 70, 4, 0.4],
        ].map(([cx, cy, r, op], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={coverColor} opacity={op as number} />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 60% 50%, ${coverColor}15 0%, transparent 65%)`,
        }}
      />
    </div>
  );
}

export default function YuuKayCeeWork() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  const gridCols = isDesktop ? "repeat(3, 1fr)" : isMd ? "repeat(2, 1fr)" : "1fr";

  const filtered =
    active === "All"
      ? yuukayceeProjects
      : yuukayceeProjects.filter((p) => p.category === active);

  return (
    <div
      style={{
        padding: "4rem clamp(1.25rem, 5vw, 3rem)",
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.6rem, 1.5vw, 0.65rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1rem",
            }}
          >
            Work Gallery
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
            All Projects
          </h1>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            marginBottom: "4rem",
            borderBottom: `1px solid ${theme.borderSubtle}`,
          }}
        >
          {filters.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              aria-pressed={active === label}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.62rem, 1.5vw, 0.7rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 1.25rem",
                background: "transparent",
                border: "none",
                borderBottom: active === label ? `2px solid ${theme.accent}` : "2px solid transparent",
                color: active === label ? theme.accent : theme.fgMuted,
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "-1px",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              {icon}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: "2rem",
          }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => navigate(`/project/${project.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/project/${project.id}`);
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`Open ${project.title}`}
              style={{
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <CategoryCover category={project.category} coverColor={project.coverColor} />
              <div style={{ padding: "0 0.25rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.6rem",
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
                      fontSize: "0.6rem",
                      color: theme.fgMuted,
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: theme.fg,
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(0.75rem, 1.8vw, 0.82rem)",
                    color: theme.fgMuted,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
