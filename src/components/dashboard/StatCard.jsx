import React from "react";

const StatCard = ({ title, value, icon, progress }) => {
  return (
    <div
      className="
      relative overflow-hidden
      rounded-3xl
      p-6
      bg-gradient-to-br from-[#0B1F3A] to-[#17355d]
      text-white
      shadow-lg
      hover:scale-[1.03]
      transition duration-300
      "
    >
      {/* circle background */}
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#F4B400]/20"></div>

      <div className="flex justify-between items-center relative z-10">
        <div>
          <p className="text-gray-300">{title}</p>

          <h1 className="text-4xl font-bold mt-2">
            {value}
          </h1>

          {progress && (
            <div className="mt-4">
              <span className="bg-[#F4B400] text-[#0B1F3A] px-3 py-1 rounded-full text-sm font-semibold">
                {progress}
              </span>
            </div>
          )}
        </div>

        <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;