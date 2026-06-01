import { Link } from "react-router-dom";
import { projects } from "../data/siteData";

const focusAreas = [
  {
    title: "Coding",
    description: "Websites, interfaces, and beginner-friendly programming.",
  },
  {
    title: "AI",
    description: "Applied literacy and responsible experimentation.",
  },
  {
    title: "Robotics",
    description: "Sensors, prototyping, and engineering thinking.",
  },
  {
    title: "Mentorship",
    description: "Peer support and guidance from people already building.",
  },
  {
    title: "Community work",
    description: "Using technical skills on real local problems.",
  },
];

const featuredProjects = projects.slice(0, 3);

export default function ProjectsPreview() {
  return (
    <section className="home-section ideas-section" id="projects">
      <div className="section-heading">
        <p className="kicker">Work areas</p>
        <h2>Where students practice STEM.</h2>
        <p>
          The homepage stays selective. It shows the kind of work MTFS does,
          then sends full project detail to the projects archive.
        </p>
      </div>

      <div className="focus-list" aria-label="MTFS focus areas">
        {focusAreas.map((area, index) => (
          <article key={area.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="project-teaser">
        <div>
          <p className="kicker">Projects</p>
          <h2>Selected work, full details elsewhere.</h2>
          <p>
            MTFS projects include local web development, international peer
            learning, community safety mapping, and future innovation labs. The
            projects page holds the full archive, visuals, details, and outcomes.
          </p>

          <Link to="/projects" className="button primary">
            View full projects
          </Link>
        </div>

        <div className="project-name-grid" aria-label="Selected MTFS projects">
          {featuredProjects.map((project) => (
            <article key={project.title}>
              <p>{project.label}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
