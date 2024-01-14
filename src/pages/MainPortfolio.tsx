import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { DefaultLang } from "../types/types";
import LanguageSelect from "../components/languageSelect/LanguageSelect";


type MainPortfolioProps = {
  languageSelectHandler: () => void,
  selectedLang: DefaultLang
}

const MainPortfolio: React.FC<MainPortfolioProps> = ({languageSelectHandler, selectedLang}) => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 py-4 lg:h-screen lg:px-48 grid-12 sm:px-20 md:px-32">
      <div className="col-span-10 p-2 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-8 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Navbar />
        {/* <Resume /> */}
        {/* {location?.pathname === "/" && <About />} */}
        <Outlet />
      </div>
      <div className="lg:col-span-1">
        <LanguageSelect languageSelectHandler={languageSelectHandler} selectedLang={selectedLang}/>
      </div>
    </div>
  );
};

export default MainPortfolio;
