import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaClock,
    FaUsers,
    FaRobot,
    FaChartLine,
    FaUserFriends,
    FaUser,
    FaSignOutAlt,
    FaTimes,
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
        name: "Mentors",
        path: "/mentors",
        icon: <FaUserFriends />,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <FaUser />,
    },
];

function MobileDrawer({ open, setOpen }) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
            />

            {/* Drawer */}
            <aside
                className={`
          fixed top-0 left-0 h-full w-72 bg-[#0B1F3A]
          z-50 flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-slate-700">
                    <h1 className="text-2xl font-bold text-[#F4B400]">
                        Medhashala
                    </h1>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-lg"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu */}
                <div className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `
                flex items-center gap-4
                px-4 py-3 rounded-2xl
                transition-all duration-200

                ${isActive
                                    ? "bg-[#F4B400] text-[#0B1F3A] font-semibold"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                }
              `
                            }
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t border-slate-700 p-4">
                    <button
                        className="
              w-full
              flex items-center gap-3
              px-4 py-3
              rounded-2xl
              bg-red-500/20
              text-red-300
              hover:bg-red-500/30
              transition
            "
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}

export default MobileDrawer;