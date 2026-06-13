import React from "react";
import { FaStar, FaUserGraduate } from "react-icons/fa";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {mentor.name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {mentor.role}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <FaUserGraduate />
          <span>{mentor.expertise}</span>
        </div>

        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar />
          <span>{mentor.rating}/5</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Connect
      </button>
    </div>
  );
};

export default MentorCard;