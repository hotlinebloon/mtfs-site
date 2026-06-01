import Footer from "../sections/Footer";
import { projects } from "../data/siteData";

const fallbackImage = `${import.meta.env.BASE_URL}MTFS.png`;

function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.src = fallbackImage;
}

export default function ProjectsPage() {
  return (
    <>
      <main className="projects-page">
        <section className="projects-hero">
          <div>
            <p className="kicker">Projects</p>
            <h1>Practical STEM work from the MTFS team.</h1>
          </div>

          <p>
            Each project gives young people a clear way to build technical
            skills, work with others, and connect STEM with real needs.
          </p>
        </section>

        <section className="project-files">
          {projects.map((project, index) => (
            <article className="project-file" key={project.title}>
              <div className="project-file-visual">
                <span className="project-file-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="project-file-image">
                  <img
                    src={project.image || fallbackImage}
                    alt=""
                    onError={handleImageError}
                  />
                </div>
              </div>

              <div className="project-file-content">
                <div className="project-file-meta">
                  <span>{project.label}</span>
                  <span>{project.status}</span>
                </div>

                <h2>{project.title}</h2>

                <p className="project-file-description">
                  {project.description}
                </p>

                {project.sections?.length ? (
                  <div className="project-file-sections">
                    {project.sections.map((section) => (
                      <section key={section.title}>
                        <h3>{section.title}</h3>
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </section>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}