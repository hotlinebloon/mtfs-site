import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StaffPage from "./pages/StaffPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const motionGroups = [
      {
        selector:
          ".mission-grid article, .project-name-grid article, .join-paths article",
        variant: "line",
      },
      {
        selector:
          ".focus-list article, .partner-logo-card, .coordinator-grid article, .staff-grid article",
        variant: "tile",
      },
      {
        selector: ".project-file, .founder-feature",
        variant: "file",
      },
      {
        selector:
          ".home-section .section-heading, .team-layer-heading, .projects-hero, .staff-hero",
        variant: "field",
      },
      {
        selector: ".project-file-image, .staff-photo",
        variant: "emblem",
      },
    ];

    const items = motionGroups.flatMap(({ selector, variant }) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)).map(
        (element, index) => {
          element.classList.add("motion-item");
          element.dataset.motion = variant;
          element.style.setProperty("--motion-index", String(index % 6));
          return element;
        },
      ),
    );

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      items.forEach((item) => {
        item.classList.remove("motion-item", "is-visible");
        item.removeAttribute("data-motion");
        item.style.removeProperty("--motion-index");
      });
    };
  }, [location.pathname]);

  return (
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </div>
  );
}
