import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import { useDispatch, useSelector } from 'react-redux';
import { updateHistory } from "../../store/user/userSlice";
import { searchHistory } from "../../api";
import { useEffect, useState } from "react";
import Loader from '../../utils/Loader';
const DashboardLayout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const token = useSelector(store=> store.user.access_token)
  const dispatch = useDispatch();
  useEffect(()=>{
    const getHistory = async() => {
      try {
        setIsLoading(true)
        const res = await searchHistory(token);
        dispatch(updateHistory(res.data.history));
      } catch (err) {
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }
    getHistory();
  },[token])
  return (
    <div className="flex min-h-screen bg-cyan-50 text-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
            {!isLoading ? <Outlet/> : <Loader/>}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
