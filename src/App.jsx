import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });
  const [lang, setLang] = useState("english");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLanguage = () => {
    setLang((prevLang) => (prevLang === "english" ? "spanish" : "english"));
  };

  return (
    <main className="bg-main50 dark:bg-main950 text-main950 dark:text-main50 transition-all duration-300">
      <Navbar
        darkMode={handleTheme}
        themeParam={theme}
        languageMode={handleLanguage}
        language={lang}
      />
      <section name="home" className="w-full h-screen pt-20">
        <Hero language={lang} />
      </section>
      {/* <section name="about" className="w-full h-screen pt-20 bg-[#0a192f]">
        <About />
      </section> */}
      <section name="skills" className="w-full h-screen pt-20">
        <Skills language={lang} />
      </section>
      <section name="work" className="w-full h-screen pt-20">
        <Work language={lang} />
      </section>
      <section name="contact" className="w-full h-screen pt-20">
        <Contact language={lang} />
      </section>
      <section className="lg:hidden w-full h-12 flex">
        <Footer />
      </section>
      <section className="hidden lg:flex w-full h-8 items-center justify-center">
        <p>&copy; 2023</p>
      </section>
    </main>
  );
}

export default App;
