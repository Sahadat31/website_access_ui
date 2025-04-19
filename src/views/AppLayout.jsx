import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div>
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