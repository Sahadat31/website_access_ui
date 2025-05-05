import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../views/AppLayout";
import Home from "../views/Home";
import About from "../views/About";
import Pricing from "../views/Pricing";
import Account from "../views/Account";
import Register from "../views/Register";
import Login from "../views/Login";
import DashBoard from "../views/DashBoard";
import ScanNew from "../components/Dashboard/ScanNew";
import Reports from "../components/Dashboard/Reports";
import DashboardHome from "../components/Dashboard/DashBoardHome";
import Product from "../views/Product";

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/dashboard",
                element: <DashBoard/>,
                children: [
                    {
                        index: true,
                        element: <DashboardHome />
                    },
                    {
                        path: "scan",
                        element: <ScanNew />
                    },
                    {
                        path: "reports",
                        element: <Reports />
                    }
                ]
            }
            
        ]
    },
    {
        path: 'account',
        element: <Account/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router;