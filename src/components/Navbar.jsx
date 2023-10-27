import { React, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logoGorilla.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between px-4 items-center bg-[#0a192f] text-gray-300">
      <div>
        <a href="/">
          <img src={Logo} alt="logoImage" style={{ width: "50px" }} />
        </a>
      </div>
      {/* menu */}

      <ul className="hidden md:flex text-xl">
        <Link to="home" smooth={true} duration={500}>
          <li className="hover:text-pink-600 transition-all duration-300">
            Home
          </li>
        </Link>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <Link to="skills" smooth={true} duration={500}>
          <li className="hover:text-pink-600 transition-all duration-300">
            Skills
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="hover:text-pink-600 transition-all duration-300">
            Work
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="hover:text-pink-600 transition-all duration-300">
            Contact
          </li>
        </Link>
      </ul>

      {/* hamburguer */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
      </div>

      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-6 overflow-hidden"
        }
      >
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          <li className="py-4 text-4xl">Home</li>
        </Link>
        {/* <li className="py-4 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          <li className="py-4 text-4xl">Skills</li>
        </Link>
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          <li className="py-4 text-4xl">Work</li>
        </Link>
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          <li className="py-4 text-4xl">Contact</li>
        </Link>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://www.linkedin.com/in/osiriscontreras97/"
              target="_blank"
              className="flex justify-between items-center w-full h-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Osimitzu"
              target="_blank"
              className="flex justify-between items-center w-full h-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:angel_aocc@hotmail.com"
              target="_blank"
              className="flex justify-between items-center w-full h-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/Osiris-resume.pdf"
              download="Osiris-resume.pdf"
              className="flex justify-between items-center w-full h-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
