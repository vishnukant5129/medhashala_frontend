import {
  FaTasks,
  FaCheckCircle,
  FaFire,
  FaChartLine,
} from "react-icons/fa";

import StudyChart from "../components/analytics/StudyChart";
import StatsCard from "../components/analytics/StatsCard";
import WeeklySummary from "../components/analytics/WeeklySummary";
import { weeklyData } from "../data/analyticsData";

const Analytics = () => {
  const totalTasks = 120;
  const completedTasks = 90;

  const productivity = Math.round(
    (completedTasks / totalTasks) * 100
  );

  const streak = 12;

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0B1F3A]">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Track your productivity and weekly progress.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          icon={<FaTasks />}
        />

        <StatsCard
          title="Completed"
          value={completedTasks}
          icon={<FaCheckCircle />}
        />

        <StatsCard
          title="Current Streak"
          value={`${streak} Days`}
          icon={<FaFire />}
        />

        <StatsCard
          title="Productivity"
          value={`${productivity}%`}
          icon={<FaChartLine />}
        />
      </div>

      {/* Chart + Weekly Summary */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <StudyChart data={weeklyData} />
        </div>

        <div>
          <WeeklySummary data={weeklyData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;