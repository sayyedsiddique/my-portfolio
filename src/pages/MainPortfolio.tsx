import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainPortfolio: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 py-4 lg:px-48 grid-12 sm:px-20 md:px-32">
      <div className="col-span-12 p-2 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Navbar />
        {/* <Resume /> */}
        {/* {location?.pathname === "/" && <About />} */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainPortfolio;
