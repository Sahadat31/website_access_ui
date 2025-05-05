import { useState } from "react";
import ScanForm from "./ScanNew/ScanForm";
import ScoreCard from "./ScanNew/ScoreCard";
import CategoryBreakdown from "./ScanNew/CategoryBreakdown";
import IssueList from "./ScanNew/IssueList";
import { downloadPdf, scanUrl, searchHistory } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";
import { updateHistory } from "../../store/user/userSlice";
import { Download } from "lucide-react";


const ScanNew = () => {
  const [url, setUrl] = useState("");
  const [issueId, setIssueId] = useState("")
  const [showResult, setShowResult] = useState(false);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeCounts, setTypeCounts] = useState({ notice: 0, warning: 0, error: 0 })
  const token = useSelector(store=>store.user.access_token)
  const dispatch = useDispatch()
  const handleScan = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    setShowResult(false)
    if (url.trim()) {
      try {
        const res = await scanUrl(url,token);
        setIssues(res.data.issues);
        setIssueId(res.data.id);
        const history = await searchHistory(token);
        dispatch(updateHistory(history.data.history));
        const counts = res.data.issues.reduce((acc, item) => {
          const type = item.type.toLowerCase();
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, { notice: 0, warning: 0, error: 0 });
        setTypeCounts(counts);
        setShowResult(true);
      } catch(err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }

    } 
  };

  const overallScore = Math.ceil((typeCounts.notice/issues.length)*100);
  const categoryData = [
    { name: "Error", value: typeCounts.error },
    { name: "Warning", value: typeCounts.warning },
    { name: "Info", value: typeCounts.notice },
  ];
  
  const handleDownload = async(e) => {
    e.preventDefault()
    try {
      const response = await downloadPdf(issueId,token)
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'accessibility-report.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('PDF download failed:', err);
    }
  }
  return (
    <div className="space-y-6">
      <ScanForm url={url} setUrl={setUrl} onSubmit={handleScan} />
      {isLoading && <Loader/>}
      {showResult && (
        <div className="space-y-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Report: {url}</h2>
            <button className="flex justify-between bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" onClick={handleDownload}> 
              <Download/>
              <span className="pl-2">Report</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScoreCard score={overallScore} />
            <CategoryBreakdown data={categoryData} />
          </div>
          <IssueList issues={issues} />
        </div>
      )}
    </div>
  );
};

export default ScanNew;
