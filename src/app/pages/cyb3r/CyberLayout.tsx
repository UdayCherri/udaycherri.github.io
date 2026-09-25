import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DisciplineBrand } from "../../components/shared/DisciplineBrand";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { RouteTransition } from "../../components/shared/PageTransition";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { Menu, X } from "lucide-react";

const MAIN_BAR_HEIGHT = 64;

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
  const reduceMotion = usePrefersReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        fontFamily: "'IBM Plex Sans', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Scan-line texture */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${theme.gridLine} 2px, ${theme.gridLine} 4px)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          borderBottom: `1px solid ${theme.borderSubtle}`,
          boxShadow: scrolled ? theme.shadow : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Main nav */}
        <div
          style={{
            padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
            height: `${MAIN_BAR_HEIGHT}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            position: "relative",
          }}
        >
          {/* Brand lockup - discipline home + quiet route back to TH3 C0R3 */}
          <DisciplineBrand
            name="CYB3R-BO1"
            homePath="/security"
            nameFont="'IBM Plex Mono', monospace"
            nameWeight={600}
            nameSize="0.9rem"
            nameSpacing="0.05em"
            fg={theme.fg}
            muted={theme.fgMuted}
            accent={theme.accent}
          />

          {/* Desktop nav - centered */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {navLinks.slice(1).map(({ to, label }) => {
              const active =
                location.pathname === to || (to !== "/security" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    color: active ? theme.accent : theme.fgMuted,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    padding: "0 0.65rem",
                    position: "relative",
                  }}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "0.65rem",
                      right: "0.65rem",
                      bottom: "8px",
                      height: "2px",
                      background: theme.accent,
                      opacity: active ? 1 : 0,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop theme toggle - right */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle identity="cyb3r" />
          </div>

          {/* Mobile cluster - toggle stays visible, menu opens the links */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle identity="cyb3r" />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="cyber-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                color: theme.fg,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
              }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
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
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 38, background: "rgba(0,0,0,0.5)" }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu - anchored panel, not fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="cyber-menu"
            id="cyber-mobile-menu"
            aria-label="Mobile"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 39,
              background: theme.bg,
              borderBottom: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              flexDirection: "column",
              padding: "0.75rem clamp(1.25rem, 5vw, 2rem) 1.25rem",
              maxHeight: "calc(100dvh - 64px)",
              overflowY: "auto",
            }}
          >
            {navLinks.map(({ to, label }) => {
              const active =
                location.pathname === to || (to !== "/security" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: active ? theme.accent : theme.fg,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    minHeight: "54px",
                    padding: "0.55rem 0",
                    borderBottom: `1px solid ${theme.borderSubtle}`,
                  }}
                >
                  <span aria-hidden="true" style={{ color: theme.accent, opacity: active ? 1 : 0.4 }}>
                    &gt;
                  </span>
                  {label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Content - clears the 64px fixed bar. */}
      <div style={{ paddingTop: "68px", position: "relative", zIndex: 1 }}>
        <RouteTransition persona="cyb3r">
          <Outlet />
        </RouteTransition>
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
