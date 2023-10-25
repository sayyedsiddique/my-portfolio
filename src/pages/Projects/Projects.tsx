import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects as projectsData } from "../../utils/contactData";
import ProjectNavbar from "../../components/ProjectNavbar/ProjectNavbar";
import { Category } from "../../types/types";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../../animations";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetails, setshowDetails] = useState<number | null>(null);

  console.log("showDetails... ", showDetails)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[showDetails])

  const filterCategoryHandler = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);

      return;
    }

    const newArr = projectsData?.filter((item) =>
      item.category.includes(category)
    );
    setProjects(newArr);
    setActive(category);
  };
  

  return (
    <div className="px-4 py-2 overflow-scroll" style={{ height: "75vh" }}>
      <ProjectNavbar
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects &&
          projects?.map((item) => {
            return (
              <motion.div
                variants={fadeUpIn}
                key={item?.name}
                className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              >
                <ProjectCard project={item} showDetails={showDetails} setshowDetails={setshowDetails} />
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Projects;
