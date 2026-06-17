import React, { useState } from "react";

const GoalForm = ({ onGenerate }) => {
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goal || !duration) return;

    onGenerate({
      goal,
      duration,
    });

    setGoal("");
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          Create Study Plan
        </h2>

        <p className="text-gray-500 mt-2">
          Set your goal and generate a personalized roadmap.
        </p>
      </div>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Enter your goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="
            w-full
            p-4
            rounded-2xl
            border border-[#E2E8F0]
            outline-none
            focus:ring-2
            focus:ring-[#F4B400]
            text-[#0B1F3A]
          "
        />

        <input
          type="number"
          placeholder="Duration (Days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="
            w-full
            p-4
            rounded-2xl
            border border-[#E2E8F0]
            outline-none
            focus:ring-2
            focus:ring-[#F4B400]
            text-[#0B1F3A]
          "
        />

        <button
          type="submit"
          className="
            w-full
            py-4
            rounded-2xl
            bg-[#F4B400]
            text-[#0B1F3A]
            font-semibold
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          Generate Plan
        </button>
      </div>
    </form>
  );
};

export default GoalForm;