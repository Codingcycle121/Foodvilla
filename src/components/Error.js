import { useRouteError } from "react-router-dom";
import React from "react";
import 'E:/Foodvilla/index.css'
const Error=()=>{
    const err=useRouteError();
    return(
        <>
        <div className="error">
        <p>OOPS!</p>
        <p>{err.status + " "+ err.statusText}</p>
        {/* <h2>{console.error(err)}</h2> */}
        </div>
        </>
        
        
    )
}

export default Error;