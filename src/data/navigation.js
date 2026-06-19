import {
    FaHome,
    FaClock,
    FaUsers,
    FaRobot,
    FaChartLine,
    FaUserFriends,
    FaUser,
} from "react-icons/fa";

export const menuItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: FaHome,
    },
    {
        name: "Pomodoro",
        path: "/dashboard/pomodoro",
        icon: FaClock,
    },
    {
        name: "Study Rooms",
        path: "/dashboard/rooms",
        icon: FaUsers,
    },
    {
        name: "AI Planner",
        path: "/dashboard/planner",
        icon: FaRobot,
    },
    {
        name: "Analytics",
        path: "/dashboard/analytics",
        icon: FaChartLine,
    },
    {
        name: "Mentor Connect",
        path: "/dashboard/mentors",
        icon: FaUserFriends,
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: FaUser,
    },
];