import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPortfolio from "../pages/MainPortfolio";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Projects from "../pages/Projects/Projects";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { DefaultLang } from "../types/types";

const Routing: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    langCode: "Eng",
  });
  console.log("selectedLang... ", selectedLang)
  const [defaultLang, setdefaultLang] = useState("en"); // en

  const { t, i18n } = useTranslation();

  // Language select handler
  const languageSelectHandler = (e: DefaultLang) => {
    let langName = e.target.value
    // let value = e.target.value;
    console.log("e ", e?.target?.value);
    console.log("langName ", langName);
    if (
      langName === "English" ||
      langName === "إنجليزي" ||
      langName === "इंग्रजी" ||
      langName === "अंग्रेजी"
    ) {
      setSelectedLang({
        name: "English",
        langCode: "Eng",
      });
      setdefaultLang("en");
      localStorage.setItem("defaultLang", JSON.stringify("en"));
    } else if (
      langName === "Hindi" ||
      langName === "الماراثى" ||
      langName === "मराठी"
    ) {
      setSelectedLang({
        name: "Hindi",
        langCode: "Hin",
      });
      setdefaultLang("me");
      localStorage.setItem("defaultLang", JSON.stringify("me"));
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPortfolio
            languageSelectHandler={languageSelectHandler}
            selectedLang={selectedLang}
          />
        }
      >
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path='/resume' element={<MainPortfolio />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
