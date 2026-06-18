import { useState } from "react";
import GoalForm from "../components/planner/GoalForm";
import DailyTaskForm from "../components/dailyTask/DailyTaskForm";

const Planner = () => {
  const [activeTab, setActiveTab] = useState("goal");

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0B1F3A]">
          Planner
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your study goals and daily tasks
        </p>
      </div>

      {/* Navigation Boxes */}
      <div className="flex gap-5 mb-8">

        <button
          onClick={() => setActiveTab("goal")}
          className={`px-8 py-4 rounded-2xl font-semibold transition
          ${activeTab === "goal"
              ? "bg-[#F4B400] text-[#0B1F3A]"
              : "bg-white border border-[#E2E8F0]"
            }`}
        >
          Study Goals
        </button>

        <button
          onClick={() => setActiveTab("daily")}
          className={`px-8 py-4 rounded-2xl font-semibold transition
          ${activeTab === "daily"
              ? "bg-[#F4B400] text-[#0B1F3A]"
              : "bg-white border border-[#E2E8F0]"
            }`}
        >
          Daily Tasks
        </button>

      </div>

      {/* Render */}
      {activeTab === "goal" ? (
        <GoalForm />
      ) : (
        <DailyTaskForm />
      )}
    </div>
  );
};

export default Planner;