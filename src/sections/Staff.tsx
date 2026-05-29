import { staff } from "../data/siteData";

export default function Staff() {
  return (
    <section className="section" id="staff">
      <div className="section-label">Staff</div>
      <h2 className="section-title">The team behind MTFS</h2>

      <div className="staff-grid">
        {staff.map((person) => (
          <article className="staff-card" key={person.name}>
            <div className="staff-photo">{person.initials}</div>
            <div className="staff-info">
              <h3>{person.name}</h3>
              <p className="staff-role">{person.role}</p>
              <p>{person.bio}</p>

              <div className="staff-links">
                <a href={person.linkedin}>LinkedIn</a>
                <a href={person.website}>Personal Website</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
