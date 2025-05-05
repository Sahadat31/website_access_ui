import { useSelector } from "react-redux";
import IssueTrendsChart from "./IssueTrendsChart";
import RecentReportsTable from "./RecentReportsTable";
const DashboardHome = () => {
    const userHistory = useSelector(store=> store.user.history)
    const totalIssuesFound = userHistory.reduce((acc,curr)=> acc+curr.issuesFound,0)
    return (
        <div className="grid gap-6">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Total Scans</h3>
                    <div className="h-[50%] flex items-center justify-center">
                        <p className="text-4xl text-center font-bold text-cyan-600">{userHistory.length}</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Issues Found</h3>
                    <div className="h-[50%] flex items-center justify-center">
                        <p className="text-4xl text-center font-bold text-red-500">{totalIssuesFound}</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md col-span-2">
                    <RecentReportsTable />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <IssueTrendsChart />
                
            </div>
        </div>
    );
  };
  
  export default DashboardHome;
  