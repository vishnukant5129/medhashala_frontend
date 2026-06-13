import React from "react";

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {plan.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 mt-2">
        {plan.description}
      </p>
    </div>
  );
};

export default PlanCard;