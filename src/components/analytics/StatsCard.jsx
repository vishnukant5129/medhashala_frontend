import React from "react";

const StatsCard = ({ title, value, icon }) => {
    return (
        <div
            className="
        relative
        overflow-hidden
        bg-white
        border border-[#E2E8F0]
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
        >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F4B400]" />

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#0B1F3A]">
                        {value}
                    </h2>
                </div>

                {icon && (
                    <div
                        className="
              h-14 w-14
              rounded-2xl
              bg-[#F4B400]/15
              flex items-center justify-center
              text-[#F4B400]
              text-2xl
            "
                    >
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsCard;