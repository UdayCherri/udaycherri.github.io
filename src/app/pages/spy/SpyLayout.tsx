import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/development", label: "Home" },
  { to: "/development/projects", label: "Projects" },
  { to: "/development/systems", label: "Systems" },
  { to: "/development/experiments", label: "Experiments" },
  { to: "/development/open-source", label: "Open Source" },
  { to: "/development/blog", label: "Blog" },
  { to: "/development/contact", label: "Contact" },
];

function SpyLayoutInner() {
  const location = useLocation();
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
          transition: "background-image 0.4s ease",
        }}
      />

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.25rem clamp(1rem, 4vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? theme.borderSubtle : "transparent"}`,
          transition: "all 0.3s ease",
        }}
      >
        <Link
          to="/development"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: theme.fg,
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
          }}
        >
          Spy D. Veloper
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(1).map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
                  fontWeight: active ? 500 : 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: active ? theme.accent : theme.fgMuted,
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  borderBottom: active ? `1px solid ${theme.accent}` : "none",
                  paddingBottom: active ? "1px" : "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <ThemeToggle identity="spy" />
            <BackToCore style={{ color: theme.fgMuted }} />
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: theme.fg, background: "transparent", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="spy-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 38, background: "rgba(0,0,0,0.5)" }}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="spy-menu"
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
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: theme.fg,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "0.75rem 0",
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <BackToCore style={{ color: theme.fgMuted }} />
              <ThemeToggle identity="spy" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div style={{ paddingTop: "72px", position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function SpyLayout() {
  return (
    <ThemeProvider identity="spy">
      <SpyLayoutInner />
    </ThemeProvider>
  );
}
