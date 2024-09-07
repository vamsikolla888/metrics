import { createBrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./auth/SignIn";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Test from "./components/Test";
import Devices from "./components/Devices/Devices";

const routerArr = [
    {
        path: "/",
        element: <Navigate to="/auth/signin" replace />, // Redirect root to /auth/signin
    },
    {
        path: "/auth",
        children: [
            {
                path: "signin", // Relative path (correct)
                element: <SignIn />
            }
        ]
    },
    {
        path: "/",
        element: <DefaultLayout />, // Layout for main application pages
        children: [
            {
                path: "dashboard", // Relative path
                element: <Dashboard />
            },
            {
                path: "devices", // Relative path
                element: <Devices />
            },{
                path: "metrics", // Relative path
                element: <Test />
            },{
                path: "favorities", // Relative path
                element: <Ecommerce />
            },
            {
                path: "*",
                element: <Navigate to="/auth/signin" replace /> // Catch-all redirect
            }
        ]
    }
];

export const router = createBrowserRouter(routerArr);
