import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Tooltip from "../common/Tooltip.jsx";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  else if (hour >= 12 && hour < 17) return "Good Afternoon";
  else if (hour >= 17 && hour < 21) return "Good Evening";
  else return "Good Night";
};

const Navbar = () => {
  const name = "Vishnu";

  return (
    <header className="sticky top-0 z-40 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-[#0B1F3A]">
          {getGreeting()}, {name} 👋
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Let's stay productive today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        {/* <button
          className="
            relative
            h-11 w-11
            rounded-2xl
            bg-white
            border border-[#E2E8F0]
            flex items-center justify-center
            hover:bg-[#F4B400]/10
            transition
            shadow-sm
          "
        >
          <FaBell className="text-[#0B1F3A] text-lg" />

          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#F4B400]" />
        </button> */}

        {/* Profile */}
        <Tooltip text="profile" position="bottom">
          <NavLink
            to="/dashboard/profile"
            className="
            flex items-center gap-3
            bg-white
            border border-[#E2E8F0]
            rounded-2xl
            px-3 py-2
            shadow-sm
            hover:shadow-md
            transition
          "
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="
              w-11 h-11 rounded-full
              border-2 border-[#F4B400]
            "
            />

            <div className="hidden md:block">
              <h4 className="font-semibold text-[#0B1F3A]">
                {name}
              </h4>

              <p className="text-xs text-gray-500">
                Student
              </p>
            </div>
          </NavLink>
        </Tooltip>
      </div>
    </header>
  );
};

export default Navbar;