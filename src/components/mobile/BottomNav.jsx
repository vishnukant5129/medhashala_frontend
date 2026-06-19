import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/theme";
import { menuItems } from "../../data/navigation";

function BottomNav() {
    const bottomNavItems = menuItems.filter(
        (item) => item.name !== "Profile"
    );

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
            <div
                className="h-16"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${bottomNavItems.length},1fr)`,
                }}
            >
                {bottomNavItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/dashboard"} 
                            className={({ isActive }) => `
                relative
                flex flex-col items-center justify-center
                transition-all duration-300
                ${isActive ? "scale-105" : ""}
              `}
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

                                    {/* Icon */}
                                    <Icon
                                        className={`text-lg transition-all duration-300 ${isActive ? "-translate-y-0.5" : ""
                                            }`}
                                        style={{
                                            color: isActive
                                                ? COLORS.accent
                                                : "#94A3B8",
                                        }}
                                    />

                                    {/* Label */}
                                    <span
                                        className="text-[9px] mt-1 font-bold truncate"
                                        style={{
                                            color: isActive
                                                ? COLORS.primary
                                                : "#94A3B8",
                                        }}
                                    >
                                        {item.shortName || item.name}
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