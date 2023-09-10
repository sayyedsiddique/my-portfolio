import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../utils/contactData";

const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
        modi. Incidunt quaerat corrupti repellendus earum omnis consequuntur
        fugiat aliquam adipisci quidem perferendis sapiente, harum obcaecati
        doloribus! Molestiae mollitia dicta itaque.
      </h5>
      <div className="flex-grow pt-4 mt-4 bg-gray-400" style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}}>
        <h6 className="mb-4 font-bold ms-4">What I Offer</h6>

        <div className="grid gap-6 m-4 lg:grid-cols-2">
          {services &&
            services?.map((item) => {
              return (
                <div className="bg-gray-200 rounded-lg lg:col-span-1">
                  <ServiceCard
                    title={item?.title}
                    about={item?.about}
                    Icon={item?.Icon}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
