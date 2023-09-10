import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../utils/contactData";

const About: React.FC = () => {
  return (
    <div className="p-4 ">
      <h5 className="mb-10 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
        modi. Incidunt quaerat corrupti repellendus earum omnis consequuntur
        fugiat aliquam adipisci quidem perferendis sapiente, harum obcaecati
        doloribus! Molestiae mollitia dicta itaque.
      </h5>
      <div>
        <h6 className="mb-4 ">What I Offer</h6>

        {services && services?.map((item) => {
          return <ServiceCard title={item?.title} about={item?.about} Icon={item?.Icon} />
        })}

      </div>
    </div>
  );
};

export default About;
