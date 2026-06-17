import React from "react";

const SessionCard = ({ title, duration, date }) => {
  return (
    <div
      className="
        p-5
        bg-white
        border border-[#E2E8F0]
        rounded-2xl
        hover:border-[#F4B400]
        hover:shadow-md
        transition-all duration-300
      "
    >
      <h3 className="font-semibold text-[#0B1F3A] text-lg">
        {title}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <span>{duration}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default SessionCard;