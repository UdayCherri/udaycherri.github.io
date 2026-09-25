import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ctfArchive } from "../../data/content";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";
import { usePrefersReducedMotion, useIsMd } from "../../components/shared/useMediaQuery";

const PAGE_SIZE = 6;

export default function CyberCTF() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);
  const reduceMotion = usePrefersReducedMotion();
  const isMd = useIsMd();
  const [page, setPage] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(ctfArchive.length / PAGE_SIZE));
  const visible = ctfArchive.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goToPage = (next: number) => {
    setPage(next);
    listRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <div style={{ padding: "4rem clamp(1.25rem, 5vw, 3rem)", minHeight: "100vh", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: theme.accent,
              opacity: 0.9,
              marginBottom: "1rem",
            }}
          >
            COMPETITION_ARCHIVE
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: theme.fg,
              letterSpacing: "-0.02em",
            }}
          >
            CTF Archive
          </h1>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
              color: theme.fgMuted,
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Competition history and notable solves. CTF is where theoretical knowledge meets operational execution under pressure.
          </p>
        </motion.div>

        <div ref={listRef} style={{ display: "grid", gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr", gap: "1.25rem", scrollMarginTop: "88px" }}>
          {visible.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.06, 0.6) }}
              style={{
                padding: "2.5rem 2rem",
                border: `1px solid ${theme.borderSubtle}`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.accent + "33";
                el.style.background = theme.accent + "03";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = theme.borderSubtle;
                el.style.background = "transparent";
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                    color: theme.fgMuted,
                    opacity: 0.8,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {event.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                      color: theme.fg,
                      lineHeight: 1.3,
                    }}
                  >
                    {event.event}
                  </h3>
                </div>
                <div
                  style={{
                    padding: "0.35rem 0.75rem",
                    border: `1px solid ${theme.accent}44`,
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: theme.accent,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.placement}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {event.categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.5rem",
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.accent,
                      opacity: 0.7,
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {event.notableSolves.map((solve) => (
                  <div key={solve} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: theme.accentSecondary,
                        opacity: 0.85,
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "clamp(0.7rem, 1.4vw, 0.75rem)",
                        color: theme.fgMuted,
                        lineHeight: 1.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {solve}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="CTF archive pages"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}
          >
            <PageButton
              label="PREV"
              disabled={page === 0}
              onClick={() => goToPage(page - 1)}
              theme={theme}
            />
            {Array.from({ length: totalPages }, (_, p) => (
              <PageButton
                key={p}
                label={String(p + 1).padStart(2, "0")}
                active={p === page}
                ariaCurrent={p === page}
                onClick={() => goToPage(p)}
                theme={theme}
              />
            ))}
            <PageButton
              label="NEXT"
              disabled={page === totalPages - 1}
              onClick={() => goToPage(page + 1)}
              theme={theme}
            />
            <span
              aria-hidden="true"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                color: theme.fgMuted,
                opacity: 0.7,
                marginLeft: "0.5rem",
              }}
            >
              {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
            </span>
          </nav>
        )}
      </div>
    </div>
  );
}

function PageButton({
  label,
  active = false,
  disabled = false,
  ariaCurrent = false,
  onClick,
  theme,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  ariaCurrent?: boolean;
  onClick: () => void;
  theme: ReturnType<typeof getIdentityTheme>;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-current={ariaCurrent ? "page" : undefined}
      onClick={onClick}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        minHeight: "44px",
        minWidth: "44px",
        padding: "0.5rem 0.9rem",
        background: active ? theme.accent + "14" : "transparent",
        border: `1px solid ${active ? theme.accent : theme.borderSubtle}`,
        color: active ? theme.accent : theme.fgMuted,
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? "default" : "pointer",
        transition: "border-color 0.2s ease, color 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}
