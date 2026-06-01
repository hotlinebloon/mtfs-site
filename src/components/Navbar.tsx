import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOnPurple, setIsOnPurple] = useState(false);

  useEffect(() => {
    const updateNavbarTheme = () => {
      const hero = document.querySelector(".hero");

      if (!hero) {
        setIsOnPurple(window.scrollY > 160);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      const navbarCheckpoint = window.scrollY + 84;

      setIsOnPurple(navbarCheckpoint >= heroBottom - 28);
    };

    updateNavbarTheme();
    window.addEventListener("scroll", updateNavbarTheme, { passive: true });
    window.addEventListener("resize", updateNavbarTheme);

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);
      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  return (
    <header className={`navbar ${isOnPurple ? "is-on-purple" : "is-on-hero"}`}>
      <Link
        to="/"
        className="brand"
        aria-label="Mapping the Future with STEM home"
      >
        <span className="brand-mark">
          <img
            src={`${import.meta.env.BASE_URL}MTFS_nobackground.png`}
            alt=""
          />
        </span>

        <span className="brand-copy">
          <strong>MTFS</strong>
          <small>Mapping the Future with STEM</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <a href={`${import.meta.env.BASE_URL}#about`}>Mission</a>
        <Link to="/projects">Projects</Link>
        <Link to="/staff">Staff</Link>
        <a href={`${import.meta.env.BASE_URL}#partners`}>Partners</a>
        <a href={`${import.meta.env.BASE_URL}#join`}>Contact</a>
      </nav>

      <div className="nav-actions">
        <a href={`${import.meta.env.BASE_URL}#join`} className="nav-button">
          Volunteer
        </a>
      </div>
    </header>
  );
}