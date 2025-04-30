import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CategoryBreakdown = ({ data }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-medium text-gray-700 mb-2">Category Breakdown</h3>
    <ResponsiveContainer width="100%" height={150}>
      <BarChart layout="vertical" data={data}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={100} />
        <Tooltip />
        <Bar dataKey="value" fill="#00C49F" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CategoryBreakdown;
