import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar/Navbar";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

      
      <Skills />
      <Experience/>

       

       <Projects />

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
