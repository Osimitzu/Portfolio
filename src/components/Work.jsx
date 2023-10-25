import React from "react";
import ProjectItem from "./ProjectItem";
import SushiProject from "../assets/SushiProject.png";
import MobileSushi from "../assets/MobileSushiProject.png";
import EcommerceProject from "../assets/EcommerceProject.png";

const Work = () => {
  return (
    <main
      // name="work"
      className="w-full h-full bg-[#0a192f] text-gray-300 px-4 md:px-20 flex justify-center items-center"
    >
      <section className="flex flex-col justify-center items-center w-full">
        <section className="w-full">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </section>

        {/* Card container */}
        <section className="w-full py-4 flex justify-center items-center flex-wrap gap-3 bg-teal-300">
          {/* Card item */}
          <ProjectItem
            backImg={SushiProject}
            linkDemo="https://sushilotte.netlify.app"
            linkCode="https://github.com/Osimitzu/sushiVanillaProject"
          />
          <ProjectItem
            backImg={SushiProject}
            linkDemo="https://sushilotte.netlify.app"
            linkCode="https://github.com/Osimitzu/sushiVanillaProject"
          />
        </section>
      </section>
    </main>
  );
};

export default Work;
