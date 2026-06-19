import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaClock,
    FaRobot,
    FaChartLine,
    FaUser,
} from "react-icons/fa";

import { COLORS } from '../../constants/theme';

const navItems = [
    {
        path: "/",
        label: "Home",
        icon: FaHome,
    },
    {
        path: "/pomodoro",
        label: "Focus",
        icon: FaClock,
    },
    {
        path: "/planner",
        label: "AI",
        icon: FaRobot,
    },
    {
        path: "/analytics",
        label: "Stats",
        icon: FaChartLine,
    },
    {
        path: "/profile",
        label: "Profile",
        icon: FaUser,
    },
];

function BottomNav() {
    return (
        <nav
            className="
      fixed bottom-0 left-0 right-0
      bg-white/95 backdrop-blur-md
      border-t
      shadow-lg
      z-50
      lg:hidden
    "
            style={{
                borderColor: COLORS.border,
            }}
        >
            <div className="grid grid-cols-5 h-16">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                flex flex-col items-center justify-center
                gap-1
                transition-all duration-200
                ${isActive
                                    ? "scale-105 font-semibold"
                                    : "text-slate-400"
                                }
              `
                            }
                            style={({ isActive }) => ({
                                color: isActive ? COLORS.accent : COLORS.text,
                            })}
                        >
                            <Icon className="text-lg" />

                            <span className="text-[11px]">
                                {item.label}
                            </span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default BottomNav;