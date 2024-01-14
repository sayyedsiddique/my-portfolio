import React from "react";
import { Iservices } from "../../types/types";
import { IconContext } from "react-icons";

const ServiceCard: React.FC<Iservices> = ({ title, about, Icon }) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <div className="">
        <IconContext.Provider value={{ color: "#00f260", size: "30px" }}>
          <Icon className="text-green" />
        </IconContext.Provider>
      </div>

      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
