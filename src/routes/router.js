import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import Step1 from "../pages/signUp/Step1";
import Step2 from "../pages/signUp/Step2";
import Step3 from "../pages/signUp/Step3";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
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
    }

])