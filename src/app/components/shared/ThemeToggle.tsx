import { Sun, Moon, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { useTheme, type ThemeIdentity } from "../../contexts/ThemeContext";

function baseHitArea(): CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "44px",
    minHeight: "44px",
    background: "transparent",
    cursor: "pointer",
    flexShrink: 0,
  };
}

export function ThemeToggle({ identity }: { identity: ThemeIdentity }) {
  const { mode, toggle } = useTheme();
  const isDark = mode === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  if (identity === "yuukaycee") {
    return (
      <button
        type="button"
        onClick={toggle}
        title={label}
        aria-label={label}
        aria-pressed={isDark}
        style={{
          ...baseHitArea(),
          border: `1px solid ${isDark ? "rgba(103,232,249,0.3)" : "rgba(14,116,144,0.3)"}`,
          borderRadius: "999px",
          color: isDark ? "#67E8F9" : "#0E7490",
          transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
          padding: "0.5rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isDark ? "rgba(103,232,249,0.1)" : "rgba(14,116,144,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <Sparkles size={14} strokeWidth={1.5} />
      </button>
    );
  }

  if (identity === "spy") {
    return (
      <button
        type="button"
        onClick={toggle}
        title={label}
        aria-label={label}
        aria-pressed={isDark}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.08em",
          color: isDark ? "#E5485D" : "#CC1234",
          background: isDark ? "rgba(229,72,93,0.08)" : "rgba(204,18,52,0.06)",
          border: `1px solid ${isDark ? "rgba(229,72,93,0.4)" : "rgba(204,18,52,0.35)"}`,
          padding: "0.5rem 0.75rem",
          minHeight: "44px",
          cursor: "pointer",
          transition: "background 0.15s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isDark ? "rgba(229,72,93,0.16)" : "rgba(204,18,52,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isDark ? "rgba(229,72,93,0.08)" : "rgba(204,18,52,0.06)";
        }}
      >
        {isDark ? "[DARK]" : "[LITE]"}
      </button>
    );
  }

  if (identity === "cyb3r") {
    return (
      <button
        type="button"
        onClick={toggle}
        title={label}
        aria-label={label}
        aria-pressed={isDark}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.12em",
          color: isDark ? "#10B981" : "#047857",
          background: isDark ? "rgba(16,185,129,0.08)" : "rgba(4,120,87,0.07)",
          border: `1px solid ${isDark ? "rgba(16,185,129,0.35)" : "rgba(4,120,87,0.3)"}`,
          borderRadius: "3px",
          padding: "0.5rem 0.75rem",
          minHeight: "44px",
          cursor: "pointer",
          transition: "background 0.15s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isDark ? "rgba(16,185,129,0.16)" : "rgba(4,120,87,0.13)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isDark ? "rgba(16,185,129,0.08)" : "rgba(4,120,87,0.07)";
        }}
      >
        {isDark ? "0x1" : "0x0"}
      </button>
    );
  }

  // core
  return (
    <button
      type="button"
      onClick={toggle}
      title={label}
      aria-label={label}
      aria-pressed={isDark}
      style={{
        ...baseHitArea(),
        border: "1px solid transparent",
        borderRadius: "999px",
        color: isDark ? "rgba(237,232,220,0.75)" : "rgba(27,26,24,0.65)",
        transition: "color 0.2s ease, border-color 0.2s ease",
        padding: "0.5rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = isDark ? "#D2B87A" : "#7A5F26";
        e.currentTarget.style.borderColor = isDark
          ? "rgba(210,184,122,0.4)"
          : "rgba(122,95,38,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isDark
          ? "rgba(237,232,220,0.75)"
          : "rgba(27,26,24,0.65)";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      {isDark ? (
        <Sun size={16} strokeWidth={1.5} />
      ) : (
        <Moon size={16} strokeWidth={1.5} />
      )}
    </button>
  );
}
