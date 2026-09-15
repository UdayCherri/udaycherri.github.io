import { useEffect } from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router";
import type { ReactNode } from "react";

export type Persona = "core" | "yuukaycee" | "spy" | "cyb3r";

interface RouteTransitionProps {
  children: ReactNode;
  persona: Persona;
}

function useReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scrolls to top once, when the incoming page instance mounts.
 * Mount-only (not pathname-keyed) so it can never re-fire.
 */
function ScrollTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

interface PersonaConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  transition: { duration: number; ease: number[] | string };
}

/**
 * Route transitions, deliberately boring. There is no exit animation and
 * no sequencing: the old page unmounts instantly and the new one fades
 * in immediately. The previous exit-then-enter sequencing forced every
 * navigation to sit through a fade-out plus a fade-in — up to 0.8s of
 * dim screen — which read as a fault rather than a flourish.
 *
 * Core rises gently and YuuKayCee pulls focus; Spy and CYB3R are plain
 * fast fades. Everything disables fully under reduced motion.
 */
const configs: Record<Persona, PersonaConfig> = {
  core: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  yuukaycee: {
    initial: { opacity: 0, filter: "blur(6px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  spy: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  cyb3r: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export function RouteTransition({ children, persona }: RouteTransitionProps) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const c = configs[persona];
  return (
    <motion.div
      key={location.pathname}
      initial={reduceMotion ? false : c.initial}
      animate={c.animate}
      transition={
        reduceMotion ? { duration: 0 } : { duration: c.transition.duration, ease: c.transition.ease }
      }
      style={{ position: "relative", width: "100%", minHeight: "100%" }}
    >
      <ScrollTopOnMount />
      {children}
    </motion.div>
  );
}
