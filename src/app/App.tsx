import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";

// Theme
import { ThemeProvider } from "./contexts/ThemeContext";

// Core
import { ArrivalScreen } from "./components/core/ArrivalScreen";
import { CoreNav } from "./components/core/CoreNav";
import CoreHome from "./pages/core/CoreHome";
import CoreJourney from "./pages/core/CoreJourney";
import CoreWork from "./pages/core/CoreWork";
import CoreContact from "./pages/core/CoreContact";

// YuuKayCee
import YuuKayCeeLayout from "./pages/yuukaycee/YuuKayCeeLayout";
import YuuKayCeeHome from "./pages/yuukaycee/YuuKayCeeHome";
import YuuKayCeeWork from "./pages/yuukaycee/YuuKayCeeWork";
import YuuKayCeeCaseStudies from "./pages/yuukaycee/YuuKayCeeCaseStudies";
import YuuKayCeeNYX from "./pages/yuukaycee/YuuKayCeeNYX";
import YuuKayCeeArchive from "./pages/yuukaycee/YuuKayCeeArchive";
import YuuKayCeeContact from "./pages/yuukaycee/YuuKayCeeContact";

// Spy D. Veloper
import SpyLayout from "./pages/spy/SpyLayout";
import SpyHome from "./pages/spy/SpyHome";
import SpyProjects from "./pages/spy/SpyProjects";
import SpySystems from "./pages/spy/SpySystems";
import SpyExperiments from "./pages/spy/SpyExperiments";
import SpyOpenSource from "./pages/spy/SpyOpenSource";
import SpyBlog from "./pages/spy/SpyBlog";
import SpyContact from "./pages/spy/SpyContact";

// CYB3R-BO1
import CyberLayout from "./pages/cyb3r/CyberLayout";
import CyberHome from "./pages/cyb3r/CyberHome";
import CyberResearch from "./pages/cyb3r/CyberResearch";
import CyberSecurityProjects from "./pages/cyb3r/CyberSecurityProjects";
import CyberCTF from "./pages/cyb3r/CyberCTF";
import CyberBlog from "./pages/cyb3r/CyberBlog";
import CyberContact from "./pages/cyb3r/CyberContact";

// Shared
import ProjectPage from "./pages/project/ProjectPage";
import BlogPostPage from "./pages/blog/BlogPostPage";

// Redirects legacy persona paths to their discipline path, preserving any subpath.
// Child slugs are unchanged between old and new, so /spy/projects → /development/projects.
function LegacyRedirect({ to }: { to: string }) {
  const { "*": rest } = useParams();
  return <Navigate to={rest ? `${to}/${rest}` : to} replace />;
}

// Core layout wrapper — provides ThemeContext for all Core routes
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
    } catch {}
    setShowArrival(false);
  };

  return (
    <>
      {showArrival && <ArrivalScreen onComplete={handleArrivalComplete} />}
      <div style={{ opacity: showArrival ? 0 : 1, transition: "opacity 0.5s ease" }}>
        <CoreNav />
        <CoreHome />
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* Core — all wrapped in CoreLayout for ThemeContext */}
      <Route element={<CoreLayout />}>
        <Route path="/" element={<CoreWrapper />} />
        <Route path="/journey" element={<CoreJourney />} />
        <Route path="/work" element={<CoreWork />} />
        <Route path="/contact" element={<CoreContact />} />
      </Route>

      {/* Design — YuuKayCee */}
      <Route path="/design" element={<YuuKayCeeLayout />}>
        <Route index element={<YuuKayCeeHome />} />
        <Route path="work" element={<YuuKayCeeWork />} />
        <Route path="case-studies" element={<YuuKayCeeCaseStudies />} />
        <Route path="nyx-bureau" element={<YuuKayCeeNYX />} />
        <Route path="archive" element={<YuuKayCeeArchive />} />
        <Route path="contact" element={<YuuKayCeeContact />} />
      </Route>

      {/* Development — Spy D. Veloper */}
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

      {/* Security — CYB3R-BO1 */}
      <Route path="/security" element={<CyberLayout />}>
        <Route index element={<CyberHome />} />
        <Route path="research" element={<CyberResearch />} />
        <Route path="security-projects" element={<CyberSecurityProjects />} />
        <Route path="ctf-archive" element={<CyberCTF />} />
        <Route path="blog" element={<CyberBlog />} />
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <AppRoutes />
    </BrowserRouter>
  );
}

function ScrollReset() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}
