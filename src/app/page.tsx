import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Resume />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
