import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ProjectItem = ({
  backImg,
  linkDemo,
  linkCode,
  prevFunction,
  nextFunction,
  projectName,
}) => {
  return (
    <div
      // style={{ backgroundImage: `url(${backImg})` }}
      className="w-52 md:w-96 lg:w-[30rem] h-fit shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center content-div transition-all duration-300"
    >
      <img src={backImg} alt="projectImage" />
      {/* Mobile effects */}
      {/* <div className="lg:hidden opacity-1 text-center w-full h-full">
        <div className="w-full h-full grid grid-cols-1 items-center">
          <h2 className="text-xl font-bold text-black/70  w-full">
            {projectName}
          </h2> */}

      {/* Buttons to change slider */}
      {/* <div className="flex justify-between items-center">
            <div className="w-fit h-fit text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
              <BsChevronCompactLeft size={30} onClick={prevFunction} />
            </div>
            <div className="w-fit h-fit text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
              <BsChevronCompactRight size={30} onClick={nextFunction} />
            </div>
          </div> */}
      {/* Demo and Code buttons */}
      {/* <div className="text-center flex justify-center w-full h-fit items-center gap-4">
            <a href={linkDemo} target="_blank">
              <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
                Demo
              </button>
            </a>
            <a href={linkCode} target="_blank">
              <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
                Code
              </button>
            </a>
          </div>
        </div>
      </div> */}
      {/* Mobile effects end */}
      {/* ----------------------------------------------------------- */}
      {/* Hover Effects */}
      {/* <div className="hidden lg:block opacity-0 group-hover:opacity-100 text-center relative w-full h-full transition-all duration-300">
        <h2 className="text-xl font-bold text-black/80 absolute top-0 mt-2 w-full">
          {projectName}
        </h2>
        <div className="text-center absolute bottom-0 mb-3 flex justify-center w-full gap-7">
          <a href={linkDemo} target="_blank">
            <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
              Demo
            </button>
          </a>
          <a href={linkCode} target="_blank">
            <button className="text-center rounded-lg px-2 py-1 m-1 bg-black/60 text-white font-bold text-base">
              Code
            </button>
          </a>
        </div> */}
      {/* Buttons to change slider */}
      {/* <div className="absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevFunction} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextFunction} />
        </div>
      </div> */}
      {/* Hover Effects End */}
    </div>
  );
};

export default ProjectItem;
