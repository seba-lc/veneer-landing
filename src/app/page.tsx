import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { ForArchitects } from "@/components/ForArchitects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Process />
        <Projects />
        <Clients />
        <ForArchitects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
