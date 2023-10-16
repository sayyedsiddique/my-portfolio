import React from "react";
import { IProjects } from "../../types/types";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../../animations";
import ImageSlider from "../imageSlider/ImageSlider";



type ProjectCardProps = {
  project: IProjects;
  showDetails: number | null;
  setshowDetails: (id: number | null) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    name,
    desscription,
    imagePath,
    sliderImages,
    deployedUrl,
    githubUrl,
    // category,
    keyTechs,
    id,
  },
  showDetails,
  setshowDetails
}) => {
  // const [showDetails, setshowDetails] = useState<boolean>(false);

  console.log("sliderImages ", sliderImages)
  return (
    <div>
      <img
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetails(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        >
          <div>
            <motion.div variants={fadeUpIn}>
            {/* <img src={imagePath} alt={name} /> */}

              <ImageSlider imageArr={sliderImages}/>

            
            </motion.div>
           
            <motion.div variants={fadeUpIn} className="flex justify-center my-4 space-x-3">
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
            </motion.div>
          </div>

          {/* keywords section */}
          <motion.div variants={stagger}>
            <motion.h2  variants={fadeUpIn} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeUpIn}  className="mb-3 font-medium">{desscription}</motion.h3>
            <motion.div variants={fadeUpIn}  className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
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
            </motion.div>
          </motion.div>

          <button
            className="absolute py-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setshowDetails(null)}
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
