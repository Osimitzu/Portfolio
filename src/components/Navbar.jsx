import { React, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiDocusaurus } from "react-icons/si";
import { GiSombrero } from "react-icons/gi";
import LogoLight from "../assets/logoLight2.png";
import LogoDark from "../assets/logoDark.png";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, themeParam, languageMode, language }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between px-4 items-center bg-main50 dark:bg-main950 transition-all duration-300">
      <div className="z-50">
        <a href="/">
          <img
            src={themeParam === "dark" ? LogoDark : LogoLight}
            alt="logoImage"
            loading="lazy"
            className="w-16 rounded-full"
          />
        </a>
      </div>

      {/* menu */}

      <ul className="hidden lg:flex text-xl">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-110">
            {language === "english" ? "HOME" : "INICIO"}
          </li>
        </Link>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-110">
            {language === "english" ? "SKILLS" : "HABILIDADES"}
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-110">
            {language === "english" ? "WORK" : "PROYECTOS"}
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-110">
            {language === "english" ? "CONTACT" : "CONTACTO"}
          </li>
        </Link>
      </ul>
      <div className="flex gap-5">
        {/* dark mode */}
        <div
          onClick={darkMode}
          className="cursor-pointer hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-125"
        >
          {themeParam === "dark" ? (
            <MdOutlineDarkMode size={35} />
          ) : (
            <CiLight size={35} />
          )}
        </div>
        {/* language mode */}
        <div
          onClick={languageMode}
          className="cursor-pointer hover:text-text500 dark:hover:text-main400 transition-all duration-300 hover:scale-125"
        >
          {language === "english" ? (
            <SiDocusaurus size={35} />
          ) : (
            <GiSombrero size={35} />
          )}
        </div>
      </div>

      {/* hamburguer */}
      <div onClick={handleClick} className="lg:hidden z-50">
        {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
      </div>

      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-main50 dark:bg-main950 flex flex-col justify-center items-center gap-6 overflow-hidden"
        }
      >
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          <li className="py-4 text-4xl">
            {language === "english" ? "HOME" : "INICIO"}
          </li>
        </Link>
        {/* <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          <li className="py-4 text-4xl">
            {language === "english" ? "SKILLS" : "HABILIDADES"}
          </li>
        </Link>
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          <li className="py-4 text-4xl">
            {language === "english" ? "WORK" : "PROYECTOS"}
          </li>
        </Link>
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          <li className="py-4 text-4xl">
            {language === "english" ? "CONTACT" : "CONTACTO"}
          </li>
        </Link>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-main50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4285F4]">
            <a
              href="https://www.linkedin.com/in/osimitzu/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="flex justify-between items-center w-full h-full"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Osimitzu"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="flex justify-between items-center w-full h-full"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DB4437]">
            <a
              href="mailto:angel@osiriscontreras.com"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="flex justify-between items-center w-full h-full"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0F9D58]">
            <a
              href="/Osiris-resume.pdf"
              download="Osiris-resume.pdf"
              className="flex justify-between items-center w-full h-full"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
