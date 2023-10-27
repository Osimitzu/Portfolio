import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-[#0a192f]">
      <ul className="flex flex-row justify-center items-center gap-3">
        <li>
          <a
            href="https://www.linkedin.com/in/osiriscontreras97/"
            target="_blank"
            className="flex justify-center items-center w-full text-pink-600"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Osimitzu"
            target="_blank"
            className="flex justify-center items-center w-full text-pink-600"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="mailto:angel_aocc@hotmail.com"
            target="_blank"
            className="flex justify-center items-center w-full text-pink-600"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        {/* <li>
          <a
            href="/"
            target="_blank"
            className="flex justify-center items-center w-full text-pink-600"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Footer;
