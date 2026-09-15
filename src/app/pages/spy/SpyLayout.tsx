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

const HEADER_HEIGHT = 68;

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
  const reduceMotion = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        fontFamily: "'Space Grotesk', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? theme.borderSubtle : "transparent"}`,
          boxShadow: scrolled ? theme.shadow : "none",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
            height: `${HEADER_HEIGHT}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            position: "relative",
          }}
        >
          {/* Brand lockup — discipline home + quiet route back to The Core */}
          <DisciplineBrand
            name="Spy D. Veloper"
            homePath="/development"
            nameFont="'Space Grotesk', sans-serif"
            nameWeight={700}
            nameSize="0.9rem"
            nameSpacing="0.08em"
            uppercase
            fg={theme.fg}
            muted={theme.fgMuted}
            accent={theme.accent}
          />

          {/* Desktop nav — centered */}
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
                location.pathname === to || (to !== "/development" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: active ? 600 : 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active ? theme.accent : theme.fgMuted,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    padding: "0 0.5rem",
                    position: "relative",
                  }}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "0.5rem",
                      right: "0.5rem",
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

          {/* Desktop theme toggle — right */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle identity="spy" />
          </div>

          {/* Mobile cluster — toggle stays visible, menu opens the links */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle identity="spy" />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="spy-mobile-menu"
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
            key="spy-backdrop"
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

      {/* Mobile menu — anchored panel, not fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="spy-menu"
            id="spy-mobile-menu"
            aria-label="Mobile"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: `${HEADER_HEIGHT}px`,
              left: 0,
              right: 0,
              zIndex: 39,
              background: theme.bg,
              borderBottom: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              flexDirection: "column",
              padding: "0.75rem clamp(1.25rem, 5vw, 2rem) 1.25rem",
              maxHeight: `calc(100dvh - ${HEADER_HEIGHT}px)`,
              overflowY: "auto",
            }}
          >
            {navLinks.map(({ to, label }) => {
              const active =
                location.pathname === to || (to !== "/development" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: active ? 700 : 600,
                    color: active ? theme.accent : theme.fg,
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    minHeight: "56px",
                    padding: "0.6rem 0",
                    borderBottom: `1px solid ${theme.borderSubtle}`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      background: theme.accent,
                      opacity: active ? 1 : 0,
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Content */}
      <div style={{ paddingTop: `${HEADER_HEIGHT + 4}px`, position: "relative", zIndex: 1 }}>
        <RouteTransition persona="spy">
          <Outlet />
        </RouteTransition>
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
