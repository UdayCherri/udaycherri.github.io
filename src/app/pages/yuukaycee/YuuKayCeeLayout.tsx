import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DisciplineBrand } from "../../components/shared/DisciplineBrand";
import { ThemeToggle } from "../../components/shared/ThemeToggle";
import { RouteTransition } from "../../components/shared/PageTransition";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import { Menu, X } from "lucide-react";

const HEADER_HEIGHT = 72;

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
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);
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

  const auroraOpacity = mode === "dark" ? 1 : 1.2;

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        color: theme.fg,
        position: "relative",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Prismatic background - cyan light refracting through a prism */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: [
            // Cyan dispersion beam - top-left to bottom-right, bright to deep
            `linear-gradient(128deg, rgba(103,232,249,${0.05 * auroraOpacity}) 0%, rgba(45,212,191,${0.03 * auroraOpacity}) 18%, rgba(165,243,252,${0.025 * auroraOpacity}) 38%, rgba(34,211,238,${0.025 * auroraOpacity}) 58%, rgba(14,116,144,${0.02 * auroraOpacity}) 78%, rgba(21,94,117,${0.02 * auroraOpacity}) 100%)`,
            // Cyan primary - concentrated top-left light source
            `radial-gradient(ellipse 50% 35% at 8% 6%, rgba(103,232,249,${0.18 * auroraOpacity}) 0%, transparent 100%)`,
            // Teal refraction - upper-center
            `radial-gradient(ellipse 38% 22% at 34% 14%, rgba(45,212,191,${0.11 * auroraOpacity}) 0%, transparent 100%)`,
            // Ice glow - center (one note among many, not dominant)
            `radial-gradient(ellipse 52% 38% at 58% 52%, rgba(165,243,252,${0.07 * auroraOpacity}) 0%, transparent 100%)`,
            // Bright cyan - right edge refraction
            `radial-gradient(ellipse 32% 24% at 92% 38%, rgba(34,211,238,${0.09 * auroraOpacity}) 0%, transparent 100%)`,
            // Deep teal - bottom-right
            `radial-gradient(ellipse 45% 28% at 78% 88%, rgba(15,118,110,${0.08 * auroraOpacity}) 0%, transparent 100%)`,
            // Deep cyan - bottom-left
            `radial-gradient(ellipse 38% 24% at 14% 82%, rgba(14,116,144,${0.06 * auroraOpacity}) 0%, transparent 100%)`,
            // Pale shimmer - center-right
            `radial-gradient(ellipse 28% 18% at 72% 22%, rgba(207,250,254,${0.06 * auroraOpacity}) 0%, transparent 100%)`,
          ].join(", "),
        }}
      />

      {/* SVG noise grain texture */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.025 }} aria-hidden="true">
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
        initial={reduceMotion ? false : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.borderSubtle}` : "1px solid transparent",
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
          {/* Brand lockup - discipline home + quiet route back to TH3 C0R3 */}
          <DisciplineBrand
            name="YuuKayCee"
            homePath="/design"
            nameFont="'Playfair Display', serif"
            nameWeight={500}
            nameSize="1.1rem"
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
                location.pathname === to || (to !== "/design" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active ? theme.accent : theme.fgMuted,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    padding: "0 0.7rem",
                    position: "relative",
                  }}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "0.7rem",
                      right: "0.7rem",
                      bottom: "8px",
                      height: "2px",
                      background: theme.accent,
                      opacity: active ? 1 : 0,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop theme toggle - right */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle identity="yuukaycee" />
          </div>

          {/* Mobile cluster - toggle stays visible, menu opens the links */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle identity="yuukaycee" />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="yk-mobile-menu"
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
            key="yk-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 38,
              background: "rgba(0,0,0,0.5)",
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu - anchored panel, not fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="yk-menu"
            id="yk-mobile-menu"
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
                location.pathname === to || (to !== "/design" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: active ? theme.accent : theme.fg,
                    textDecoration: "none",
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
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
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

      {/* Page content */}
      <div style={{ paddingTop: `${HEADER_HEIGHT + 8}px`, position: "relative", zIndex: 1 }}>
        <RouteTransition persona="yuukaycee">
          <Outlet />
        </RouteTransition>
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
