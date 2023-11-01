import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ul className="flex flex-row justify-center items-center gap-3">
        <li>
          <a
            href="https://www.linkedin.com/in/osimitzu/"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="flex justify-center items-center w-full"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Osimitzu"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="flex justify-center items-center w-full"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="mailto:angel@osiriscontreras.com"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="flex justify-center items-center w-full"
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
      <p>&copy; 2023</p>
    </div>
  );
};

export default Footer;
