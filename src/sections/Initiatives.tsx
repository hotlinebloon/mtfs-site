import { useState, type CSSProperties } from "react";
import { initiatives, type Initiative } from "../data/siteData";

export default function Initiatives() {
  const [activeInitiative, setActiveInitiative] =
    useState<Initiative | null>(null);

  return (
    <section className="initiative-archive-section" id="initiatives">
      <div className="initiative-archive-heading">
        <p className="kicker">Initiatives</p>
        <h2>New here? Check it out.</h2>
        <p>
          Our initiatives are built like entry points into STEM: confidence,
          safety, innovation, and real youth-led creation.
        </p>
      </div>

      <div className="initiative-archive-stack" aria-label="MTFS initiatives">
        {initiatives.map((initiative, index) => (
          <article
            className="initiative-archive-paper"
            key={initiative.title}
            style={
              {
                "--stack-index": index,
              } as CSSProperties
            }
          >
            <div className="initiative-paper-image">
              <span>{initiative.imageLabel}</span>
              <div className="initiative-paper-lines" />
            </div>

            <div className="initiative-paper-content">
              <p className="initiative-number">0{index + 1}</p>
              <p className="kicker">{initiative.label}</p>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>

              <div className="initiative-paper-bottom">
                <small>{initiative.status}</small>

                <button
                  type="button"
                  className="initiative-read-more"
                  onClick={() => setActiveInitiative(initiative)}
                >
                  Read more
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeInitiative && (
        <InitiativeModal
          initiative={activeInitiative}
          onClose={() => setActiveInitiative(null)}
        />
      )}
    </section>
  );
}

function InitiativeModal({
  initiative,
  onClose,
}: {
  initiative: Initiative;
  onClose: () => void;
}) {
  return (
    <div
      className="initiative-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="initiative-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="initiative-modal-close"
          onClick={onClose}
          aria-label="Close initiative"
        >
          ×
        </button>

        <p className="kicker">{initiative.label}</p>
        <h2>{initiative.title}</h2>

        <div className="initiative-modal-meta">
          <span>{initiative.status}</span>
        </div>

        <p className="initiative-modal-summary">{initiative.description}</p>

        <div className="initiative-modal-body">
          {initiative.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <button type="button" className="button primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}