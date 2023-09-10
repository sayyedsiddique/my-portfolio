import React from "react";
import { languages, tools } from "../../utils/contactData";
import Bar from "../../components/Bar/Bar";

const Resume: React.FC = () => {
  return (
    <div className="px-4 py-2 ">
      {/* Education & Exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelor of Computer Application
            </h5>
            <p className="font-semibold ">BAMU University (2012 - 2016)</p>
            {/* Babasaheb Ambedkar Marathwada University */}
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, deserunt perferendis.
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelor of Computer Application
            </h5>
            <p className="font-semibold ">BAMU University (2012 - 2016)</p>
            {/* Babasaheb Ambedkar Marathwada University */}
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, deserunt perferendis.
            </p>
          </div>
        </div>
      </div>

      {/* Languanges & Tools */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Languanges & Frameworks</h5>
          <div className="my-2">
            {languages &&
              languages.map((item) => {
                return <Bar data={item} key={item?.name} />;
              })}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold ">Tools & Software</h5>
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
