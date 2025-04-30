import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, Search, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user/userSlice";

const Sidebar = () => {
  const firstName = useSelector(store=>store.user.firstName)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = ()=> {
    dispatch(logoutUser())
    navigate("/")
  }
  return (
    <aside className="w-64 bg-cyan-600 text-white flex flex-col p-4 space-y-6">
      <h1 className="text-2xl font-bold tracking-wide">Hi, {firstName}</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-cyan-100">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link to="/dashboard/scan" className="flex items-center gap-2 hover:text-cyan-100">
          <Search size={20} />
          Scan New
        </Link>
        <Link to="/dashboard/reports" className="flex items-center gap-2 hover:text-cyan-100">
          <FileText size={20} />
          Reports
        </Link>
        <button className="flex items-center gap-2 hover:text-cyan-100" onClick={handleLogOut}>
          <LogOut size={20} />
          Log Out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
