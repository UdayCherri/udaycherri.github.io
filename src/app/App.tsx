import { BrowserRouter, Routes, Route, Outlet, Navigate, useParams, useLocation } from "react-router";
import { useState, useEffect, lazy, Suspense } from "react";

// Content (for document titles on deep routes)
import {
  yuukayceeProjects,
  spyProjects,
  cyberResearch,
  securityProjects,
  cyberBlogPosts,
  devBlogPosts,
} from "./data/content";

// Theme
import { ThemeProvider } from "./contexts/ThemeContext";

// Core (eager: landing shell + nav; everything else lazy)
import { ArrivalScreen } from "./components/core/ArrivalScreen";
import { CoreNav } from "./components/core/CoreNav";

const CoreHome = lazy(() => import("./pages/core/CoreHome"));
const CoreJourney = lazy(() => import("./pages/core/CoreJourney"));
const CoreWork = lazy(() => import("./pages/core/CoreWork"));
const CoreProfile = lazy(() => import("./pages/core/CoreProfile"));
const CoreContact = lazy(() => import("./pages/core/CoreContact"));

// YuuKayCee
const YuuKayCeeLayout = lazy(() => import("./pages/yuukaycee/YuuKayCeeLayout"));
const YuuKayCeeHome = lazy(() => import("./pages/yuukaycee/YuuKayCeeHome"));
const YuuKayCeeWork = lazy(() => import("./pages/yuukaycee/YuuKayCeeWork"));
const YuuKayCeeCaseStudies = lazy(() => import("./pages/yuukaycee/YuuKayCeeCaseStudies"));
const YuuKayCeeNYX = lazy(() => import("./pages/yuukaycee/YuuKayCeeNYX"));
const YuuKayCeeArchive = lazy(() => import("./pages/yuukaycee/YuuKayCeeArchive"));
const YuuKayCeeContact = lazy(() => import("./pages/yuukaycee/YuuKayCeeContact"));

// Spy D. Veloper
const SpyLayout = lazy(() => import("./pages/spy/SpyLayout"));
const SpyHome = lazy(() => import("./pages/spy/SpyHome"));
const SpyProjects = lazy(() => import("./pages/spy/SpyProjects"));
const SpySystems = lazy(() => import("./pages/spy/SpySystems"));
const SpyExperiments = lazy(() => import("./pages/spy/SpyExperiments"));
const SpyOpenSource = lazy(() => import("./pages/spy/SpyOpenSource"));
const SpyBlog = lazy(() => import("./pages/spy/SpyBlog"));
const SpyContact = lazy(() => import("./pages/spy/SpyContact"));

// CYB3R-BO1
const CyberLayout = lazy(() => import("./pages/cyb3r/CyberLayout"));
const CyberHome = lazy(() => import("./pages/cyb3r/CyberHome"));
const CyberResearch = lazy(() => import("./pages/cyb3r/CyberResearch"));
const CyberSecurityProjects = lazy(() => import("./pages/cyb3r/CyberSecurityProjects"));
const CyberCTF = lazy(() => import("./pages/cyb3r/CyberCTF"));
const CyberBlog = lazy(() => import("./pages/cyb3r/CyberBlog"));
const CyberContact = lazy(() => import("./pages/cyb3r/CyberContact"));

// Shared
const ProjectPage = lazy(() => import("./pages/project/ProjectPage"));
const BlogPostPage = lazy(() => import("./pages/blog/BlogPostPage"));

function RouteFallback() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page"
      style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
        Loading
      </p>
    </div>
  );
}

// Redirects legacy persona paths to their discipline path, preserving any subpath.
// Child slugs are unchanged between old and new, so /spy/projects → /development/projects.
function LegacyRedirect({ to }: { to: string }) {
  const { "*": rest } = useParams();
  return <Navigate to={rest ? `${to}/${rest}` : to} replace />;
}

// Core layout wrapper - provides ThemeContext for all Core routes
function CoreLayout() {
  return (
    <ThemeProvider identity="core">
      <Outlet />
    </ThemeProvider>
  );
}

// Core home with arrival screen
function CoreWrapper() {
  const [showArrival, setShowArrival] = useState(() => {
    try {
      return !sessionStorage.getItem("arrival_seen");
    } catch {
      return true;
    }
  });

  const handleArrivalComplete = () => {
    try {
      sessionStorage.setItem("arrival_seen", "1");
    } catch {
      // sessionStorage unavailable (private mode); arrival screen simply re-shows next visit.
    }
    setShowArrival(false);
  };

  return (
    <>
      {showArrival && <ArrivalScreen onComplete={handleArrivalComplete} />}
      <div style={{ opacity: showArrival ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <a href="#main-content" className="core-skip-link">
          Skip to content
        </a>
        <CoreNav />
        <Suspense fallback={<RouteFallback />}>
          <CoreHome />
        </Suspense>
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
    <Routes>
      {/* Core - all wrapped in CoreLayout for ThemeContext */}
      <Route element={<CoreLayout />}>
        <Route path="/" element={<CoreWrapper />} />
        <Route path="/journey" element={<CoreJourney />} />
        <Route path="/work" element={<CoreWork />} />
        <Route path="/profile" element={<CoreProfile />} />
        <Route path="/contact" element={<CoreContact />} />
      </Route>

      {/* Design - YuuKayCee */}
      <Route path="/design" element={<YuuKayCeeLayout />}>
        <Route index element={<YuuKayCeeHome />} />
        <Route path="work" element={<YuuKayCeeWork />} />
        <Route path="case-studies" element={<YuuKayCeeCaseStudies />} />
        <Route path="nyx-bureau" element={<YuuKayCeeNYX />} />
        <Route path="archive" element={<YuuKayCeeArchive />} />
        <Route path="contact" element={<YuuKayCeeContact />} />
      </Route>

      {/* Development - Spy D. Veloper */}
      <Route path="/development" element={<SpyLayout />}>
        <Route index element={<SpyHome />} />
        <Route path="projects" element={<SpyProjects />} />
        <Route path="systems" element={<SpySystems />} />
        <Route path="experiments" element={<SpyExperiments />} />
        <Route path="open-source" element={<SpyOpenSource />} />
        <Route path="blog" element={<SpyBlog />} />
        <Route path="blog/:slug" element={<BlogPostPage section="development" />} />
        <Route path="contact" element={<SpyContact />} />
      </Route>

      {/* Security - CYB3R-BO1 */}
      <Route path="/security" element={<CyberLayout />}>
        <Route index element={<CyberHome />} />
        <Route path="research" element={<CyberResearch />} />
        <Route path="security-projects" element={<CyberSecurityProjects />} />
        <Route path="ctf-archive" element={<CyberCTF />} />
        <Route path="blog" element={<CyberBlog />} />
        {/* Retired native post — send old links to the off-site notebook */}
        <Route path="blog/algorithm-confusion-deep-dive" element={<Navigate to="https://cyb3r-bo1.github.io/" />} />
        <Route path="blog/:slug" element={<BlogPostPage section="security" />} />
        <Route path="contact" element={<CyberContact />} />
      </Route>

      {/* Legacy persona paths → discipline paths (subpaths preserved) */}
      <Route path="/yuukaycee/*" element={<LegacyRedirect to="/design" />} />
      <Route path="/spy/*" element={<LegacyRedirect to="/development" />} />
      <Route path="/cyb3r/*" element={<LegacyRedirect to="/security" />} />

      {/* Project deep-dive */}
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTitles />
      <AppRoutes />
    </BrowserRouter>
  );
}

/**
 * Persona-specific document titles. Every tab names its page first, then
 * its identity - specific enough to tell tabs apart, plain enough to
 * stay professional. Middle dots only; no dashes of any kind.
 * Also manages canonicals.
 */
const SITE_ORIGIN = "https://udaycherri.github.io";

function RouteTitles() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titleForPath(pathname);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_ORIGIN}${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);

  return null;
}

const PERSONA_OF_IDENTITY: Record<string, string> = {
  yuukaycee: "YuuKayCee",
  spy: "Spy D. Veloper",
  cyb3r: "CYB3R-BO1",
};

function titleForPath(pathname: string): string {
  const FALLBACK = "Uday Cherri - Portfolio";

  if (pathname === "/") return FALLBACK;
  if (pathname === "/journey") return "Journey - Uday Cherri";
  if (pathname === "/work") return "Work - Uday Cherri";
  if (pathname === "/profile") return "Profile - Uday Cherri";
  if (pathname === "/contact") return "Contact - Uday Cherri";

  if (pathname === "/design") return "YuuKayCee - Design";
  if (pathname === "/design/work") return "Work - YuuKayCee";
  if (pathname === "/design/case-studies") return "Case Studies - YuuKayCee";
  if (pathname === "/design/nyx-bureau") return "NYX Bureau - YuuKayCee";
  if (pathname === "/design/archive") return "Archive - YuuKayCee";
  if (pathname === "/design/contact") return "Contact - YuuKayCee";

  if (pathname === "/development") return "Spy D. Veloper - Development";
  if (pathname === "/development/projects") return "Projects - Spy D. Veloper";
  if (pathname === "/development/systems") return "Systems - Spy D. Veloper";
  if (pathname === "/development/experiments") return "Experiments - Spy D. Veloper";
  if (pathname === "/development/open-source") return "Open Source - Spy D. Veloper";
  if (pathname === "/development/blog") return "Blog - Spy D. Veloper";
  if (pathname === "/development/contact") return "Contact - Spy D. Veloper";
  if (pathname.startsWith("/development/blog/")) {
    const slug = pathname.split("/").pop() ?? "";
    const post = devBlogPosts.find((p) => p.slug === slug);
    if (post) return `${post.title} - Spy D. Veloper`;
    return "Blog - Spy D. Veloper";
  }

  if (pathname === "/security") return "CYB3R-BO1 - Security";
  if (pathname === "/security/research") return "Research - CYB3R-BO1";
  if (pathname === "/security/security-projects") return "Projects - CYB3R-BO1";
  if (pathname === "/security/ctf-archive") return "CTF Archive - CYB3R-BO1";
  if (pathname === "/security/blog") return "Blog - CYB3R-BO1";
  if (pathname === "/security/contact") return "Contact - CYB3R-BO1";
  if (pathname.startsWith("/security/blog/")) {
    const slug = pathname.split("/").pop() ?? "";
    const post = cyberBlogPosts.find((p) => p.slug === slug);
    if (post) return `${post.title} - CYB3R-BO1`;
    return "Blog - CYB3R-BO1";
  }

  if (pathname.startsWith("/project/")) {
    const id = pathname.split("/").pop() ?? "";
    const project =
      yuukayceeProjects.find((p) => p.id === id) ??
      spyProjects.find((p) => p.id === id) ??
      securityProjects.find((p) => p.id === id) ??
      cyberResearch.find((r) => r.id === id);
    if (project) {
      const identity = "identity" in project ? (project.identity as string) : "cyb3r";
      const persona = PERSONA_OF_IDENTITY[identity] ?? "Uday Cherri";
      const title = "title" in project ? String(project.title) : id;
      return `${title} - ${persona}`;
    }
    return FALLBACK;
  }

  return FALLBACK;
}
