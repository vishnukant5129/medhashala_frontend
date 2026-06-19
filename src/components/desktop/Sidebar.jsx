import { NavLink } from "react-router-dom";
import { useState } from "react";
import Tooltip from "../common/Tooltip.jsx";

import {
  FaHome,
  FaClock,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaUserFriends,
  FaUser,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "Pomodoro",
    path: "/pomodoro",
    icon: <FaClock />,
  },
  {
    name: "Study Rooms",
    path: "/rooms",
    icon: <FaUsers />,
  },
  {
    name: "AI Planner",
    path: "/planner",
    icon: <FaRobot />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FaChartLine />,
  },
  {
    name: "Mentor Connect",
    path: "/mentors",
    icon: <FaUserFriends />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        bg-[#0B1F3A]
        text-white
        h-screen
        flex flex-col
        border-r border-[#1E293B]
        transition-all duration-300
        ${collapsed ? "w-20" : "w-55"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-[#1E293B]">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#F4B400]">
              Medhashala
            </h1>
          </div>
        )}
        <Tooltip text={collapsed ? "Open Menu" : "Close Menu"}>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
          p-2
          rounded-xl
          hover:bg-white/10
          transition
        "
          >
            <FaBars />
          </button>
        </Tooltip>

      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Tooltip key={item.path} text={collapsed ? item.name : ""}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4
                  px-4 py-3 rounded-2xl
                  transition-all duration-200

                  ${isActive
                    ? "bg-[#F4B400] text-[#0B1F3A] shadow-lg font-semibold"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `
                }
              >
                <span className="text-lg">{item.icon}</span>

                {!collapsed && (
                  <span className="font-medium">
                    {item.name}
                  </span>
                )}
              </NavLink>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="border-t border-[#1E293B] p-4">
        <Tooltip text={collapsed ? "Logout" : ""}>
          <button
            className="
              flex items-center gap-3
              w-full
              px-4 py-3
              rounded-2xl
              bg-red-500/15
              text-red-300
              hover:bg-red-500/25
              transition
            "
          >
            <FaSignOutAlt />

            {!collapsed && (
              <span className="font-medium">
                Logout
              </span>
            )}
          </button>
        </Tooltip>
      </div>
    </aside>
  );
};

export default Sidebar;