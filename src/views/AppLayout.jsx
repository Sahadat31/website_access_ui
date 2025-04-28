import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header/>
            <div>
                <main>
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default AppLayout;