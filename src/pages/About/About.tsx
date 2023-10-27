import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../utils/contactData";
import { motion } from "framer-motion";
import { fadeUpIn, stagger } from "../../animations";

const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 overflow-scroll">
      <h5 className="my-3 font-medium ">
        I'm a React developer with two years of industry experience. I've led
        projects like BlueBill POS and Zaps Reward apps. I'm good with React,
        HTML, CSS, and JavaScript. I know how to manage data, connect to
        servers, and make apps run smoothly. I'm all about making user-friendly
        interfaces. Learning and tech are my passions.
      </h5>
      <div
        className="flex-grow pt-4 mt-4 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="mb-4 font-bold ms-4">What I Offer</h6>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 m-4 lg:grid-cols-2"
        >
          {services &&
            services?.map((item, index) => {
              return (
                <motion.div
                  variants={fadeUpIn}
                  className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                  key={index}
                >
                  <ServiceCard
                    title={item?.title}
                    about={item?.about}
                    Icon={item?.Icon}
                    keyValue={index}
                  />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
