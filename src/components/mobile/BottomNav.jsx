import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaClock,
    FaRobot,
    FaChartLine,
    FaUserFriends,
    FaUsers,
} from "react-icons/fa";

import { COLORS } from "../../constants/theme";

const navItems = [
    { name: "Dashboard", path: "/", icon: FaHome },
    { name: "Focus", path: "/pomodoro", icon: FaClock },
    { name: "Rooms", path: "/rooms", icon: FaUsers },
    { name: "AI", path: "/planner", icon: FaRobot },
    { name: "Stats", path: "/analytics", icon: FaChartLine },
    { name: "Mentors", path: "/mentors", icon: FaUserFriends },
];

function BottomNav() {
    return (
        <nav
            className="
      fixed bottom-3 left-1/2 -translate-x-1/2
      w-[95%] max-w-md
      rounded-3xl
      border
      bg-white/90
      backdrop-blur-xl
      shadow-xl
      z-50
      lg:hidden
      "
            style={{
                borderColor: COLORS.border,
            }}
        >
            <div className="grid grid-cols-6 h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                relative
                flex flex-col items-center justify-center
                transition-all duration-300
                ${isActive
                                    ? "scale-105"
                                    : "text-slate-400"
                                }
              `
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div
                                            className="absolute top-1 h-1 w-8 rounded-full"
                                            style={{
                                                backgroundColor: COLORS.accent,
                                            }}
                                        />
                                    )}

                                    <Icon
                                        className={`
                      text-lg transition-all duration-300
                      ${isActive ? "-translate-y-0.5" : ""}
                    `}
                                        style={{
                                            color: isActive
                                                ? COLORS.accent
                                                : "#94A3B8",
                                        }}
                                    />

                                    <span
                                        className="text-[10px] mt-1 font-medium"
                                        style={{
                                            color: isActive
                                                ? COLORS.primary
                                                : "#94A3B8",
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default BottomNav;