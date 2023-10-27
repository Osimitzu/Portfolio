import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <main>
      <Navbar />
      <section name="home" className="w-full h-screen pt-20 bg-[#0a192f]">
        <Hero />
      </section>
      {/* <section name="about" className="w-full h-screen pt-20 bg-[#0a192f]">
        <About />
      </section> */}
      <section name="skills" className="w-full h-screen pt-20 bg-[#0a192f]">
        <Skills />
      </section>
      <section name="work" className="w-full h-screen pt-20 bg-[#0a192f]">
        <Work />
      </section>
      <section name="contact" className="w-full h-screen pt-20 bg-[#0a192f]">
        <Contact />
      </section>
    </main>
  );
}

export default App;
