import React from "react";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from 'next-themes' // next-themes package used for dark mode
import resume from '../../assets/syed_siddique_resume.pdf'

const Sidebar: React.FC = () => {

  const { theme, setTheme } = useTheme()

  // used for dark mode
  const darkModeToggleHandler = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };
  
  return (
    <div>
      <img
        src="https://i.postimg.cc/C1H4Q3hv/myphoto.jpg"
        alt=""
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium font-kaushan">
        <span className="first-name-color">Sayyed</span> Siddique
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
      <a href={resume} download="Syed+Siddique+Resume.pdf" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200">
        <GiTie /> <span>Download Resume</span>
      </a>

      {/* social icons */}
      <div className="flex items-center justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <IconContext.Provider
          value={{
            color: "rgb(34 197 94 / var(--tw-text-opacity))",
            size: "25px",
            className: "cursor-pointer",
          }}
        >
          <AiFillGithub />
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "rgb(34 197 94 / var(--tw-text-opacity))",
            size: "25px",
            className: "cursor-pointer",
          }}
        >
          <AiFillLinkedin />
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "rgb(34 197 94 / var(--tw-text-opacity))",
            size: "25px",
            className: "cursor-pointer",
          }}
        >
          <AiFillYoutube />
        </IconContext.Provider>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 justify-centerpy-4"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Maharashtra, Beed</span>
        </div>
        <p className="my-2">sayyedsiddique055@gmail.com</p>
        <p className="my-2">8149313695</p>
      </div>

      {/* email buttons */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={() => window.open("mailto:sayyedsiddique055@gmail.com")}
      >
        Email me
      </button>
      {/* <a className="mailto" href="mailto:sayyedsiddique055@gmail.com">Mail</a> */}
      <button
        className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={darkModeToggleHandler}
      >
        Dark mode
      </button>
    </div>
  );
};

export default Sidebar;
