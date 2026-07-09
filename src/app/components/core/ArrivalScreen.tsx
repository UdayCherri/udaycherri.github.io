import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ArrivalScreenProps {
  onComplete: () => void;
}

export function ArrivalScreen({ onComplete }: ArrivalScreenProps) {
  const [phase, setPhase] = useState<"name" | "subtitle" | "motto" | "exit">("name");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("subtitle"), 1400);
    const t2 = setTimeout(() => setPhase("motto"), 2400);
    const t3 = setTimeout(() => setPhase("exit"), 3600);
    const t4 = setTimeout(() => onComplete(), 4400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const nameLetters = "Uday Cherri".split("");

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="arrival"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "#0C0A08" }}
        >
          <div className="relative flex flex-col items-center gap-6 select-none">
            {/* Name — staggered letters */}
            <div className="flex overflow-hidden">
              {nameLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    fontWeight: 300,
                    letterSpacing: "0.12em",
                    color: "#F7F4EE",
                    whiteSpace: "pre",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase !== "name" ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: "1px",
                width: "100%",
                background: "#B8A46A",
                transformOrigin: "left",
              }}
            />

            {/* Archetype */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "subtitle" || phase === "motto" ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.3em",
                color: "#B8A46A",
                textTransform: "uppercase",
              }}
            >
              The INFJ
            </motion.p>

            {/* Motto */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "motto" ? 0.5 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "0.05em",
                color: "#F7F4EE",
                textAlign: "center",
              }}
            >
              Building across worlds. Growing beyond them.
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
