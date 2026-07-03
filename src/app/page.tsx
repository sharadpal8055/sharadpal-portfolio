import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

      
        <section id="skills" className="container-width min-h-screen">
          Skills
        </section>

        <section id="experience" className="container-width min-h-screen">
          Experience
        </section>

        <section id="projects" className="container-width min-h-screen">
          Projects
        </section>

        <section id="achievements" className="container-width min-h-screen">
          Achievements
        </section>

        <section id="contact" className="container-width min-h-screen">
          Contact
        </section>
      </main>
    </>
  );
}
