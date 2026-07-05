import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar/Navbar";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import  Footer  from "@/components/footer/Footer";



export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />
        <Experience />

        <Projects />

        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
