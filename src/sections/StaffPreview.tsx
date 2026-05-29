import { Link } from "react-router-dom";
import { staff } from "../data/siteData";

export default function StaffPreview() {
  const founder = staff[0];
  const leads = staff.slice(1);

  return (
    <section className="section staff-preview-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">Staff</p>
          <h2>Built by a youth-led team.</h2>
        </div>
        <Link to="/staff" className="text-link">View staff page</Link>
      </div>

      <div className="staff-preview-layout">
        <article className="staff-mini founder-mini">
          <p>{founder.role}</p>
          <h3>{founder.name}</h3>
          <span>{founder.initials}</span>
        </article>

        {leads.map((person) => (
          <article className="staff-mini" key={person.name}>
            <p>{person.role}</p>
            <h3>{person.name}</h3>
            <span>{person.initials}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
