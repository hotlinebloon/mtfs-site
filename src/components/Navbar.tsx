import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOnPurple, setIsOnPurple] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`navbar ${isOnPurple ? "is-on-purple" : "is-on-hero"} ${isMenuOpen ? "is-menu-open" : ""}`}
    >
      <Link
        to="/"
        className="brand"
        aria-label="Mapping the Future with STEM home"
        onClick={closeMenu}
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

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className="nav-links"
        id="main-navigation"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <a href={`${import.meta.env.BASE_URL}#about`} onClick={closeMenu}>
          Mission
        </a>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/staff" onClick={closeMenu}>
          Staff
        </Link>
        <a href={`${import.meta.env.BASE_URL}#partners`} onClick={closeMenu}>
          Partners
        </a>
        <a href={`${import.meta.env.BASE_URL}#join`} onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="nav-actions">
        <a
          href={`${import.meta.env.BASE_URL}#join`}
          className="nav-button"
          onClick={closeMenu}
        >
          Volunteer
        </a>
      </div>
    </header>
  );
}
