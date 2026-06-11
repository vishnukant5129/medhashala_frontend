import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

const Navbar = () => {
  const name = "Vishnu";

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-xl font-semibold text-slate-800">
          {getGreeting()} , {name} 👋
        </h1>
        <p className="text-sm text-slate-500">
          Let's stay productive today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <FaBell className="text-lg text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />

          <div className="hidden md:block">
            <h4 className="font-medium text-slate-800">
              {name}
            </h4>
            <p className="text-xs text-slate-500">
              Frontend Engineer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;