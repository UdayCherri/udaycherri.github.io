import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CORE_FONTS } from "./coreDesign";

interface ArrivalScreenProps {
  onComplete: () => void;
}

/**
 * Refined arrival moment — a single quiet fade, not a staged sequence.
 * - Total visible time ~1.6s (was 4.4s), dismissible via Escape / click.
 * - Renders nothing when the user prefers reduced motion.
 * - Auto-dismisses safely even if timers are throttled.
 */
export function ArrivalScreen({ onComplete }: ArrivalScreenProps) {
  const [exiting, setExiting] = useState(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
      return;
    }
    const dismiss = setTimeout(() => setExiting(true), 1500);
    const done = setTimeout(() => onComplete(), 1900);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onComplete();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(dismiss);
      clearTimeout(done);
      window.removeEventListener("keydown", onKey);
    };
  }, [onComplete, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="arrival"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="arrival-screen"
          role="dialog"
          aria-modal="true"
          aria-label="Introduction"
          onClick={onComplete}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#131210",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.1rem",
              userSelect: "none",
              padding: "0 1.5rem",
              textAlign: "center",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: CORE_FONTS.display,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "#EDE8DC",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Uday Cherri
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: "1px",
                width: "120px",
                background: "#A68C4E",
                transformOrigin: "center",
              }}
              aria-hidden="true"
            />
          </div>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
