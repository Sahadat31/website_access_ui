import { Download } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { downloadPdf } from "../../../api";

  
const HistoryListItem = ({ record }) => {
const [showDetails, setShowDetails] = useState(false)
const token = useSelector(store => store.user.access_token)
const handleClick = (e)=> {
    e.preventDefault()
    setShowDetails(prevState=> !prevState)
}
const handleDownload = async(e,issueId,url) => {
    e.preventDefault()
    try {
      const response = await downloadPdf(issueId,token)
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = url+'-accessibility-report.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('PDF download failed:', err);
    }
}
return (
<div className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm">
    <div className="flex justify-between items-center">
        <h4 className="font-semibold">URL : {record.url}</h4>
        <span className='text-sm px-2 py-1 rounded-md text-red-600 border-2 border-red-400'>
            Issues : {record.issuesFound}
        </span>
    </div>
    <p className="text-sm text-gray-600 mt-1">Date : {new Date(record.time).toLocaleDateString('en-GB')}</p>
    <div className="mt-3 flex gap-3 justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleClick}>
            {!showDetails ? 'Show Details' : 'Hide Details' }
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={(e)=>handleDownload(e,record.id,record.url)}>
            <Download/>
        </button>
    </div>
</div>
)
};

export default HistoryListItem;
