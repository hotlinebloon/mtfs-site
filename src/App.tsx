import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StaffPage from "./pages/StaffPage";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="page">
      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </div>
  );
}