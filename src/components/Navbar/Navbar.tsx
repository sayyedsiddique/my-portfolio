import { FunctionComponent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem: FunctionComponent<{
  activeItem: string;
  route: string;
  setActiveItem: Function;
  name: string;
}> = ({ activeItem, route, setActiveItem, name }) => {
  return activeItem !== name ? (
    <Link to={route}>
      {" "}
      <a>
        <span
          className="text-black hover:text-green dark:text-white"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </a>{" "}
    </Link>
  ) : null;
};

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("");

  //   when user type route directly into url it should be update
  useEffect(() => {
    if (location?.pathname === "/") setActiveItem("About");
    if (location?.pathname === "/projects") setActiveItem("Projects");
    if (location?.pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="space-x-5 text-red-400 font-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"About"}
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"Projects"}
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"Resume"}
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
