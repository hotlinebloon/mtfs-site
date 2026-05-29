import { featureBlocks } from "../data/siteData";
import "../styles/editorial-home.css"

export default function EditorialIntro() {
  return (
    <section className="editorial-intro" id="about">
      <div className="intro-statement">
        <p className="kicker">What we do</p>
        <h2>
          We make STEM Practical, Creative, and Accessible for young people.
        </h2>
      </div>

      <div className="feature-list">
        {featureBlocks.map((block) => (
          <article key={block.title}>
            <span className={`feature-icon ${block.iconPosition}`} />
            <h3>{block.title}</h3>
            <p>{block.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}