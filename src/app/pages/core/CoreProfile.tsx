import { CoreNav } from "../../components/core/CoreNav";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { CORE_EYEBROW, CORE_FONTS, CORE_LAYOUT } from "../../components/core/coreDesign";
import { RouteTransition } from "../../components/shared/PageTransition";
import { useIsDesktop, usePrefersReducedMotion } from "../../components/shared/useMediaQuery";
import {
  profileAtAGlance,
  profileAbout,
  profileCurrent,
  profileBackground,
  profileInterests,
  profileLinksPrimary,
  profileLinksSecondary,
} from "../../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CoreProfile() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const reduceMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();

  // Header animates on mount; body sections reveal on scroll.
  const mount = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  const labelStyle = {
    ...CORE_EYEBROW,
    color: theme.accent,
    margin: "0 0 1.5rem",
  } as const;

  return (
    <div style={{ background: theme.bg, minHeight: "100vh", transition: "background 0.3s ease" }}>
      <a href="#main-content" className="core-skip-link">
        Skip to content
      </a>
      <CoreNav />
      <RouteTransition persona="core">
      <main id="main-content" style={{ paddingTop: "68px" }}>
        {/* Header */}
        <div
          style={{
            padding: `clamp(3.5rem, 8vw, 5.5rem) ${CORE_LAYOUT.pad} clamp(2.5rem, 5vw, 3.5rem)`,
            borderBottom: `1px solid ${theme.borderSubtle}`,
          }}
        >
          <div style={{ maxWidth: CORE_LAYOUT.maxWidth, margin: "0 auto" }}>
            <motion.p {...mount(0)} style={{ ...CORE_EYEBROW, color: theme.accent, margin: "0 0 1rem" }}>
              Profile
            </motion.p>
            <motion.h1
              {...mount(0.06)}
              style={{
                fontFamily: CORE_FONTS.display,
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 400,
                color: theme.fg,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                margin: "0 0 1rem",
                textWrap: "balance",
              }}
            >
              Uday Cherri
            </motion.h1>
            <motion.p
              {...mount(0.12)}
              style={{
                fontFamily: CORE_FONTS.body,
                fontSize: "0.95rem",
                color: theme.fgMuted,
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Designer · Developer · Security Researcher
            </motion.p>
          </div>
        </div>

        {/* Dossier grid — facts rail + narrative */}
        <div
          style={{
            maxWidth: CORE_LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `clamp(2.5rem, 5vw, 3.5rem) ${CORE_LAYOUT.pad} clamp(3rem, 6vw, 4rem)`,
            display: "grid",
            gridTemplateColumns: isDesktop ? "22rem minmax(0, 1fr)" : "1fr",
            gap: isDesktop ? "4rem" : "0",
            alignItems: "start",
          }}
        >
          {/* Facts rail — sticky on desktop */}
          <aside
            style={{
              position: isDesktop ? "sticky" : "static",
              top: isDesktop ? "calc(68px + 2rem)" : undefined,
              display: "grid",
              gap: "2.5rem",
              alignContent: "start",
              paddingBottom: isDesktop ? 0 : "2.5rem",
              borderBottom: isDesktop ? "none" : `1px solid ${theme.borderSubtle}`,
              marginBottom: isDesktop ? 0 : "2.5rem",
            }}
          >
            <motion.section {...reveal(0)} aria-label="At a glance">
              <p style={labelStyle}>At a Glance</p>
              <dl style={{ margin: 0, display: "grid" }}>
                {profileAtAGlance.map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      padding: "0.85rem 0",
                      borderTop: i === 0 ? "none" : `1px solid ${theme.borderSubtle}`,
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: theme.fgMuted,
                        margin: "0 0 0.3rem",
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontSize: "0.95rem",
                        color: theme.fg,
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {"href" in row && row.href ? (
                        <a href={row.href} style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: theme.fgMuted }}>
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.section>

            <motion.section {...reveal(0)} aria-label="Links">
              <p style={labelStyle}>Links</p>
              <ul
                aria-label="Primary profiles"
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {profileLinksPrimary.map(({ label, url }) => (
                  <li key={label}>
                    <a
                      href={url}
                      target={url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: theme.fgMuted,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.4rem",
                        minHeight: "48px",
                        width: "100%",
                        padding: "0.65rem 1rem",
                        border: `1px solid ${theme.borderSubtle}`,
                        transition: "color 0.2s ease, border-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.fg;
                        e.currentTarget.style.borderColor = theme.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = theme.fgMuted;
                        e.currentTarget.style.borderColor = theme.borderSubtle;
                      }}
                    >
                      {label}
                      <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              {profileLinksSecondary.length > 0 && (
              <ul aria-label="Secondary profiles" style={{ listStyle: "none", margin: "1.25rem 0 0", padding: 0, display: "grid", gap: "0.25rem" }}>
                {profileLinksSecondary.map(({ label, url, note }) => (
                  <li key={label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.75rem",
                        textDecoration: "none",
                        color: theme.fg,
                        padding: "0.7rem 0",
                        borderBottom: `1px solid ${theme.borderSubtle}`,
                      }}
                    >
                      <span style={{ fontFamily: CORE_FONTS.body, fontSize: "0.85rem", fontWeight: 600 }}>
                        {label}
                      </span>
                      <span style={{ fontFamily: CORE_FONTS.body, fontSize: "0.72rem", letterSpacing: "0.08em", color: theme.fgMuted }}>
                        {note}
                      </span>
                      <ArrowUpRight size={13} strokeWidth={1.75} color={theme.fgMuted} style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              )}
            </motion.section>
          </aside>

          {/* Narrative */}
          <div style={{ minWidth: 0 }}>
            <motion.section {...reveal(0)} aria-label="About" style={{ paddingBottom: "2.75rem", borderBottom: `1px solid ${theme.borderSubtle}`, marginBottom: "2.75rem" }}>
              <p style={labelStyle}>About</p>
              <p
                style={{
                  fontFamily: CORE_FONTS.body,
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: theme.fgMuted,
                  margin: 0,
                  maxWidth: "38rem",
                }}
              >
                {profileAbout}
              </p>
            </motion.section>

            <motion.section {...reveal(0)} aria-label="Current" style={{ paddingBottom: "2.75rem", borderBottom: `1px solid ${theme.borderSubtle}`, marginBottom: "2.75rem" }}>
              <p style={labelStyle}>Current</p>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {profileCurrent.map((item, i) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1.25rem",
                      padding: "0.9rem 0",
                      borderTop: `1px solid ${theme.borderSubtle}`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontVariantNumeric: "tabular-nums",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: theme.accent,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: CORE_FONTS.display,
                        fontSize: "1.15rem",
                        color: theme.fg,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.section>

            <motion.section {...reveal(0)} aria-label="Background" style={{ paddingBottom: "2.75rem", borderBottom: `1px solid ${theme.borderSubtle}`, marginBottom: "2.75rem" }}>
              <p style={labelStyle}>Background</p>
              <p
                style={{
                  fontFamily: CORE_FONTS.body,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: theme.fgMuted,
                  margin: "0 0 1.25rem",
                  maxWidth: "36rem",
                }}
              >
                {profileBackground}
              </p>
              <Link
                to="/journey"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  fontFamily: CORE_FONTS.body,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: theme.fg,
                  textDecoration: "none",
                  borderBottom: `1px solid ${theme.accent}`,
                  paddingBottom: "3px",
                }}
              >
                View Journey
                <ArrowRight size={13} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </motion.section>

            <motion.section {...reveal(0)} aria-label="Interests" style={{ paddingBottom: "2.75rem", borderBottom: `1px solid ${theme.borderSubtle}`, marginBottom: "2.75rem" }}>
              <p style={labelStyle}>Interests</p>
              <div style={{ display: "grid", gap: "1rem" }}>
                {(
                  [
                    { heading: "Professional", items: profileInterests.professional },
                    { heading: "Personal", items: profileInterests.personal },
                  ] as const
                ).map(({ heading, items }) => (
                  <div key={heading} style={{ display: "flex", gap: "1.25rem", alignItems: "baseline", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: CORE_FONTS.body,
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: theme.fgMuted,
                        width: "7rem",
                        flexShrink: 0,
                      }}
                    >
                      {heading}
                    </span>
                    <span style={{ fontFamily: CORE_FONTS.body, fontSize: "0.95rem", color: theme.fg }}>
                      {items.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section {...reveal(0)} aria-label="Resume">
              <p style={labelStyle}>Resume</p>
              <div
                style={{
                  border: `1px solid ${theme.borderSubtle}`,
                  background: theme.surface,
                  boxShadow: theme.shadow,
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                    border: `1px solid ${theme.borderSubtle}`,
                    borderRadius: "50%",
                  }}
                >
                  <FileText size={17} strokeWidth={1.75} color={theme.accent} />
                </span>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <p style={{ fontFamily: CORE_FONTS.display, fontSize: "1.2rem", color: theme.fg, margin: "0 0 0.3rem" }}>
                    Uday Cherri · Resume
                  </p>
                  <p style={{ fontFamily: CORE_FONTS.body, fontSize: "0.85rem", color: theme.fgMuted, margin: 0, lineHeight: 1.6 }}>
                    Experience, education, and selected work in one page.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "48px",
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: theme.bg,
                      background: theme.fg,
                      textDecoration: "none",
                      padding: "0.7rem 1.4rem",
                    }}
                  >
                    View Resume
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "48px",
                      fontFamily: CORE_FONTS.body,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: theme.fg,
                      background: "transparent",
                      border: `1px solid ${theme.borderSubtle}`,
                      textDecoration: "none",
                      padding: "0.7rem 1.4rem",
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      </RouteTransition>
    </div>
  );
}
