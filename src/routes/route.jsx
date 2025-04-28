import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../views/AppLayout";
import Home from "../views/Home";
import About from "../views/About";
import Pricing from "../views/Pricing";
import Account from "../views/Account";
import Register from "../views/Register";
import Login from "../views/Login";

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