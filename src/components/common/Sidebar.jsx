import { NavLink } from "react-router-dom";
import { useState } from "react";

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
    bg-slate-950 text-white
    h-screen
    transition-all duration-300
    flex flex-col
    border-r border-slate-800
    ${collapsed ? "w-20" : "w-55"}
  `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-800">
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold text-violet-400">
              Medhashala
            </h1>
            <p className="text-xs text-slate-400">
              Productivity Platform
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-800"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3 rounded-xl
                transition-all duration-200
                ${isActive
                  ? "bg-violet-600 text-white shadow-lg"
                  : "hover:bg-slate-800 text-slate-300"
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
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="border-t border-slate-800 p-4">
        {/* {!collapsed && (
          <div className="mb-4">
            <h3 className="font-semibold">
              Vishnu
            </h3>
            <p className="text-xs text-slate-400">
              Frontend Engineer
            </p>
          </div>
        )} */}

        <button
          className="
            flex items-center gap-3
            w-full
            px-4 py-3
            rounded-xl
            bg-red-500/20
            hover:bg-red-500/30
            text-red-400
          "
        >
          <FaSignOutAlt />

          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;