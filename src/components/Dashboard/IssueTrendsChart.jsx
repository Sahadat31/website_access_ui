import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Apr 01", issues: 120 },
  { date: "Apr 08", issues: 98 },
  { date: "Apr 15", issues: 150 },
  { date: "Apr 22", issues: 75 },
  { date: "Apr 29", issues: 200 }
];

const IssueTrendsChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md col-span-2">
      <h3 className="text-lg font-semibold mb-4">Accessibility Issue Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="issues" fill="#06b6d4" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IssueTrendsChart;
