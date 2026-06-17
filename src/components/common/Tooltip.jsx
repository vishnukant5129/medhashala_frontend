import React from "react";

const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ",
};

const Tooltip = ({
    children,
    text,
    position = "right",
}) => {
    return (
        <div className="relative inline-flex group">
            {children}

            {text && (
                <div
                    className={`
            absolute ${positionClasses[position]}
            pointer-events-none
            z-50
            opacity-0 scale-95 translate-y-1
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:translate-y-0
            transition-all duration-200
          `}
                >
                    <div
                        className="
              px-3 py-2
              rounded-2xl
              bg-[#0B1F3A]/95
              backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_30px_rgb(0,0,0,0.18)]
              text-white text-sm font-medium
              whitespace-nowrap
              tracking-wide
            "
                    >
                        <span className="text-[#F4B400]">
                            •
                        </span>{" "}
                        {text}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;