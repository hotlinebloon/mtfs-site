import { Link } from "react-router-dom";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-lines" />
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="kicker">
            Non-profit organization based in Kosovo
          </p>

          <h1>
            MAPPING THE <span className="future">FUTURE</span> WITH STEM.
          </h1>

          <p>
            The Mapping the Future with STEM team aims to expand access to
            STEM and innovation by creating opportunities for youth.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button primary">
              View projects
            </Link>

            <Link to="/staff" className="button secondary">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}