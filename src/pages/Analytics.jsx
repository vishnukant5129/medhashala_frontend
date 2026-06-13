import StudyChart from "../components/analytics/StudyChart";
import StatsCard from "../components/analytics/StatsCard";
import WeeklySummary from "../components/analytics/WeeklySummary"
import { weeklyData } from "../data/analyticsData";

const Analytics = () => {
  const totalTasks = 120;
  const completedTasks = 90;

  const productivity = Math.round(
    (completedTasks / totalTasks) * 100
  );

  const streak = 12;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Analytics Dashboard
      </h1>

      {/* Cards */}

      <div className="grid md:grid-cols-4 gap-4">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
        />

        <StatsCard
          title="Completed"
          value={completedTasks}
        />

        <StatsCard
          title="Current Streak"
          value={`${streak} Days`}
        />

        <StatsCard
          title="Productivity"
          value={`${productivity}%`}
        />
      </div>

      <StudyChart data={weeklyData} />
      <WeeklySummary data={weeklyData} />
    </div>
  );
};

export default Analytics;