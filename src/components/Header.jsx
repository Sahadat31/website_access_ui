import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div className="bg-cyan-500 w-full">
        <header className="flex items-center justify-between bg-cyan-600 uppercase px-6 py-6 border-b-4 border-stone-200">
            <div>
                <Link to="/" className="text-slate-50 text-xl">Scanner</Link>
            </div>
            <div className="flex space-x-8  justify-between">
                <Link to="/about" className="text-slate-50 text-xl tracking-[3px]">About</Link>
                <Link to="/pricing" className="text-slate-50 text-xl tracking-[3px]">Pricing</Link>
            </div>
            <div>
                <Link to="/login" className="text-slate-50 text-xl tracking-[3px]">Login</Link>
                {/* <Link to="/register" className="text-slate-50 text-xl tracking-[3px]">Register</Link> */}
            </div>
        </header>
    </div>)
}

export default Header;