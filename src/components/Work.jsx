import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import SushiProject from "../assets/SushiProject.webp";
import InvitationProject from "../assets/InvitationProject.webp";
import FortuneProject from "../assets/FortuneProject.webp";
import WeatherProject from "../assets/WeatherProject.webp";
import EcommerceProject from "../assets/EcommerceProject.webp";
import AstroProject from "../assets/AstroProject.webp";
import PortfolioProject from "../assets/portfolioProject.webp";

const Work = ({ language }) => {
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
      name: "Astro Landing",
      backImg: AstroProject,
      linkDemo: "https://osimitzu-astro-landing.netlify.app",
      linkCode: "https://github.com/Osimitzu/astro-landing-page",
    },
    {
      name: "Fortune Cookies",
      backImg: FortuneProject,
      linkDemo: "https://osimitzu-fortune.netlify.app",
      linkCode: "https://github.com/Osimitzu/Fortune-Cookie",
    },
    {
      name: "Portfolio",
      backImg: PortfolioProject,
      linkDemo: "https://osiriscontreras.com",
      linkCode: "https://github.com/Osimitzu/Portfolio",
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
      className="w-full h-full text-gray-300 px-4 lg:px-20 flex justify-center items-center"
    >
      <section className="flex flex-col justify-center items-center w-full">
        <section className="w-full mb-11 md:mb-8 lg:mb-0">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-text500 dark:border-main400 transition-all duration-300">
            {language === "english" ? "Work" : "Proyectos"}
          </p>
          <p className="pt-4 transition-all duration-300">
            {language === "english"
              ? "Check out some of my recent work."
              : "Echa un vistazo a algunos de mis proyectos recientes."}
          </p>
        </section>

        {/* Card container */}
        <section className="w-full py-4 lg:py-0 flex justify-center items-center flex-col gap-2 text-center transition-all duration-300">
          <h2 className="text-2xl font-bol w-full transition-all duration-300">
            {projects[index].name}
          </h2>
          <div className="w-full flex justify-center items-center transition-all duration-300">
            <div
              onClick={prevProject}
              className="w-fit h-[7.2rem] md:h-[13.4rem] lg:h-[16.8rem] flex items-center p-2 bg-main50 dark:bg-main950 cursor-pointer transition-all duration-300 active:scale-95"
            >
              <BsChevronCompactLeft size={25} />
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

            <div
              onClick={nextProject}
              className="w-fit h-[7.2rem] md:h-[13.4rem] lg:h-[16.8rem] flex items-center p-2 bg-main50 dark:bg-main950 cursor-pointer transition-all duration-300 active:scale-95"
            >
              <BsChevronCompactRight size={25} />
            </div>
          </div>
          {/* Dots to slider */}
          <div className="flex justify-center">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                onClick={() => goToSlide(projectIndex)}
                className={`text-3xl cursor-pointer ${
                  index === projectIndex ? "text-text500 dark:text-main400" : ""
                }`}
              >
                <RxDotFilled className="transition duration-300 ease-in-out hover:text-text500 dark:hover:text-main400" />
              </div>
            ))}
          </div>
          {/* Dots to slider END */}
          <div className="text-center flex justify-center w-full h-fit items-center gap-4">
            <a
              href={projects[index].linkDemo}
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <div className="border-2 flex justify-center items-center w-20 transition-all duration-300 px-6 py-2 hover:bg-text500 hover:border-text500 border-text500 lg:border-main950 dark:hover:bg-main900 dark:hover:border-main900 dark:border-main900 dark:lg:border-main50 text-lg active:scale-95">
                {language === "english" ? "Demo" : "Demo"}
              </div>
            </a>
            <a
              href={projects[index].linkCode}
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <div className="border-2 flex justify-center items-center w-20 transition-all duration-300 px-6 py-2 hover:bg-text500 hover:border-text500 border-text500 lg:border-main950 dark:hover:bg-main900 dark:hover:border-main900 dark:border-main900 dark:lg:border-main50 text-lg active:scale-95">
                {language === "english" ? "Code" : "Code"}
              </div>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Work;
