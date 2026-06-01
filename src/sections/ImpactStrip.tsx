const impactItems = [
  {
    value: "17 countries",
    label: "Reached through CTRL+Her Global",
  },
  {
    value: "3 tracks",
    label: "Coding, safety, and innovation programs",
  },
  {
    value: "Youth-led",
    label: "Built by young people for practical STEM access",
  },
  {
    value: "Hands-on",
    label: "Workshops, projects, mentoring, and community learning",
  },
];

export default function ImpactStrip() {
  return (
    <section className="home-section impact-strip" id="impact">
      <div className="section-heading">
        <h2>Clear proof points for a growing youth-led STEM community.</h2>
      </div>

      <div className="impact-row">
        {impactItems.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
