import { useState } from "react";
import ScanForm from "./ScanNew/ScanForm";
import ScoreCard from "./ScanNew/ScoreCard";
import CategoryBreakdown from "./ScanNew/CategoryBreakdown";
import IssueList from "./ScanNew/IssueList";
import { scanUrl } from "../../api";
import { useSelector } from "react-redux";
import Loader from "../../utils/Loader";

const ScanNew = () => {
  const [url, setUrl] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeCounts, setTypeCounts] = useState({ notice: 0, warning: 0, error: 0 })
  const token = useSelector(store=>store.user.access_token)
  const handleScan = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    if (url.trim()) {
      try {
        const res = await scanUrl(url,token);
        setIssues(res.data.issues)
        const counts = res.data.issues.reduce((acc, item) => {
          const type = item.type.toLowerCase();
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, { notice: 0, warning: 0, error: 0 });
        setTypeCounts(counts);
        setShowResult(true);
        setUrl("")
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
  

  return (
    <div className="space-y-6">
      <ScanForm url={url} setUrl={setUrl} onSubmit={handleScan} />
      {isLoading && <Loader/>}
      {showResult && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Report: {url}</h2>
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
