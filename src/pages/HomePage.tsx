import Hero from "../sections/Hero";
import EditorialIntro from "../sections/EditorialIntro";
import ProjectsPreview from "../sections/ProjectsPreview";
import JoinUs from "../sections/JoinUs";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";

export default function HomePage() {
  return (
    <div className="home-shell">
      <main>
        <Hero />
        <EditorialIntro />
        <ProjectsPreview />
        <JoinUs />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
