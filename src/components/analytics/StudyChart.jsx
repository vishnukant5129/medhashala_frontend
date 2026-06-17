import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const StudyChart = ({ data }) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          Weekly Productivity
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your completed study sessions this week
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F4B400" />
              <stop offset="100%" stopColor="#0B1F3A" />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" />

          <XAxis
            dataKey="day"
            tick={{ fill: "#64748B" }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fill: "#64748B" }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
            }}
          />

          <Line
            type="monotone"
            dataKey="completed"
            stroke="url(#lineColor)"
            strokeWidth={4}
            dot={{
              fill: "#F4B400",
              stroke: "#fff",
              strokeWidth: 2,
              r: 5,
            }}
            activeDot={{
              r: 8,
              fill: "#0B1F3A",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudyChart;