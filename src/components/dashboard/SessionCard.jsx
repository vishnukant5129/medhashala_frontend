import React from "react";

const SessionCard = ({ title, duration, date }) => {
  return (
    <div className="p-4 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#F4B400] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <h3 className="font-bold text-[#0B1F3A] text-base group-hover:text-[#F4B400] transition-colors duration-200">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-xs font-medium text-gray-400">
        <span className="bg-[#F8FAFC] px-2 py-1 rounded-md text-gray-600 border border-[#E2E8F0]">
          {duration}
        </span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default SessionCard;