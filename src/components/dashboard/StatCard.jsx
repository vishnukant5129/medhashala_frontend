import React from "react";

const StatCard = ({ title, value, icon, progress }) => {
  return (
    <div
      className="
        relative overflow-hidden
        bg-white
        border border-[#E2E8F0]
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F4B400]" />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-[#0B1F3A] mt-2">
            {value}
          </h3>

          {progress && (
            <div className="mt-3">
              <span
                className="
                  px-3 py-1
                  rounded-full
                  bg-green-100
                  text-green-600
                  text-xs
                  font-semibold
                "
              >
                {progress} target reached
              </span>
            </div>
          )}
        </div>

        <div
          className="
            h-14 w-14
            rounded-2xl
            bg-[#F4B400]/15
            text-[#F4B400]
            flex items-center justify-center
            text-2xl
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;