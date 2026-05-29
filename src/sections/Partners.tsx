import { partners } from "../data/siteData";

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-header">
        <p className="kicker">Partnerships</p>
        <h2>Organizations connected to our work</h2>
      </div>

      <div className="partner-slider" aria-label="Partner logos">
        <div className="partner-track">
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-logo" key={`${partner.name}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}