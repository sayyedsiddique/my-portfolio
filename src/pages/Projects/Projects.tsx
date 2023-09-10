import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../utils/contactData";

const Projects: React.FC = () => {
  return (
    <div className="px-4 py-2 overflow-scroll" style={{height: "75vh"}}>
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects &&
          projects?.map((item) => {
            return (
              <div className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                <ProjectCard project={item} key={item?.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
