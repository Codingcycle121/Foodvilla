import { useState,useEffect } from "react";
const useRestaurant=()=>{
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
        return allRestaurants;
}
export default useRestaurant;