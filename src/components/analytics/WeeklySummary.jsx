import React from "react";

const WeeklySummary = ({ data }) => {
    return (
        <div
            className="
        bg-white
        border border-[#E2E8F0]
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all duration-300
      "
        >
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                    Weekly Summary
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Daily completed tasks overview
                </p>
            </div>

            {/* Days */}
            <div className="space-y-3">
                {data.map((item) => (
                    <div
                        key={item.day}
                        className="
              flex items-center justify-between
              p-4
              rounded-2xl
              border border-[#E2E8F0]
              hover:bg-[#F8FAFC]
              hover:border-[#F4B400]
              transition-all duration-300
            "
                    >
                        <div className="flex items-center gap-3">
                            {/* Accent Dot */}
                            <div className="w-3 h-3 rounded-full bg-[#F4B400]" />

                            <span className="font-medium text-[#0B1F3A]">
                                {item.day}
                            </span>
                        </div>

                        <div
                            className="
                px-4 py-1.5
                rounded-full
                bg-[#F4B400]/15
                text-[#0B1F3A]
                font-semibold
              "
                        >
                            {item.completed} Tasks
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklySummary;