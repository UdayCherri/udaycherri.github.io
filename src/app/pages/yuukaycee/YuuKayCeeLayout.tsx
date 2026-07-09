import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/design", label: "Home" },
  { to: "/design/work", label: "Work" },
  { to: "/design/case-studies", label: "Case Studies" },
  { to: "/design/nyx-bureau", label: "NYX Bureau" },
  { to: "/design/archive", label: "Archive" },
  { to: "/design/contact", label: "Contact" },
];

function YuuKayCeeLayoutInner() {
  const location = useLocation();
  const { mode, toggle } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const auroraOpacity = mode === "dark" ? 1 : 1.6;

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Prismatic background — light refracting through a prism */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: [
            // Prismatic diagonal dispersion beam — top-left to bottom-right
            `linear-gradient(128deg, rgba(103,232,249,${0.05 * auroraOpacity}) 0%, rgba(45,212,191,${0.03 * auroraOpacity}) 18%, rgba(196,181,253,${0.025 * auroraOpacity}) 38%, rgba(244,114,182,${0.025 * auroraOpacity}) 58%, rgba(251,191,36,${0.02 * auroraOpacity}) 78%, rgba(253,186,140,${0.02 * auroraOpacity}) 100%)`,
            // Cyan primary — concentrated top-left light source
            `radial-gradient(ellipse 50% 35% at 8% 6%, rgba(103,232,249,${0.18 * auroraOpacity}) 0%, transparent 100%)`,
            // Teal refraction — upper-center
            `radial-gradient(ellipse 38% 22% at 34% 14%, rgba(45,212,191,${0.11 * auroraOpacity}) 0%, transparent 100%)`,
            // Soft lavender — center (one note among many, not dominant)
            `radial-gradient(ellipse 52% 38% at 58% 52%, rgba(196,181,253,${0.07 * auroraOpacity}) 0%, transparent 100%)`,
            // Magenta/rose — right edge refraction
            `radial-gradient(ellipse 32% 24% at 92% 38%, rgba(232,121,249,${0.09 * auroraOpacity}) 0%, transparent 100%)`,
            // Amber/gold warm — bottom-right
            `radial-gradient(ellipse 45% 28% at 78% 88%, rgba(251,191,36,${0.08 * auroraOpacity}) 0%, transparent 100%)`,
            // Rose warm — bottom-left
            `radial-gradient(ellipse 38% 24% at 14% 82%, rgba(251,113,133,${0.06 * auroraOpacity}) 0%, transparent 100%)`,
            // Gold shimmer — center-right
            `radial-gradient(ellipse 28% 18% at 72% 22%, rgba(253,186,140,${0.06 * auroraOpacity}) 0%, transparent 100%)`,
          ].join(", "),
        }}
      />

      {/* SVG noise grain texture */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.025 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="yk-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#yk-noise)" />
        </svg>
      </div>

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.5rem clamp(1rem, 4vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.borderSubtle}` : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <Link
          to="/design"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: theme.fg,
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          YuuKayCee
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(1).map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: active ? theme.accent : theme.fgMuted,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  borderBottom: active ? `1px solid ${theme.accent}` : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <ThemeToggle identity="yuukaycee" />
            <BackToCore style={{ color: theme.fgMuted }} />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: theme.fg, background: "transparent", border: "none", cursor: "pointer", padding: "0.5rem" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="yk-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 38,
              background: "rgba(0,0,0,0.5)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="yk-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 39,
              background: theme.bg,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "3rem",
              gap: "0.25rem",
            }}
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: theme.fg,
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <BackToCore style={{ color: theme.fgMuted }} />
              <ThemeToggle identity="yuukaycee" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <div style={{ paddingTop: "80px", position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function YuuKayCeeLayout() {
  return (
    <ThemeProvider identity="yuukaycee">
      <YuuKayCeeLayoutInner />
    </ThemeProvider>
  );
}
