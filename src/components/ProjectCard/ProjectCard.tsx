import React, { useState } from "react";
import { IProjects } from "../../types/types";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

type ProjectCardProps = {
  project: IProjects;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    name,
    desscription,
    imagePath,
    deployedUrl,
    githubUrl,
    category,
    keyTechs,
  },
}) => {
  const [showDetails, setshowDetails] = useState<boolean>(false);

  return (
    <div>
      <img
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetails(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === true && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={imagePath} alt={name} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <IconContext.Provider
                  value={{
                    color: "rgb(34 197 94 / var(--tw-text-opacity))",
                    size: "25px",
                    className: "cursor-pointer",
                  }}
                >
                  <AiFillGithub />
                </IconContext.Provider>
                <span>Github</span>
              </a>
              <a
                href={deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <IconContext.Provider
                  value={{
                    color: "rgb(34 197 94 / var(--tw-text-opacity))",
                    size: "25px",
                    className: "cursor-pointer",
                  }}
                >
                  <AiFillProject />
                </IconContext.Provider>
                <span>Project</span>
              </a>
            </div>
          </div>

          {/* keywords section */}
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{desscription}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {keyTechs?.map((item) => {
                return (
                  <span
                    className="px-2 py-1 text-black bg-gray-200 rounded-sm dark:bg-dark-200 dark:text-white"
                    key={item}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            className="absolute py-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setshowDetails(false)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
