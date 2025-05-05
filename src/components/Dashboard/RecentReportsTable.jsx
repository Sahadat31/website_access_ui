import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
  
const RecentReportsTable = () => {
  const recentHistory = useSelector(store=> store.user.history)
  const navigate = useNavigate()
  let mappedHistory = recentHistory.map(data=> {
    return {
      id: data._id,
      url: data.url,
      date: new Date(data.time).toLocaleDateString('en-GB'),
      issues: data.issuesFound
    }
  })
  mappedHistory = mappedHistory.length>5 ? mappedHistory.slice(-5) : mappedHistory
  mappedHistory.reverse()
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-600 border-b">
            <th className="py-2">URL</th>
            <th className="py-2">Scan Date</th>
            <th className="py-2">Issues Found</th>
          </tr>
        </thead>
        <tbody>
          {mappedHistory.map((report) => (
            <tr key={report.id} className="text-sm hover:bg-gray-50">
              <td className="py-2">{report.url}</td>
              <td className="py-2">{report.date}</td>
              <td className="py-2 text-red-500 font-medium text-center">{report.issues}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {recentHistory.length>5 && 
        <div className="flex justify-end">
          <button 
          onClick={()=>navigate("/dashboard/reports")}
          className="bg-cyan-400 shadow-lg rounded-md px-4 py-2 mt-4 text-white"
          >See All</button>
        </div>
        }
    </div>
  );
};

export default RecentReportsTable;
