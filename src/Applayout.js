import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
// import Shimmer from "./components/Shimmer";
import { Outlet } from "react-router-dom";
import useOnline from "./utils/useOnline";




const Applayout=()=>{
  const isOnline=useOnline();
  if(isOnline!==true)
  {
    return <h1>Please, check your internet connection</h1>
  }
  
  
  
    return   (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    )
}


export default Applayout;