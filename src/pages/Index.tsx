import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import VoluntaryWork from "@/components/VoluntaryWork";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Awards />
        <Skills />
        <Projects />
        <VoluntaryWork />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
