import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";
import { useState,useEffect } from "react";
import Shimmer from "./components/Shimmer";
import { Outlet } from "react-router-dom";




const Applayout=()=>{
  const [allRestaurants,setAllRestaurants]=useState([]);
   
  useEffect(()=>{
    getRestaurants();
  },[])

  async function getRestaurants()
    {
      const data =await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      const json=await data.json();
      
      
      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
    }
    return (allRestaurants?.length===0) ? <Shimmer/> : (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    )
}


export default Applayout;