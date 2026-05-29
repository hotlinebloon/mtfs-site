import { staff, type StaffMember } from "../data/siteData";
import Footer from "../sections/Footer";

export default function StaffPage() {
  const founder = staff[0];
  const leads = staff.slice(1);

  return (
    <>
      <main className="staff-page">
        <section className="staff-page-hero">
          <p className="kicker">Staff</p>
          <h1>
            The people behind the <span>future</span>.
          </h1>
          <p>
            A youth-led team connecting education, technology, and community
            through STEM programs and real opportunities.
          </p>
        </section>

        <section className="staff-layout" aria-label="MTFS staff">
          <div className="founder-row">
            <StaffCard person={founder} variant="founder" />
          </div>

          <div className="leads-row">
            {leads.map((person) => (
              <StaffCard key={person.name} person={person} variant="lead" />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function StaffCard({
  person,
  variant,
}: {
  person: StaffMember;
  variant: "founder" | "lead";
}) {
  return (
    <article className={`staff-feature-card ${variant}`}>
      <div className="staff-image-wrap">
        {person.photo ? (
          <img src={person.photo} alt={person.name} />
        ) : (
          <div className="staff-image-placeholder">{person.initials}</div>
        )}

        <div className="staff-overlay">
          <p>{person.role}</p>
          <h2>{person.name}</h2>
        </div>
      </div>

      <div className="staff-card-bottom">
        <p>{person.bio}</p>

        <div className="staff-action-links">
          <a href={person.linkedin}>LinkedIn</a>
          <a href={person.website}>Website</a>
        </div>
      </div>
    </article>
  );
}
