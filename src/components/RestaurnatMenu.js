import React from "react"
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const {id}=useParams();
    return(
        <>
            <h1>Restaurant ID: {id}</h1>
            <h1>Namaste</h1>
            
        </>
    )
}
export default RestaurantMenu;