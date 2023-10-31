import React from "react";

import JavaScriptLogo from "../assets/javascript.png";
import HTMLLogo from "../assets/html.png";
import CSSLogo from "../assets/css.png";
import TailwindLogo from "../assets/tailwind.png";
import ReactLogo from "../assets/react.png";
import BootstrapLogo from "../assets/bootstrap.png";
import NodeLogo from "../assets/node.png";
import ExpressLogo from "../assets/expressjs.png";
import SequelizeLogo from "../assets/sequelize.png";
// import SQLLogo from "../assets/sql.png";
import PostgresqlLogo from "../assets/postgreSQL.png";
import SwaggerLogo from "../assets/swaggerLogo.png";
import GitLogo from "../assets/git.png";

const Skills = ({ language }) => {
  return (
    <div
      // name="skills"
      className="w-full h-full text-gray-300 px-4 lg:px-20 flex justify-center items-center"
    >
      {/* Container */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full mb-12 md:mb-1">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-text500 dark:border-main400 transition-all duration-300">
            {language === "english" ? "Skills" : "Habilidades"}
          </p>
          <p className="py-4 transition-all duration-300">
            {language === "english"
              ? "These are the technologies I work with."
              : "Estas son las tecnologías con las que trabajo."}
          </p>
        </div>
        {/* skills container */}
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center gap-2">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={HTMLLogo}
              alt="HTML icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={CSSLogo}
              alt="CSS icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={JavaScriptLogo}
              alt="JavaScript icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={ReactLogo}
              alt="React icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={TailwindLogo}
              alt="Tailwind icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={BootstrapLogo}
              alt="Bootstrap icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={NodeLogo}
              alt="Node.js icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={ExpressLogo}
              alt="Express.js icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={PostgresqlLogo}
              alt="PostgreSQL icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={SequelizeLogo}
              alt="Sequelize icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Sequelize</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={SwaggerLogo}
              alt="Swagger icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Swagger</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 flex justify-center items-center flex-col">
            <img
              loading="lazy"
              src={GitLogo}
              alt="Git icon"
              className="w-6 md:w-20"
            />
            <p className="py-1 text-xs">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
