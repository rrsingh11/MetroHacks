import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import './main.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/homepage.jsx'
import Checker from "./pages/checker";
import SimpleCard from "./pages/login";
import SignupCard from "./pages/signup.jsx";
import Resources from "./pages/resources.jsx";
import ResourceData from "./pages/adminData.jsx";
import Profile from "./pages/profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/checker",
        element: <Checker/>
    },
    {
        path: "/login",
        element: <SimpleCard/>
    },
    {
        path: "/signup",
        element: <SignupCard/>
    },
    {
        path: "/resources/:hospitalId",
        element: <Resources/>
    },
    {
        path: "/admin",
        element: <ResourceData/>
    },
    {
        path: "/profile",
        element: <Profile/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
