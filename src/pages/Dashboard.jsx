import { useState } from "react";
import { FaFire, FaTasks, FaChartLine, FaBookOpen } from "react-icons/fa";

import StatCard from "../components/dashboard/StatCard";
import TaskCard from "../components/dashboard/TaskCard";
import SessionCard from "../components/dashboard/SessionCard";

const Dashboard = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [completedStreak, setCompletedStreak] = useState(0);
  const Productivity = 0
  const handleCompleteTask = (completed) => {
    if (completed == true) {
      setCompletedTasks((prev) => prev - 1);
    } else {
      setCompletedTasks((prev) => prev + 1);
    }
  };

  const stats = [
    {
      title: "Daily Plan",
      value: completedTasks,
      icon: <FaTasks className="text-blue-500 text-3xl" />,
      progress: "0",
    },
    {
      title: "Streak",
      value: completedStreak,
      icon: <FaFire className="text-orange-500 text-3xl" />,
      progress: "100%",
    },
    {
      title: "Productivity Score",
      value: Productivity,
      icon: <FaChartLine className="text-green-500 text-3xl" />,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Plan */}
        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <FaBookOpen className="text-blue-500" />
            Today's Plan
          </h2>

          <div className="space-y-3">
            {todaysPlan.map((task, index) => (
              <TaskCard key={index} task={task} onComplete={handleCompleteTask} />
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white rounded-2xl border shadow-sm p-5">
          <h2 className="text-xl font-semibold mb-4">Recent Sessions</h2>

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