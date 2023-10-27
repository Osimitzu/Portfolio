import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import ProjectItem from "./ProjectItem";
import SushiProject from "../assets/SushiProject.png";
import EcommerceProject from "../assets/EcommerceProject.png";

const Work = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Sushi Project",
      backImg: SushiProject,
      linkDemo: "https://sushilotte.netlify.app",
      linkCode: "https://github.com/Osimitzu/sushiVanillaProject",
    },
    {
      name: "E-commerce API",
      backImg: EcommerceProject,
      linkDemo: "https://e-commerce-backend-sxpd.onrender.com/docs/",
      linkCode: "https://github.com/Osimitzu/ecommerce_project_BACKEND",
    },
    {
      name: "Sushi Project",
      backImg: SushiProject,
      linkDemo: "https://sushilotte.netlify.app",
      linkCode: "https://github.com/Osimitzu/sushiVanillaProject",
    },
    {
      name: "E-commerce API",
      backImg: EcommerceProject,
      linkDemo: "https://e-commerce-backend-sxpd.onrender.com/docs/",
      linkCode: "https://github.com/Osimitzu/ecommerce_project_BACKEND",
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
        <section className="w-full">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </section>

        {/* Card container */}
        <section className="w-full py-4 flex justify-center items-center flex-col gap-2">
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
          <div className="flex top-4 justify-center py-2">
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
        </section>
      </section>
    </main>
  );
};

export default Work;
