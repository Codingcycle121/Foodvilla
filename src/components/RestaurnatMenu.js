import React, { useEffect, useState } from "react"
import { json, useParams } from "react-router-dom";
import { IMG_CDN } from "../../Constants";
const RestaurantMenu=()=>{
    const [restaurant,setRestaurant]=useState([]);
    const[restaurantName,setRestaurantName]=useState([]);
    const {id}=useParams();
    useEffect(
        ()=>{
            getRestaurantMenu();
        },[]
    );

    async function getRestaurantMenu(){
       const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
       const json=await data.json();
       const json1=json?.data?.cards[2]?.card?.card?.info;
       if(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards!==undefined)
       {
           const jdata=(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
           setRestaurant(jdata)
       }
       else{
          const jdata1=(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards);
          setRestaurant(jdata1)
          
       }
       console.log(json);
       
       setRestaurantName(json1)
    }
    
    
    
    return(
        <>
            <h1>Restaurant Name :{restaurantName.name}</h1>
            <h1>Restaurant Id : {id}</h1>
            <img src={IMG_CDN+restaurantName.cloudinaryImageId} style={{
        width:'200px',
        height:'200px'
       }}/>
            <h1>Restaurant Menu:</h1> 
            <ul>
            {
                  restaurant.map((item)=>{
                 
                  return <li>{item.card.info.name} </li> 
                })
                }
                </ul>
        </>
    )
}
export default RestaurantMenu;