import { useState } from "react";
import {
  FaFire,
  FaTasks,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";

import StatCard from "../components/dashboard/StatCard";
import TaskCard from "../components/dashboard/TaskCard";
import SessionCard from "../components/dashboard/SessionCard";

const Dashboard = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [completedStreak] = useState(0);

  const productivity = 0;

  const handleCompleteTask = (completed) => {
    if (completed) {
      setCompletedTasks((prev) => prev - 1);
    } else {
      setCompletedTasks((prev) => prev + 1);
    }
  };

  const stats = [
    {
      title: "Daily Plan",
      value: completedTasks,
      icon: <FaTasks />,
      progress: "0%",
    },
    {
      title: "Streak",
      value: completedStreak,
      icon: <FaFire />,
      progress: "100%",
    },
    {
      title: "Productivity Score",
      value: `${productivity}%`,
      icon: <FaChartLine />,
      progress: null,
    },
  ];

  const todaysPlan = [
    "Solve 2 LeetCode Problems",
    "Revise DBMS",
    "Complete React Module",
    "Mock Interview Practice",
  ];

  const recentSessions = [
    {
      title: "DSA Practice",
      duration: "2 Hours",
      date: "Today",
    },
    {
      title: "DBMS Revision",
      duration: "1.5 Hours",
      date: "Yesterday",
    },
    {
      title: "React Development",
      duration: "3 Hours",
      date: "Yesterday",
    },
    {
      title: "System Design",
      duration: "1 Hour",
      date: "2 Days Ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 sm:p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0B1F3A]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Track your daily goals and study sessions.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            progress={stat.progress}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Today's Plan */}
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
          <div className="flex items-center gap-3 mb-6">
            <div
              className="
                w-12 h-12
                rounded-2xl
                bg-[#F4B400]/15
                flex items-center justify-center
              "
            >
              <FaBookOpen className="text-[#F4B400] text-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Today's Plan
              </h2>

              <p className="text-sm text-gray-500">
                Focus on your top priorities
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {todaysPlan.map((task, index) => (
              <TaskCard
                key={index}
                task={task}
                onComplete={handleCompleteTask}
              />
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Recent Sessions
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your latest study activities
            </p>
          </div>

          <div className="space-y-4">
            {recentSessions.map((session, index) => (
              <SessionCard
                key={index}
                title={session.title}
                duration={session.duration}
                date={session.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;