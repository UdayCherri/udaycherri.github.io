import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}

export function useIsMd() {
  return useMediaQuery("(min-width: 768px)");
}

/** True when the OS / browser requests reduced motion.
 *  All Core intro + scroll animations consult this and render statically. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
