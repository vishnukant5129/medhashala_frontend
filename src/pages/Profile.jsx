import React from "react";
import {
  FaEnvelope,
  FaUserGraduate,
  FaTasks,
  FaClock,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Vishnu Kant Ray",
    email: "vishnu@example.com",
    role: "Student",
    bio: "Passionate about Web Development, DSA, and AI. Building projects and continuously learning new technologies.",
    image: "https://i.pravatar.cc/150?img=12",
    completedTasks: 28,
    studyHours: 96,
    roomsJoined: 7,
  };

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div
        className="
          max-w-5xl mx-auto
          bg-white
          border border-[#E2E8F0]
          rounded-3xl
          shadow-sm
          overflow-hidden
        "
      >
        {/* Header Banner */}
        <div className="h-40 bg-[#0B1F3A]" />

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Profile Top */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-6">
            <img
              src={user.image}
              alt={user.name}
              className="
                w-32 h-32
                rounded-full
                border-4 border-[#F4B400]
                object-cover
                shadow-md
              "
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#0B1F3A]">
                {user.name}
              </h1>

              <p className="flex items-center gap-2 text-gray-500 mt-2">
                <FaEnvelope className="text-[#F4B400]" />
                {user.email}
              </p>

              <p className="flex items-center gap-2 text-gray-500 mt-1">
                <FaUserGraduate className="text-[#F4B400]" />
                {user.role}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button
                className="
                  px-6 py-3
                  bg-[#F4B400]
                  text-[#0B1F3A]
                  font-semibold
                  rounded-2xl
                  hover:scale-105
                  transition-all
                "
              >
                Edit Profile
              </button>

              {/* Desktop Logout */}
              <button
                onClick={handleLogout}
                className="
                  hidden md:flex
                  items-center gap-2
                  px-6 py-3
                  bg-red-500
                  text-white
                  font-semibold
                  rounded-2xl
                  hover:bg-red-600
                  transition-all
                "
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-3">
              About
            </h2>

            <p className="text-gray-500 leading-relaxed">
              {user.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Tasks */}
            <div
              className="
                bg-white
                border border-[#E2E8F0]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              <div className="flex items-center gap-3 text-[#F4B400]">
                <FaTasks />
                <span className="font-medium text-gray-600">
                  Tasks Completed
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B1F3A] mt-4">
                {user.completedTasks}
              </h3>
            </div>

            {/* Study Hours */}
            <div
              className="
                bg-white
                border border-[#E2E8F0]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              <div className="flex items-center gap-3 text-[#F4B400]">
                <FaClock />
                <span className="font-medium text-gray-600">
                  Study Hours
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B1F3A] mt-4">
                {user.studyHours}
              </h3>
            </div>

            {/* Rooms Joined */}
            <div
              className="
                bg-white
                border border-[#E2E8F0]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              <div className="flex items-center gap-3 text-[#F4B400]">
                <FaUsers />
                <span className="font-medium text-gray-600">
                  Rooms Joined
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B1F3A] mt-4">
                {user.roomsJoined}
              </h3>
            </div>
          </div>

          {/* Mobile Logout */}
          <div className="mt-10 md:hidden">
            <button
              onClick={handleLogout}
              className="
                w-full
                bg-red-500
                hover:bg-red-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                flex items-center justify-center gap-3
                transition
              "
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;