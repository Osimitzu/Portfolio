import React from "react";

const ProjectItem = ({ backImg, linkDemo, linkCode }) => {
  return (
    <div
      style={{ backgroundImage: `url(${backImg})` }}
      className="min-w-[13rem] h-28 shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 group-hover: text-center">
        <span className="text-xl font-bold text-white">Sushi App</span>
        <div className="text-center">
          <a href={linkDemo} target="_blank">
            <button className="text-center rounded-lg px-2 py-1 m-1 bg-white text-gray-700 font-bold text-base">
              Demo
            </button>
          </a>
          <a href={linkCode} target="_blank">
            <button className="text-center rounded-lg px-2 py-1 m-1 bg-white text-gray-700 font-bold text-base">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
