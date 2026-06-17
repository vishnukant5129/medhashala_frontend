import React from "react";
import { FaStar, FaUserGraduate } from "react-icons/fa";

const MentorCard = ({ mentor }) => {
  return (
    <div
      className="
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
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="
            w-16 h-16
            rounded-full
            object-cover
            border-4 border-[#F4B400]/20
          "
        />

        <div>
          <h3 className="text-lg font-bold text-[#0B1F3A]">
            {mentor.name}
          </h3>

          <p className="text-sm text-gray-500">
            {mentor.role}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
          <FaUserGraduate className="text-[#F4B400]" />

          <span>{mentor.expertise}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaStar className="text-[#F4B400]" />

          <span className="font-medium text-[#0B1F3A]">
            {mentor.rating}/5
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full
          mt-6
          bg-[#F4B400]
          text-[#0B1F3A]
          font-semibold
          py-3
          rounded-2xl
          hover:scale-[1.02]
          transition-all duration-300
        "
      >
        Connect
      </button>
    </div>
  );
};

export default MentorCard;