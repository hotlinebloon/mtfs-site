import { contact } from "../data/siteData";

export default function JoinUs() {
  return (
    <section className="join-section" id="join">
      <div className="join-editorial">
        <p className="kicker">Contact</p>
        <h2>Be part of the next generation shaping STEM.</h2>

        <p>
            Whether you want to volunteer, join a project, support a workshop, or
            partner with us, MTFS is open to students, mentors, schools, and
            organizations that believe in hands-on STEM learning.
        </p>

        <div className="contact-details">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </div>

        <div className="join-actions">
          <a href={`mailto:${contact.email}`} className="button primary">
            Email us
          </a>
          <a href="/projects" className="button secondary">
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}