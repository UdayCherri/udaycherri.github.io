import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../shared/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_FONTS } from "./coreDesign";
import { usePrefersReducedMotion } from "../shared/useMediaQuery";

const links = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/work", label: "Work" },
  { to: "/profile", label: "Profile" },
  { to: "/contact", label: "Contact" },
];

const HEADER_HEIGHT = 68;

export function CoreNav() {
  const location = useLocation();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
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
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="Uday Cherri · home"
            style={{
              fontFamily: CORE_FONTS.display,
              fontSize: "1.05rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: theme.fg,
              textDecoration: "none",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              minHeight: "44px",
            }}
          >
            Uday Cherri
          </Link>

          {/* Desktop nav - centered */}
          <nav
            className="hidden lg:flex items-center gap-2"
            aria-label="Primary"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: CORE_FONTS.body,
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: active ? theme.fg : theme.fgMuted,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    padding: "0 0.85rem",
                    position: "relative",
                  }}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "0.85rem",
                      right: "0.85rem",
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
            <ThemeToggle identity="core" />
          </div>

          {/* Mobile cluster - theme toggle stays visible, menu opens the links */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle identity="core" />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="core-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                width: "44px",
                height: "44px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: theme.fg,
                  transition: "transform 0.25s ease",
                  transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: theme.fg,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: theme.fg,
                  transition: "transform 0.25s ease",
                  transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="core-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 38, background: "rgba(0,0,0,0.45)" }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="core-menu"
            id="core-mobile-menu"
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
              padding: "0.75rem clamp(1.25rem, 5vw, 2rem) 1.5rem",
              borderBottom: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              flexDirection: "column",
              maxHeight: `calc(100dvh - ${HEADER_HEIGHT}px)`,
              overflowY: "auto",
            }}
          >
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: CORE_FONTS.display,
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: active ? theme.fg : theme.fgMuted,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    minHeight: "56px",
                    padding: "0.65rem 0",
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
    </>
  );
}
