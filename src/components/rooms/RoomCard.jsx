import React from "react";
import { FaUsers } from "react-icons/fa";

const RoomCard = ({ room }) => {
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
      <h3 className="text-xl font-bold text-[#0B1F3A]">
        {room.name}
      </h3>

      <p className="text-gray-500 mt-2">
        {room.subject}
      </p>

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2 text-gray-600">
          <FaUsers className="text-[#F4B400]" />
          <span className="font-medium">
            {room.members} Members
          </span>
        </div>

        <span className="text-[#F4B400] font-semibold text-sm">
          {room.online} Online
        </span>
      </div>

      <button
        className="
          w-full mt-6
          py-3
          rounded-2xl
          bg-[#F4B400]
          text-[#0B1F3A]
          font-semibold
          hover:scale-[1.02]
          transition-all duration-300
        "
      >
        Join Room
      </button>
    </div>
  );
};

export default RoomCard;