import { useState } from "react";
import ScanForm from "./ScanNew/ScanForm";
import ScoreCard from "./ScanNew/ScoreCard";
import CategoryBreakdown from "./ScanNew/CategoryBreakdown";
import IssueList from "./ScanNew/IssueList";
import { scanUrl } from "../../api";
import { useSelector } from "react-redux";

const ScanNew = () => {
  const [url, setUrl] = useState("");
  const [showResult, setShowResult] = useState(false);
  const token = useSelector(store=>store.user.access_token)
  const handleScan = async(e) => {
    e.preventDefault();
    if (url.trim()) setShowResult(true);
    const res = await scanUrl(url,token);
    console.log(res.data)
  };

  const overallScore = 92;
  const categoryData = [
    { name: "Perception", value: 90 },
    { name: "Navigation", value: 98 },
    { name: "Interaction", value: 88 },
  ];
  const issues = [
    {
      id: 1,
      severity: "Medium",
      title: "Missing Alt Text on Product Images",
      guideline: "WCAG 2.1 - 1.1.1 Non-text Content (Level A)",
      details: "5 product images on the shop page lack alternative text...",
    },
    {
      id: 2,
      severity: "Critical",
      title: "Low Contrast Text in Footer",
      guideline: "WCAG 2.1 - 1.4.3 Contrast (Minimum) (Level AA)",
      details: "Light gray text on white background has low contrast...",
    },
  ];

  return (
    <div className="space-y-6">
      <ScanForm url={url} setUrl={setUrl} onSubmit={handleScan} />
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
