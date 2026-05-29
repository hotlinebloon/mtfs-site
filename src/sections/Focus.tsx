type FocusCardProps = {
  number: string;
  title: string;
  text: string;
};

function FocusCard({ number, title, text }: FocusCardProps) {
  return (
    <article className="focus-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function Focus() {
  return (
    <section className="section" id="focus">
      <div className="section-label">Our Focus</div>
      <h2 className="section-title">What we work on</h2>

      <div className="focus-grid">
        <FocusCard
          number="01"
          title="STEM Education"
          text="Hands-on learning in science, technology, engineering, and mathematics."
        />
        <FocusCard
          number="02"
          title="Youth Empowerment"
          text="Building confidence, leadership, creativity, and problem-solving skills."
        />
        <FocusCard
          number="03"
          title="Community Engagement"
          text="Creating opportunities through mentorship, partnerships, and local projects."
        />
        <FocusCard
          number="04"
          title="Inclusive Programs"
          text="Supporting girls and underrepresented youth in STEM pathways."
        />
      </div>
    </section>
  );
}
