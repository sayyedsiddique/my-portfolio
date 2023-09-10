import React from "react";
import { Category } from "../../types/types";

type NavItemProps = {
  value: Category | "all";
  filterCategoryHandler: (category: Category | "all") => void;
  active: string;
};

export const NavItem: React.FC<NavItemProps> = ({
  value,
  filterCategoryHandler,
  active,
}) => {
    console.log("active ", active)
  let className = active  === value
    ? "capitalize cursor-pointer hover:text-green text-green"
    : "capitalize cursor-pointer hover:text-green";
    
  return (
    <li className={className} onClick={() => filterCategoryHandler(value)}>
      {value}
    </li>
  );
};

type ProjectNavbarProps = {
  filterCategoryHandler: (category: Category | "all") => void;
  active: string;
};

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({
  filterCategoryHandler,
  active,
}) => {
  return (
    <div className="flex items-center px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem
        value="all"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
      <NavItem
        value="react"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
      <NavItem
        value="typescript"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
      <NavItem
        value="node"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
      <NavItem
        value="express"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
      <NavItem
        value="mongo"
        filterCategoryHandler={filterCategoryHandler}
        active={active}
      />
    </div>
  );
};

export default ProjectNavbar;
