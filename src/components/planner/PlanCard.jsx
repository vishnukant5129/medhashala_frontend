import React from "react";

const PlanCard = ({ plan }) => {
  return (
    <div
      className="
        bg-white
        border border-[#E2E8F0]
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Accent Bar */}
      <div className="w-12 h-1 rounded-full bg-[#F4B400] mb-4" />

      <h3 className="text-xl font-bold text-[#0B1F3A]">
        {plan.title}
      </h3>

      <p className="mt-3 text-gray-500 leading-relaxed">
        {plan.description}
      </p>
    </div>
  );
};

export default PlanCard;