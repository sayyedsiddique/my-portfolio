import React from "react";
import { IProjects } from "../../types/types";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../../animations";
import ImageSlider from "../imageSlider/ImageSlider";
// import VideoPlayer from "../VideoPlayer/VideoPlayer";

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
    videoUrl,
    keyTechs,
    id,
  },
  showDetails,
  setshowDetails,
}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [id]);

  console.log("videoUrl ", videoUrl);

  // const createVideo = () => {
  //   return {
  //     __html: videoUrl,
  //   };
  // }

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
          className="absolute top-0 left-0 z-10 w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        >
          <div className="flex items-start content-between">
            {/* image container */}
            <div className="w-1/2 pr-2">
              {/* images slider */}
              <motion.div variants={fadeUpIn}>
                <ImageSlider imageArr={sliderImages} />
              </motion.div>
              {/* <img
                src={imagePath}
                alt={name}
                className="cursor-pointer"
                onClick={() => setshowDetails(id)}
              /> */}

              {/* git and project buttons */}
              <motion.div
                variants={fadeUpIn}
                className="flex my-4 space-x-3 justify-evenly"
              >
                <a
                  href={githubUrl}
                  className="flex items-center px-4 py-2 space-x-3 bg-gray-200 rounded hover:bg-gray-300 dark:bg-dark-200"
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
                  className="flex items-center px-4 py-2 space-x-3 bg-gray-200 rounded hover:bg-gray-300 dark:bg-dark-200"
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

            {/* details and keyword container */}
            <motion.div variants={stagger}>
              <motion.h2
                variants={fadeUpIn}
                className="mb-5 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.h3 variants={fadeUpIn} className="mb-3 font-medium">
                {desscription}
              </motion.h3>
              <motion.div
                variants={fadeUpIn}
                className="flex flex-wrap gap-2 mt-5 mb-3 text-sm tracking-wider"
              >
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
          </div>

          {/* Video section */}
          <motion.div variants={fadeUpIn}>
            {/* <VideoPlayer videoUrl={videoUrl} /> */}
            {/* <div
              className="wistia_responsive_padding"
              style={{ padding: "53.13% 0 0 0", position: "relative" }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: "100%",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                }}
              >
                <div
                  className="wistia_embed wistia_async_u6fvgve55y seo=true videoFoam=true"
                  style={{
                    height: "100%",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    className="wistia_swatch"
                    style={{
                      height: "100%",
                      left: "0",
                      opacity: "0",
                      overflow: "hidden",
                      position: "absolute",
                      top: "0",
                      transition: "opacity 200ms",
                      width: "100%",
                    }}
                  >
                    <img
                      src="https://fast.wistia.com/embed/medias/u6fvgve55y/swatch"
                      style={{
                        filter: "blur(5px)",
                        height: "100%",
                        objectFit: "contain",
                        width: "100%",
                      }}
                      alt=""
                      aria-hidden="true"
                      // onload="this.parentNode.style.opacity=1;"
                    />
                  </div>
                </div>
              </div>
            </div> */}
             {/* <div dangerouslySetInnerHTML={{ __html: createVideo() }} /> */}
             <div dangerouslySetInnerHTML={{ __html: videoUrl }} />
          </motion.div>

          <button
            className="absolute py-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setshowDetails(null)}
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
      {/* <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 z-10 w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        >
          <p className="my-2 text-center">{name}</p>
        </motion.div> */}
    </div>
  );
};

export default ProjectCard;
