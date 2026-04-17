import { useMemo } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useTimeline } from "../contexts/TimelineContext";

const COLORS = ["#7c3aed", "#1f5b49", "#4ade80", "#facc15"];

const Stats = () => {
  const { entries } = useTimeline();

  const chartData = useMemo(() => {
    const counts = entries.reduce((acc, entry) => {
      acc[entry.type] = (acc[entry.type] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [entries]);

  return (
    <div className="container-width py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Friendship Analytics
        </h1>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <h3 className="text-sm font-semibold text-[#1f5b49]">By Interaction Type</h3>

          <div className="mt-6 flex justify-center overflow-x-auto">
            <PieChart width={420} height={320}>
              <Pie
                data={chartData}
                cx="50%"
                cy="45%"
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
                paddingAngle={6}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;