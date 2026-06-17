import React, { useState } from "react";
import GoalForm from "../components/planner/GoalForm";
import PlanCard from "../components/planner/PlanCard";

const Planner = () => {
  const [plans, setPlans] = useState([]);

  const handleGenerate = (data) => {
    const newPlan = {
      id: Date.now(),
      title: `Goal: ${data.goal}`,
      description: `Complete this in ${data.duration} days with daily consistency and focused practice.`,
    };

    setPlans((prev) => [newPlan, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0B1F3A]">
          AI Study Planner
        </h1>

        <p className="text-gray-500 mt-2">
          Generate smart study plans based on your goals and duration.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl">
        <GoalForm onGenerate={handleGenerate} />
      </div>

      {/* Plans Section */}
      <div>
        {plans.length === 0 ? (
          <div
            className="
              bg-white
              border border-[#E2E8F0]
              rounded-3xl
              p-10
              text-center
              shadow-sm
            "
          >
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              No Plans Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first AI-powered study plan above.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Planner;