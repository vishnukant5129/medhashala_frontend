import React from "react";
import { FaFire } from "react-icons/fa";

const StreakCard = ({ streak = 7 }) => {
  return (
    <div
      className="
      relative overflow-hidden
      rounded-3xl
      p-6
      bg-gradient-to-r
      from-orange-500
      to-[#F4B400]
      text-white
      shadow-lg
      hover:scale-[1.02]
      transition-all duration-300
      "
    >
      {/* Background Circle */}
      <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/10"></div>

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-sm text-orange-100">
            Current Streak
          </p>

          <h1 className="text-5xl font-bold mt-2">
            {streak}
            <span className="text-2xl ml-2">Days</span>
          </h1>

          <p className="mt-3 text-orange-100">
            Keep learning every day 🚀
          </p>
        </div>

        <div
          className="
          h-20 w-20
          rounded-3xl
          bg-white/20
          flex items-center justify-center
          "
        >
          <FaFire className="text-5xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default StreakCard;