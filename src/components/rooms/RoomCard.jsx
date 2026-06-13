import React from "react";
import { FaUsers } from "react-icons/fa";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {room.name}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 mt-2">
        {room.subject}
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <FaUsers />
          <span>{room.members} Members</span>
        </div>

        <span className="text-green-500 text-sm font-medium">
          {room.online} Online
        </span>
      </div>

      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Join Room
      </button>
    </div>
  );
};

export default RoomCard;