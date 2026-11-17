import { Link } from "react-router";

interface EmptySectionProps {
  title: string;
  body: string;
  contactPath: string;
  contactLabel?: string;
  fontFamily?: string;
  monoFamily?: string;
  accent?: string;
  muted?: string;
}

/**
 * Honest empty state for sections without published work yet.
 * Intentionally avoids placeholder phrasing ("to be updated", "landing soon",
 * "nothing here yet"). Communicates status + what will appear + where to reach out.
 */
export function EmptySection({
  title,
  body,
  contactPath,
  contactLabel = "Get in touch",
  fontFamily = "inherit",
  monoFamily,
  accent,
  muted,
}: EmptySectionProps) {
  const labelFont = monoFamily ?? fontFamily;
  return (
    <div
      style={{
        gridColumn: "1 / -1",
        padding: "2rem",
        border: "1px dashed currentColor",
        opacity: 0.95,
      }}
    >
      <h2
        style={{
          fontFamily: labelFont,
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: muted,
          margin: "0 0 0.75rem",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily,
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: muted,
          margin: "0 0 1.25rem",
          maxWidth: "36rem",
        }}
      >
        {body}
      </p>
      <Link
        to={contactPath}
        style={{
          fontFamily: labelFont,
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: accent ?? muted,
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        {contactLabel}
      </Link>
    </div>
  );
}
