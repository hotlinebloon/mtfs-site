import { Link } from "react-router-dom";
import "../styles/navbar.css"
export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="Mapping the Future with STEM home">
        <img src="/logo.png" alt="" />

        <span className="brand-copy">
          <strong>MTFS</strong>
          <small>Mapping the Future with STEM</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="/#about">Mission</a>
        <Link to="/staff">Staff</Link>
        <a href="/#partners">Partners</a>
        <a href="/#join">Contact</a>
      </nav>

      <a href="/#join" className="nav-button">
        Get involved
      </a>
    </header>
  );
}