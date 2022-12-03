import { createBrowserRouter, Navigate } from "react-router-dom";
import Attendance from "../pages/Attendents/Attendance";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import Step1 from "../pages/signUp/Step1";
import Step2 from "../pages/signUp/Step2";
import Step3 from "../pages/signUp/Step3";


let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Authorization": "Bearer " + localStorage.getItem("token")
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/signup" />,
    },
    {
        path: "/signup",
        element: <SignUp />,
        children: ([
            {
                path: "/signup",
                element: < Step1 />

            },
            {
                path: "/signup/step2",
                element: <Step2 />
            },
            {
                path: "/signup/step3",
                element: <Step3 />
            }
        ])
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/attendance",
        loader: () => fetch("https://test.nexisltd.com/test", {
            headers: headersList
        }),
        element: <Attendance />
    }

])