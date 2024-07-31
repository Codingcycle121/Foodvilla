import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Applayout from "./src/Applayout.js";
import Contact from "./src/components/Contact.js";
import Cart from "./src/components/Cart.js";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/cart',
        element:<Cart/>
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);