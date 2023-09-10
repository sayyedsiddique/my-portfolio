import React from "react";
import { Iservices } from "../../types/types";

const ServiceCard: React.FC<Iservices> = ({ title, about, Icon }) => {
  return (
    <div>
      <Icon />
      <h4>{title}</h4>
      <p>{about}</p>
    </div>
  );
};

export default ServiceCard;
