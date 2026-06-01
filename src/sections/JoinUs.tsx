const joinPaths = [
  {
    title: "Volunteer",
    description: "Help run sessions, projects, and events.",
  },
  {
    title: "Mentor",
    description: "Guide students through technical or creative work.",
  },
  {
    title: "Partner",
    description: "Bring MTFS to a school, NGO, company, or youth space.",
  },
];

export default function JoinUs() {
  return (
    <section className="home-section join-section" id="join">
      <div className="join-editorial">
        <p className="kicker">Join MTFS</p>

        <h2>Help more students find a serious place to start.</h2>

        <p>
          Volunteer with a project, mentor a team, support a workshop, or help
          bring MTFS to more schools and communities.
        </p>

        <div className="join-paths">
          {joinPaths.map((path) => (
            <article key={path.title}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </article>
          ))}
        </div>

        <div className="join-actions">
          <p className="join-contact-note">
            Email mappingthefuturewithstem@gmail.com to volunteer, mentor, or
            start a partnership conversation.
          </p>

          <a
            href="mailto:mappingthefuturewithstem@gmail.com"
            className="button primary on-dark"
          >
            Join as a volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
