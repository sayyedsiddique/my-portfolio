import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Resume from "./Resume/Resume";

const MainPortfolio: React.FC = () => {
  return (
    <div className="grid h-screen grid-cols-12 gap-6 px-5 py-12 lg:px-48 grid-12 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <Resume />
      </div>
    </div>
  );
};

export default MainPortfolio;
