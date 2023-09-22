import React from "react";

const SkillBar = ({ name, percentage, color }) => {
  const getColorClass = (percentage) => {
    if (percentage >= 90) {
      return "bg-green-500";
    } else if (percentage >= 70) {
      return "bg-blue-500";
    } else if (percentage >= 50) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  const colorClass = getColorClass(percentage);

  return (
    <div className="mb-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colorClass}`}
            >
              {percentage}%
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200">
          <div
            style={{ width: `${percentage}%` }}
            className={`flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap ${colorClass}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
