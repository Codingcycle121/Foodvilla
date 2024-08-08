import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import Applayout from "./src/Applayout.js";
import Contact from "./src/components/Contact.js";
import Cart from "./src/components/Cart.js";
import Body from "./src/components/Body.js";
import RestaurantMenu from "./src/components/RestaurnatMenu.js";
import Profile from "./src/components/ProfileClass.js"

const About=lazy(()=>import("./src/components/About"))
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/about',
                element:
                <Suspense fallback={<h1>loading...</h1>}><About/></Suspense>,
                children:[
                    {
                        path:'profile',
                        element:<Profile/>
                    }
                ]
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>
            }
        ]
    },
    
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);