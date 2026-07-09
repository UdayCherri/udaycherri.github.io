import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/security", label: "Home" },
  { to: "/security/research", label: "Research" },
  { to: "/security/security-projects", label: "Projects" },
  { to: "/security/ctf-archive", label: "CTF" },
  { to: "/security/blog", label: "Blog" },
  { to: "/security/contact", label: "Contact" },
];

function CyberLayoutInner() {
  const location = useLocation();
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        fontFamily: "'IBM Plex Sans', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Scan-line texture */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${theme.gridLine} 2px, ${theme.gridLine} 4px)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navigation — status bar style */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.borderSubtle}`,
          transition: "background 0.3s ease",
        }}
      >
        {/* Top status bar */}
        <div
          style={{
            padding: "0.5rem clamp(1rem, 4vw, 3rem)",
            background: `${theme.accent}0D`,
            borderBottom: `1px solid ${theme.borderSubtle}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              color: `${theme.accent}99`,
              letterSpacing: "0.1em",
            }}
          >
            CYB3R-BO1 // Research Operations
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              color: `${theme.accent}66`,
            }}
          >
            STATUS: ACTIVE
          </p>
        </div>

        {/* Main nav */}
        <div
          style={{
            padding: "1rem clamp(1rem, 4vw, 3rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/security"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: theme.fg,
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.3s ease",
            }}
          >
            CYB3R-BO1
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(1).map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "clamp(0.6rem, 1.5vw, 0.65rem)",
                    letterSpacing: "0.1em",
                    color: active ? theme.accent : theme.fgMuted,
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                    paddingBottom: active ? "1px" : "2px",
                    borderBottom: active ? `1px solid ${theme.accent}` : "none",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <ThemeToggle identity="cyb3r" />
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
        </div>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="cyber-backdrop"
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
            key="cyber-menu"
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
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: theme.fg,
                  textDecoration: "none",
                  padding: "0.75rem 0",
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <BackToCore style={{ color: theme.fgMuted }} />
              <ThemeToggle identity="cyb3r" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div style={{ paddingTop: "96px", position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default function CyberLayout() {
  return (
    <ThemeProvider identity="cyb3r">
      <CyberLayoutInner />
    </ThemeProvider>
  );
}
