import React from "react";

const StatCard = ({ title, value, icon, progress }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {progress && (
          <p className="text-xs text-green-500 mt-1">{progress} target reached</p>
        )}
      </div>
      <div>{icon}</div>
    </div>
  );
};

export default StatCard;