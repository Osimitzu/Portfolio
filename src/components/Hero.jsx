import React from "react";
import { HiArrowNarrowRight, HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = ({ language }) => {
  return (
    <div
      // name="home"
      className="w-full h-full px-4 lg:px-20 flex justify-center items-center"
    >
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full text-left">
        <p className="text-text500 dark:text-main400  w-full text-lg transition-all duration-300">
          {language === "english" ? "Hi, my name is" : "Hola, mi nombre es"}
        </p>
        <h1 className="w-full text-3xl md:text-6xl font-bold py-2 transition-all duration-300">
          Osiris Contreras
        </h1>
        <h2 className="w-full text-3xl md:text-6xl font-bold text-text700  dark:text-main900 transition-all duration-300">
          {language === "english"
            ? "Full Stack Developer"
            : "Desarrollador Web Full Stack"}
        </h2>
        <p className="w-full py-2 transition-all duration-300">
          {language === "english"
            ? "I'm studying Software Development at Instituto de Estudios Universitarios. I completed a full-stack web development bootcamp at Academlo and obtained my Google IT Support certification."
            : "Estudio Desarrollo de Software en el Instituto de Estudios Universitarios. Completé un bootcamp de desarrollo web full-stack en Academlo y obtuve mi certificación de Google IT Support."}
        </p>
        <div className="w-full flex justify-center items-center lg:py-2">
          <Link to="work" smooth={true} duration={500}>
            <button className="group border-2 px-6 py-2 flex items-center hover:bg-text500 hover:border-text500 border-text500 lg:border-main950 dark:hover:bg-main900 dark:hover:border-main900 dark:border-main900 dark:lg:border-main50 transition-all duration-300 text-lg">
              {language === "english" ? " View Work" : "Ver Proyectos"}
              <span className="lg:rotate-0 lg:group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="hidden lg:block lg:ml-4" />
                <HiArrowNarrowDown className="lg:hidden ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
