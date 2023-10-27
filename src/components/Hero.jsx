import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      // name="home"
      className="w-full h-full bg-[#0a192f] px-4 md:px-20 flex justify-center items-center"
    >
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full text-left">
        <p className="text-pink-600 w-full text-lg">Hi, my name is</p>
        <h1 className="w-full text-3xl md:text-6xl font-bold text-[#ccd6f6] py-2">
          Osiris Contreras
        </h1>
        <h2 className="w-full text-3xl md:text-6xl font-bold text-[#8892b0]">
          Full Stack Developer
        </h2>
        <p className="w-full text-[#8892b0] py-2">
          I'm studying Software Development at Instituto de Estudios
          Universitarios. I completed a full-stack web development bootcamp at
          Academlo and obtained my Google IT Support certification.
        </p>
        <div className="w-full flex justify-center items-center lg:py-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="rotate-90 lg:rotate-0 lg:group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="lg:ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
