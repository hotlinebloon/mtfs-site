import { useState, type CSSProperties } from "react";
import { activities, type Activity } from "../data/siteData";

export default function ActivityArchive() {
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

  return (
    <section className="activity-archive-section" id="activities">
      <div className="activity-archive-heading">
        <div>
          <p className="kicker">Archive</p>
          <h2>Activities we have done.</h2>
        </div>

        <p>
          A living archive of workshops, events, sessions, and community moments
          from Mapping the Future with STEM.
        </p>
      </div>

      <div className="activity-stack" aria-label="MTFS activity archive">
        {activities.map((activity, index) => (
          <article
            className="activity-paper"
            key={activity.slug}
            style={
              {
                "--stack-index": index,
              } as CSSProperties
            }
          >
            <div className="activity-paper-top">
              <span>{activity.date}</span>
              <span>{activity.category}</span>
            </div>

            <div className="activity-paper-image">
              <span>{activity.coverText}</span>
              <div className="activity-paper-lines" />
            </div>

            <div className="activity-paper-content">
              <p className="activity-number">0{index + 1}</p>
              <h3>{activity.title}</h3>
              <p>{activity.summary}</p>

              <button
                type="button"
                className="activity-read-more"
                onClick={() => setActiveActivity(activity)}
              >
                Read more
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeActivity && (
        <ActivityModal
          activity={activeActivity}
          onClose={() => setActiveActivity(null)}
        />
      )}
    </section>
  );
}

function ActivityModal({
  activity,
  onClose,
}: {
  activity: Activity;
  onClose: () => void;
}) {
  return (
    <div
      className="activity-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="activity-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="activity-modal-close"
          onClick={onClose}
          aria-label="Close activity"
        >
          ×
        </button>

        <p className="kicker">{activity.category}</p>
        <h2>{activity.title}</h2>

        <div className="activity-modal-meta">
          <span>{activity.date}</span>
          <span>{activity.location}</span>
        </div>

        <p className="activity-modal-summary">{activity.summary}</p>

        <div className="activity-modal-body">
          {activity.body.map((paragraph) => (
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