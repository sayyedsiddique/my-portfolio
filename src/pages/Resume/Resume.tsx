import React from "react";
import { languages, tools } from "../../utils/contactData";
import Bar from "../../components/Bar/Bar";
import { motion } from "framer-motion";
import { fadeUpIn } from "../../animations";
import { useTranslation } from "react-i18next";

const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-2 ">
      {/* Education & Exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUpIn} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">{t("resume.education")}</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">
            {t("resume.bca")}
            </h5>
            <p className="font-semibold ">{t("resume.bamu")}</p>
            {/* Babasaheb Ambedkar Marathwada University */}
            <p className="my-3">
            {t("resume.graduation")}
              <i className="fa fa-graduation-cap" aria-hidden="true">
                graduation
              </i>{" "}
              (BCA) from Dr. Babasaheb Ambedkar Marathwada University (BAMU)
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpIn} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">{t("resume.experience")}</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
            {t("resume.frontendWebDeveloperJr")}
            </h5>
            <p className="font-semibold ">{t("resume.ezygenTechnology")}</p>
            {/* Babasaheb Ambedkar Marathwada University */}
            <p className="my-3">
            {t("resume.industryExperience")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languanges & Tools */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold ">{t("resume.languangesFrameworks")}</h5>
          <div className="my-2">
            {languages &&
              languages.map((item) => {
                return <Bar data={item} key={item?.name} />;
              })}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold ">{t("resume.toolsSoftware")}</h5>
          <div className="my-2">
            {tools &&
              tools.map((item) => {
                return <Bar data={item} key={item?.name} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
