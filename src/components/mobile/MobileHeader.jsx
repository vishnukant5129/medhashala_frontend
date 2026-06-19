import { FaBars } from "react-icons/fa";
import { useState } from "react";
// import MobileDrawer from "./MobileDrawer";
import Tooltip from "../common/Tooltip"; // Ensure paths are correct
import { NavLink } from "react-router-dom";

function MobileHeader({ userName = "Vishnu" }) {
    const [open, setOpen] = useState(false);
    // const userName = 'vishnu';


    return (
        <>
            <header className="sticky top-0 z-40 bg-white px-4 py-3 flex justify-between items-center border-b border-slate-100 shadow-sm lg:hidden">
                {/* Left side: Hamburger Button & Title */}
                <div className="flex items-center gap-3">
                    <NavLink
                        to="/"
                    >
                        <h1 className="text-xl font-bold text-[#0B1F3A] tracking-tight">
                            Medhashala
                        </h1>
                    </NavLink>

                </div>

                {/* Right side: Profile Button */}
                <Tooltip text="Profile" position="bottom">
                    <NavLink
                        to="/profile"
                        className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full p-1 pr-3 shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="Profile"
                            className="w-8 h-8 rounded-full border-2 border-[#F4B400]"
                        />
                        <div className="text-left  xs:block">
                            <h4 className="text-xs font-semibold text-[#0B1F3A] leading-none">
                                {userName}
                            </h4>
                        </div>
                    </NavLink>
                </Tooltip>
            </header>

        </>
    );
}

export default MobileHeader;