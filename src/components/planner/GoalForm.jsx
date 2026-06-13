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
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Create Study Plan
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your goal..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Duration (Days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Generate Plan
        </button>
      </div>
    </form>
  );
};

export default GoalForm;