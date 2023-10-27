import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import SushiProject from "../assets/SushiProject.png";
import InvitationProject from "../assets/InvitationProject.png";
import FortuneProject from "../assets/FortuneProject.png";
import WeatherProject from "../assets/WeatherProject.png";
import EcommerceProject from "../assets/EcommerceProject.png";
import AstroProject from "../assets/AstroProject.png";

const Work = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Sushi Landing",
      backImg: SushiProject,
      linkDemo: "https://sushilotte.netlify.app",
      linkCode: "https://github.com/Osimitzu/sushiVanillaProject",
    },
    {
      name: "Weather App",
      backImg: WeatherProject,
      linkDemo: "https://osimitzu-weather-app.netlify.app",
      linkCode: "https://github.com/Osimitzu/Weather-App",
    },
    {
      name: "E-commerce API",
      backImg: EcommerceProject,
      linkDemo: "https://e-commerce-backend-sxpd.onrender.com/docs/",
      linkCode: "https://github.com/Osimitzu/ecommerce_project_BACKEND",
    },
    {
      name: "Birthday Invitation",
      backImg: InvitationProject,
      linkDemo: "https://xv-invitation.netlify.app",
      linkCode: "https://github.com/Osimitzu/XV-invitation",
    },
    {
      name: "Fortune Cookies",
      backImg: FortuneProject,
      linkDemo: "https://osimitzu-fortune.netlify.app",
      linkCode: "https://github.com/Osimitzu/Fortune-Cookie",
    },
    {
      name: "Astro Landing",
      backImg: AstroProject,
      linkDemo: "https://osimitzu-astro-landing.netlify.app",
      linkCode: "https://github.com/Osimitzu/astro-landing-page",
    },
  ];

  const prevProject = () => {
    console.log("anterior");
    const firstIndex = index === 0;
    const newIndex = firstIndex ? projects.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextProject = () => {
    console.log("siguiente");
    const lastIndex = index === projects.length - 1;
    const newIndex = lastIndex ? 0 : index + 1;
    setIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <main
      // name="work"
      className="w-full h-full bg-[#0a192f] text-gray-300 px-4 md:px-20 flex justify-center items-center"
    >
      <section className="flex flex-col justify-center items-center w-full">
        <section className="w-full lg:mb-4">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work.</p>
        </section>

        {/* Card container */}
        <section className="w-full py-4 flex justify-center items-center flex-col gap-2 text-center transition-all duration-300">
          <h2 className="text-xl font-bol w-full lg:hidden transition-all duration-300">
            {projects[index].name}
          </h2>
          <div className="flex justify-between items-center transition-all duration-300">
            <div className="w-fit h-fit rounded-full p-2 bg-black/60 text-white cursor-pointer lg:hidden">
              <BsChevronCompactLeft size={10} onClick={prevProject} />
            </div>
            {/* Project item */}
            <ProjectItem
              // key={index}
              projectName={projects[index].name}
              backImg={projects[index].backImg}
              linkDemo={projects[index].linkDemo}
              linkCode={projects[index].linkCode}
              prevFunction={prevProject}
              nextFunction={nextProject}
              // slides={projects}
              // goToSlide={slideDotsF}
            />
            {/* Project item END */}
            <div className="w-fit h-fit rounded-full p-2 bg-black/60 text-white cursor-pointer lg:hidden">
              <BsChevronCompactRight size={10} onClick={nextProject} />
            </div>
          </div>
          {/* Dots to slider */}
          <div className="flex top-4 justify-center py-1">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                onClick={() => goToSlide(projectIndex)}
                className={`text-3xl cursor-pointer ${
                  index === projectIndex ? "text-pink-600" : ""
                }`}
              >
                <RxDotFilled className="transition duration-300 ease-in-out hover:text-pink-600" />
              </div>
            ))}
          </div>
          {/* Dots to slider END */}
          <div className="text-center flex justify-center w-full h-fit items-center gap-4 lg:hidden">
            <a href={projects[index].linkDemo} target="_blank">
              <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
                Demo
              </button>
            </a>
            <a href={projects[index].linkCode} target="_blank">
              <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
                Code
              </button>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Work;
