import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
