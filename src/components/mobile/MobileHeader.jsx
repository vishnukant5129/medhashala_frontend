import { FaBars } from "react-icons/fa";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import Tooltip from "../common/Tooltip";
import { NavLink } from "react-router-dom";

function MobileHeader() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white px-4 py-4 flex justify-between items-center shadow">

                <h1 className="text-xl font-bold text-[#0B1F3A]">
                    Medhashala
                </h1>

                <Tooltip text="profile" position="bottom">
                    <NavLink
                        to="/profile"
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

            </header>

            <MobileDrawer
                open={open}
                setOpen={setOpen}
            />
        </>
    );
}

export default MobileHeader;