import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;