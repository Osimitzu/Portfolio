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

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies that I worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img src={HTMLLogo} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img src={CSSLogo} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={JavaScriptLogo}
              alt="JavaScript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img src={ReactLogo} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={TailwindLogo}
              alt="Tailwind icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={BootstrapLogo}
              alt="Bootstrap icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img src={NodeLogo} alt="Node.js icon" className="w-20 mx-auto" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={ExpressLogo}
              alt="Express icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={PostgresqlLogo}
              alt="PostgreSQL icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={SequelizeLogo}
              alt="Sequelize icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Sequelize</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              src={SwaggerLogo}
              alt="Swagger icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Swagger</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img src={GitLogo} alt="Git icon" className="w-20 mx-auto" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
