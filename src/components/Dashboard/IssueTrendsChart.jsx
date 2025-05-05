import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const IssueTrendsChart = () => {
  const pasthistory = useSelector(store=> store.user.history)
  const issuesPerDay = pasthistory.reduce((acc, curr) => {
    const date = new Date(curr.time).toISOString().split('T')[0]; // "YYYY-MM-DD"
  
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += curr.issuesFound;
  
    return acc;
  }, {});
  
  // Convert to desired array format
  const result = Object.entries(issuesPerDay).map(([date, issues]) => {
    const d = new Date(date);
    const options = { month: 'short', day: '2-digit' }; // e.g., "May 02"
    const formattedDate = d.toLocaleDateString('en-US', options);
    return { date: formattedDate, issues };
  });
  return (
    <div className="bg-white p-4 rounded-xl shadow-md col-span-2">
      <h3 className="text-lg font-semibold mb-4">Accessibility Issue Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={result}>
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
