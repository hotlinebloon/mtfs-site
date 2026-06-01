
import { useState } from "react";
import Footer from "../sections/Footer";
import { staff } from "../data/siteData";

function StaffPhoto({
  name,
  initials,
  photo,
}: {
  name: string;
  initials: string;
  photo?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showPhoto = Boolean(photo) && !imageFailed;

  return (
    <div className={`staff-photo ${showPhoto ? "has-photo" : "no-photo"}`}>
      {showPhoto ? (
        <img
          src={photo}
          alt={name}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
export default function StaffPage() {
  const founder = staff[0];
  const coordinators = staff.slice(1, 3);
  const team = staff.slice(3);

  return (
    <>
      <main className="staff-page">
        <section className="staff-hero">
          <p className="kicker">Team</p>
          <h1>The people building MTFS programs.</h1>
          <p>
            MTFS is youth-led, project-focused, and built by a small team that
            turns ideas into practical STEM opportunities.
          </p>
        </section>

        {founder ? (
          <section className="founder-feature">
            <div className="founder-visual">
              <StaffPhoto
                name={founder.name}
                initials={founder.initials}
                photo={founder.photo}
              />
            </div>

            <div className="founder-copy">
              <p className="kicker">Founder</p>
              <h2>{founder.name}</h2>
              <span className="staff-role">{founder.role}</span>
              <p>{founder.bio}</p>
            </div>
          </section>
        ) : null}

        <section className="team-layer">
          <div className="team-layer-heading">
            <p className="kicker">Coordination</p>
            <h2>Project direction and execution.</h2>
          </div>

          <div className="coordinator-grid">
            {coordinators.map((person) => (
              <article className="coordinator-card" key={person.name}>
                <StaffPhoto
                  name={person.name}
                  initials={person.initials}
                  photo={person.photo}
                />

                <div className="coordinator-copy">
                  <h3>{person.name}</h3>
                  <span className="staff-role">{person.role}</span>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="team-layer">
          <div className="team-layer-heading">
            <p className="kicker">Support system</p>
            <h2>Assistants, designers, and project support.</h2>
          </div>

          <div className="staff-grid">
            {team.map((person) => (
              <article className="staff-card" key={person.name}>
                <StaffPhoto
                  name={person.name}
                  initials={person.initials}
                  photo={person.photo}
                />

                <div className="staff-card-content">
                  <h3>{person.name}</h3>
                  <span className="staff-role">{person.role}</span>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}