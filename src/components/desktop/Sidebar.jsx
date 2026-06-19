import { NavLink } from "react-router-dom";
import { useState } from "react";
import Tooltip from "../common/Tooltip";
import { FaBars, FaSignOutAlt } from "react-icons/fa";

import { menuItems } from "../../data/navigation";

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
        ${collapsed ? "w-20" : "w-64"}
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

      {/* Navigation */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Tooltip
                key={item.path}
                text={collapsed ? item.name : ""}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
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
                  <Icon className="text-lg shrink-0" />

                  {!collapsed && (
                    <span className="font-medium">
                      {item.name}
                    </span>
                  )}
                </NavLink>
              </Tooltip>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1E293B] p-4">
        <Tooltip text={collapsed ? "Logout" : ""}>
          <button
            className="
              w-full
              flex items-center gap-3
              px-4 py-3
              rounded-2xl
              bg-red-500/15
              text-red-300
              hover:bg-red-500/25
              transition-all duration-200
            "
          >
            <FaSignOutAlt className="shrink-0" />

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