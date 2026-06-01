const missionPoints = [
  {
    title: "Create access",
    label: "Starting point",
    description:
      "Give beginners a clear place to begin with coding, AI, robotics, and project work.",
  },
  {
    title: "Build confidence",
    label: "Mentorship",
    description:
      "Make technical work less intimidating through teams, mentors, and repeated practice.",
  },
  {
    title: "Turn learning into work",
    label: "Visible outcomes",
    description:
      "Help students create websites, community solutions, and projects they can show and improve.",
  },
];

export default function EditorialIntro() {
  return (
    <section className="home-section mission-section" id="about">
      <div className="section-heading">
        <p className="kicker">Mission</p>
        <h2>Starting should feel serious, not impossible.</h2>
        <p>
          Many students are interested in technology, but do not have a clear
          place to begin. MTFS gives them structure, people, and real work to
          grow through.
        </p>
      </div>

      <div className="mission-grid">
        {missionPoints.map((point, index) => (
          <article key={point.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>

            <div className="mission-copy">
              <p className="mission-label">{point.label}</p>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
