import { Link } from "react-router-dom";
import { projects } from "../data/siteData";
import "../styles/projects.css"

export default function ProjectsPreview() {
  return (
    <section className="projects-preview-section" id="projects">
      
      <div className="projects-preview-row">

        {/* LEFT */}
        <div className="projects-preview-layout">
          <div className="projects-preview-visual">
            <div className="projects-preview-image">
              <img src="/mtfs1.jpeg" alt="" />
              <span>what we did and what we are building</span>
              <div className="project-paper-lines" />
            </div>
          </div>

          <div className="projects-preview-copy">
            <p className="kicker">Projects</p>
            <h2>New here? Check out what we did and are doing.</h2>
            <p>
              Explore our active and upcoming projects, from girls in technology to
              community-based engineering and innovation.
            </p>

            <Link to="/projects" className="button primary">
              Open projects
            </Link>
          </div>
        </div>

        <div className="projects-preview-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-image">
                <img src={project.image || "/placeholder.jpg"} alt={project.title} />
              </div>

              <p>{project.label}</p>
              <h3>{project.title}</h3>
              <span>{project.status}</span>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}