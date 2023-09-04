import React from "react";
import { IconContext, icons } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar: React.FC = () => {
  return (
    <div>
      <img
        src="https://i.postimg.cc/C1H4Q3hv/myphoto.jpg"
        alt=""
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium ">
        <span>Sayyed</span> Siddique
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer">
        <GiTie /> Download Resume
      </p>

      {/* social icons */}
      <div className="flex items-center justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <IconContext.Provider
          value={{ color: "rgb(34 197 94 / var(--tw-text-opacity))", size: "25px", className:"cursor-pointer" }}
        >
          <AiFillGithub />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "rgb(34 197 94 / var(--tw-text-opacity))", size: "25px", className:"cursor-pointer" }}
        >
          <AiFillLinkedin />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "rgb(34 197 94 / var(--tw-text-opacity))", size: "25px", className:"cursor-pointer" }}
        >
          <AiFillYoutube />
        </IconContext.Provider>
      </div>

      {/* address */}
      <div className="py-4 my-5 bg-gray-200 justify-centerpy-4" style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Maharashtra, Beed</span>
        </div>
        <p className="my-2">sayyedsiddique055@gamil.com</p>
        <p className="my-2">8149313695</p>
      </div>

      {/* email buttons */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">Email me</button>
      <button className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">Dark mode</button>
    </div>
  );
};

export default Sidebar;
