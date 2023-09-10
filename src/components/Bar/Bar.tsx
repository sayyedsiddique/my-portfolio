import React from "react";
import { ISkill } from "../../types/types";

type BarProps = {
  data: ISkill;
};

const Bar: React.FC<BarProps> = ({ data: { name, level, Icon } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{width: level}}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
