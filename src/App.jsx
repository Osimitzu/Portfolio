import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <main>
      <Navbar />
      <section name="home" className="w-full h-screen pt-20 bg-red-400">
        <Home />
      </section>
      {/* <section name="about" className="w-full h-screen pt-20 bg-red-400">
        <About />
      </section> */}
      <section name="skills" className="w-full h-screen pt-20 bg-red-400">
        <Skills />
      </section>
      <section name="work" className="w-full h-screen pt-20 bg-red-400">
        <Work />
      </section>
      {/* <section name="contact" className="w-full h-screen pt-20 bg-red-400">
        <Contact />
      </section> */}
    </main>
  );
}

export default App;
