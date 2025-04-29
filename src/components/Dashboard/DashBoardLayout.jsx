import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-cyan-50 text-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
            <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
