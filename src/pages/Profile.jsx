import React from "react";
import {
  FaEnvelope,
  FaUserGraduate,
  FaTasks,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const Profile = () => {
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

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Section */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 -mt-14 object-cover"
            />

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {user.name}
              </h1>

              <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                <FaEnvelope />
                {user.email}
              </p>

              <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                <FaUserGraduate />
                {user.role}
              </p>
            </div>

            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Edit Profile
            </button>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              About
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              {user.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 text-blue-600">
                <FaTasks />
                <span className="font-medium">Tasks Completed</span>
              </div>

              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                {user.completedTasks}
              </h3>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600">
                <FaClock />
                <span className="font-medium">Study Hours</span>
              </div>

              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                {user.studyHours}
              </h3>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-2 text-purple-600">
                <FaUsers />
                <span className="font-medium">Rooms Joined</span>
              </div>

              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                {user.roomsJoined}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;