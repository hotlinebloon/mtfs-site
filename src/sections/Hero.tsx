import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bubble">
        <div className="hero-rules" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-layout">


          <div className="hero-card">
            
            <span className="hero-logo-mark">
              <img src="/MTFS_nobackground.png" alt="" />
            </span>

            <p className="hero-kicker">Youth-led STEM NGO</p>

            <h1>
              <span>Mapping the Future</span>
              <span>with STEM</span>
            </h1>

            <p className="hero-subheadline">Students learning by building.</p>

            <p className="hero-lead">
              MTFS creates serious starting points for coding, AI, robotics,
              mentorship, workshops, and community work. We help students build
              real confidence through projects they can share and improve.
            </p>

            <div className="hero-actions">
              <a className="hero-primary" href="#join">
                <span>Join as a volunteer</span>
              </a>

              <Link className="hero-secondary" to="/projects">
                Explore projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
