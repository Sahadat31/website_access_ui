import IssueTrendsChart from "./IssueTrendsChart";
import RecentReportsTable from "./RecentReportsTable";

const DashboardHome = () => {
    return (
        <div className="grid gap-6">
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Total Scans</h3>
                    <p className="text-4xl font-bold text-cyan-600">125</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Issues Found</h3>
                    <p className="text-4xl font-bold text-red-500">324</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                    <ul className="list-disc pl-4">
                        <li>https://example.com</li>
                        <li>https://product.com</li>
                    </ul>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <IssueTrendsChart />
                <RecentReportsTable />
            </div>
        </div>
    );
  };
  
  export default DashboardHome;
  