const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const sponsorLogos = [
  {
    name: "LinkPlus IT",
    logo: asset("sponsors/linkplus.png"),
    type: "Technology partner",
  },
  {
    name: "Hydroline LLC",
    logo: asset("sponsors/hydroline.png"),
    type: "Community supporter",
  },
  {
    name: "Miket",
    logo: asset("sponsors/miket.png"),
    type: "Program supporter",
  },
];

export default function Partners() {
  return (
    <section className="home-section partners-section" id="partners">
      <div className="partners-layout">
        <div className="section-heading">
          <p className="kicker">Partners</p>
          <h2>Supported by organizations that make the work possible.</h2>
          <p>
            Partner support helps MTFS run learning spaces, workshops, and
            project work for more students and communities.
          </p>
        </div>

        <div className="partner-logo-grid" aria-label="MTFS sponsors">
          {sponsorLogos.map((sponsor) => (
            <article className="partner-logo-card" key={sponsor.name}>
              <div className="partner-logo-frame">
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
              </div>

              <div className="partner-card-copy">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.type}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}