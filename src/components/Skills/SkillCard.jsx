import React from "react";

const SkillCard = ({ skill }) => {
  const { name, percentage } = skill;

  return (
    <div className="w-36 bg-white p-4 rounded-lg shadow-md">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-gray-200">
              {percentage}%
            </span>
          </div>
        </div>
           <div
            className="absolute left-0 flex h-4 bg-teal-600 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
      </div>
      <h2 className="text-xl font-semibold pt-4">{name}</h2>
    </div>
  );
};

export default SkillCard;
