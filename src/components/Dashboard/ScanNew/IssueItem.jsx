const getSeverityColor = (level) => {
    switch (level) {
      case "Critical":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Minor":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };
  
  const IssueItem = ({ issue }) => (
    <div className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{issue.title}</h4>
        <span className={`text-sm px-2 py-1 rounded ${getSeverityColor(issue.severity)}`}>
          {issue.severity}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{issue.guideline}</p>
      <p className="text-sm text-gray-700 mt-2">{issue.details}</p>
      <div className="mt-3 flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Fix Guide</button>
        <button className="text-blue-600 hover:underline">Details</button>
      </div>
    </div>
  );
  
  export default IssueItem;
  