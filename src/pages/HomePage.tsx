import EditorialIntro from "../sections/EditorialIntro";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import JoinUs from "../sections/JoinUs";
import Partners from "../sections/Partners";
import ProjectsPreview from "../sections/ProjectsPreview";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <EditorialIntro />
        <ProjectsPreview />
        <Partners />
        <JoinUs />
      </main>

      <Footer />
    </>
  );
}