import { useSelector } from "react-redux";

const reports = [
    { url: "https://example.com", date: "2025-04-29", issues: 32 },
    { url: "https://product.com", date: "2025-04-27", issues: 56 },
    { url: "https://brand.com", date: "2025-04-25", issues: 18 }
  ];
  
  const RecentReportsTable = () => {
    const recentHistory = useSelector(store=> store.user.history)
    let mappedHistory = recentHistory.map(data=> {
      return {
        id: data._id,
        url: data.url,
        date: new Date(data.time).toLocaleDateString('en-GB'),
        issues: data.issuesFound
      }
    })
    mappedHistory = mappedHistory.length>5 ? mappedHistory.slice(-5) : mappedHistory
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
            {mappedHistory.map((report, i) => (
              <tr key={i} className="text-sm hover:bg-gray-50">
                <td className="py-2">{report.url}</td>
                <td className="py-2">{report.date}</td>
                <td className="py-2 text-red-500 font-medium text-center">{report.issues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentReportsTable;
  