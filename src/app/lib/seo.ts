import { useEffect } from "react";

/** Set document title + description + robots for the current route. */
export function useRouteMeta(opts: {
  title: string;
  description?: string;
  noindex?: boolean;
  canonical?: string;
}) {
  const { title, description, noindex, canonical } = opts;
  useEffect(() => {
    document.title = title;

    const upsert = (selector: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    if (description) {
      const el = upsert('meta[name="description"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      }) as HTMLMetaElement;
      el.setAttribute("content", description);
    }

    const robots = upsert('meta[name="robots"]', () => {
      const m = document.createElement("meta");
        m.setAttribute("name", "robots");
      return m;
    }) as HTMLMetaElement;
    robots.setAttribute(
      "content",
      noindex ? "noindex, nofollow" : "index, follow"
    );

    if (canonical) {
      const link = upsert('link[rel="canonical"]', () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      }) as HTMLLinkElement;
      link.setAttribute("href", canonical);
    }
  }, [title, description, noindex, canonical]);
}

/** Move focus to the main landmark after client-side navigation. */
export function useFocusMainOnRoute(pathname: string, targetId = "main-content") {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }, [pathname, targetId]);
}

/** Strict external URL validation for project/repo links. `"#"` is never valid. */
export function isValidExternalUrl(url: unknown): url is string {
  if (typeof url !== "string" || url.length === 0) return false;
  if (url === "#" || url.trim() === "#") return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
