import { useState } from "react";
const getSeverityColor = (level) => {
    switch (level) {
      case "error":
        return "bg-red-100 text-red-700";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "notice":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };
  
  const IssueItem = ({ issue }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
    <div className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{issue.message}</h4>
        <span className={`text-sm px-2 py-1 rounded ${getSeverityColor(issue.type)}`}>
          {issue.type}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{issue.code}</p>
      { showDetails && <>
        <p className="text-sm text-gray-700 mt-2">Context: {issue.context}</p>
        <p className="text-sm text-gray-700 mt-2">Selector: {issue.selector}</p>
      </>
      }
      <div className="mt-3 flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Fix Guide</button>
        {
          !showDetails ? 
            <button className="text-blue-600 hover:underline" onClick={()=> setShowDetails(true)}>Details</button>
          :  <button className="text-blue-600 hover:underline" onClick={()=> setShowDetails(false)}>Hide</button>
        }
      </div>
    </div>
  )
};
  
  export default IssueItem;
  