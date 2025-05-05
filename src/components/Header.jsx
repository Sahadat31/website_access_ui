import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


const Header = () => {
    const user_logged_in = useSelector(store=> store.user.authenticated)
    return (
    <div className="bg-cyan-500 w-full">
        <header className="flex items-center justify-between bg-cyan-600 uppercase px-6 py-6 border-b-4 border-stone-200">
            <div>
                <Link to="/" className="text-slate-50 text-xl">
                    <img src={logo} alt="logo" className="h-16 w-auto rounded-lg shadow-lg"></img>
                </Link>
            </div>
            <div className="flex space-x-8  justify-between">
                <Link to="/about" className="text-slate-50 text-xl font-bold tracking-[3px]">About</Link>
                <Link to="/product" className="text-slate-50 text-xl font-bold tracking-[3px]">Products</Link>
                <Link to="/pricing" className="text-slate-50 text-xl font-bold tracking-[3px]">Pricing</Link>
            </div>
            <div>
                {
                    user_logged_in ? <Link to="/account" className="text-slate-50 font-bold text-xl tracking-[3px]">Account</Link>
                    : <Link to="/login" className="text-slate-50 font-bold text-xl tracking-[3px]">Login</Link>
                }
                
                
            </div>
        </header>
    </div>)
}

export default Header;