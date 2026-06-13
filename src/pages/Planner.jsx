import React, { useState } from "react";
import GoalForm from "../components/planner/GoalForm";
import PlanCard from "../components/planner/PlanCard";

const Planner = () => {
  const [plans, setPlans] = useState([]);

  const generatePlan = ({ goal, duration }) => {
    const generatedPlans = [
      {
        id: 1,
        title: `Week 1 - Fundamentals of ${goal}`,
        description: `Spend the first week understanding the basics of ${goal}.`,
      },
      {
        id: 2,
        title: `Week 2 - Intermediate ${goal}`,
        description: `Practice concepts and build small projects.`,
      },
      {
        id: 3,
        title: `Final Week`,
        description: `Revise all topics and create a final project in ${goal}.`,
      },
    ];

    setPlans(generatedPlans);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        AI Study Planner
      </h1>

      <GoalForm onGenerate={generatePlan} />

      {plans.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planner;