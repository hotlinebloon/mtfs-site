import { useState, type CSSProperties } from "react";
import { projects, type Project } from "../data/siteData";
import Footer from "../sections/Footer";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <main className="projects-page">
        <section className="projects-page-hero">
          <p className="kicker">Projects</p>
          <h1>New here? Check out what we did and are doing.</h1>
          <p>
            Explore the projects created by Mapping the Future with STEM, from
            local workshops to global learning experiences and future innovation
            programs.
          </p>
        </section>

        <section className="project-stack-section" aria-label="MTFS projects">
          <div className="project-stack">
            {projects.map((project, index) => (
              <article
                className="project-paper"
                key={project.title}
                style={
                  {
                    "--stack-index": index,
                  } as CSSProperties
                }
              >
                <div className="project-peek-title">
                  <span>{project.label}</span>
                  <strong>{project.title}</strong>
                </div>

                <div
                  className={`project-paper-image ${
                    project.imageMode === "logo" ? "logo-image" : ""
                  }`}
                >
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} visual`} />
                  ) : (
                    <div className="project-photo-placeholder" />
                  )}

                  <span>{project.imageLabel}</span>
                  <div className="project-paper-lines" />
                </div>

                <div className="project-paper-content">
                  <p className="kicker">{project.label}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  <div className="project-paper-bottom">
                    <small>{project.status}</small>

                    <button
                      type="button"
                      className="project-read-more"
                      onClick={() => setActiveProject(project)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project"
        >
          ×
        </button>

        <p className="kicker">{project.label}</p>
        <h2>{project.title}</h2>

        <div className="project-modal-meta">
          <span>{project.status}</span>
        </div>

        <p className="project-modal-summary">{project.description}</p>

        <div className="project-modal-body">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <button type="button" className="button primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}