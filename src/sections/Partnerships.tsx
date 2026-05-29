import { partners } from "../data/siteData";

export default function Partnerships() {
  return (
    <section className="section partners-section" id="partners">
      <div className="section-label">Partnerships</div>
      <h2 className="section-title">Organizations connected to our work</h2>

      <div className="partner-slider" aria-label="Partner placeholder logos">
        <div className="partner-track">
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-logo" key={`${partner}-${index}`}>
              {partner}
            </div>
          ))}
        </div>
      </div>

      <p className="partner-note">
        Placeholder text logos for now. Replace these with real partner logos later.
      </p>
    </section>
  );
}
