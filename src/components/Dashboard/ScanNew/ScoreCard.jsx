import { PieChart, Pie, Cell } from "recharts";

const ScoreCard = ({ score }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-medium text-gray-700 mb-2">Overall Score</h3>
    <div className="flex justify-center items-center h-40 relative">
      <PieChart width={150} height={150}>
        <Pie
          data={[{ value: score }, { value: 100 - score }]}
          innerRadius={50}
          outerRadius={70}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          <Cell fill={score>=75 ? "#00C49F": score>=50 ? "#de7f40" : "#e01d27"} />
          <Cell fill="#f0f0f0" />
          {/* <Cell fill="#0300c4" />
          <Cell fill="#4ec400" /> */}
        </Pie>
      </PieChart>
      <div className={`absolute text-2xl font-bold ${score>=75 ? 'text-green-600' : score>=50 ? 'text-orange-600': 'text-red-600'}`}>{score}%</div>
    </div>
  </div>
);

export default ScoreCard;
