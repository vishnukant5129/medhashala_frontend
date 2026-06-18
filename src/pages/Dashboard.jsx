import { useEffect, useState } from "react";
import { FaFire, FaTasks, FaChartLine, FaBookOpen } from "react-icons/fa";

import StatCard from "../components/dashboard/StatCard";
import TaskCard from "../components/dashboard/TaskCard";
import SessionCard from "../components/dashboard/SessionCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [streak] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = () => {
    try {
      // Daily Tasks
      const storedTasks = localStorage.getItem("daily_tasks");

      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);

        setTasks(parsedTasks);
        setCompletedTasksCount(
          parsedTasks.filter((task) => task.completed).length
        );
      } else {
        setTasks([]);
        setCompletedTasksCount(0);
      }

      // Recent Sessions (Planner Data)
      const storedPlans = localStorage.getItem("mock_user_plans");

      if (storedPlans) {
        const parsedPlans = JSON.parse(storedPlans);

        const formattedSessions = parsedPlans.map((plan) => ({
          id: plan.id,
          title: plan.title,
          duration: plan.duration,
          date: plan.createdAt,
        }));

        setSessions(formattedSessions);
      } else {
        setSessions([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle Task
  const handleTaskStateUpdate = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
          ...task,
          completed: !task.completed,
        }
        : task
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "daily_tasks",
      JSON.stringify(updatedTasks)
    );

    setCompletedTasksCount(
      updatedTasks.filter((task) => task.completed).length
    );
  };

  const totalTasks = tasks.length;

  const progressPercentage =
    totalTasks > 0
      ? Math.round((completedTasksCount / totalTasks) * 100)
      : 0;

  const stats = [
    {
      title: "Daily Plan",
      value: `${completedTasksCount}/${totalTasks}`,
      icon: <FaTasks />,
      progress: `${progressPercentage}% completed`,
    },
    {
      title: "Streak",
      value: `${streak} Days`,
      icon: <FaFire />,
      progress: "On Fire 🔥",
    },
    {
      title: "Productivity",
      value: `${progressPercentage}%`,
      icon: <FaChartLine />,
      progress:
        progressPercentage === 100
          ? "Excellent!"
          : "Keep Going",
    },
  ];

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

    localStorage.setItem(
      "daily_tasks",
      JSON.stringify(updatedTasks)
    );

    setCompletedTasksCount(
      updatedTasks.filter((task) => task.completed).length
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 space-y-8 text-[#1E293B]">

      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-4">
        <h1 className="text-4xl font-extrabold text-[#0B1F3A]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1 font-medium">
          Track your daily goals and study sessions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Today's Plan */}
        <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-sm">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F4B400]/15 flex justify-center items-center">
              <FaBookOpen className="text-[#F4B400] text-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Today's Plan
              </h2>

              <p className="text-gray-500 text-sm">
                Focus on priorities
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="text-gray-400 text-center py-10">
                No tasks available
              </div>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onComplete={() =>
                    handleTaskStateUpdate(task.id)
                  }
                  onDelete={handleDeleteTask}
                />
              ))
            )}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-sm">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Recent Sessions
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Synced directly with AI Study Planner
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sessions.length === 0 ? (
              <div className="text-gray-400">
                No recent sessions
              </div>
            ) : (
              sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  duration={session.duration}
                  date={session.date}
                />
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;