import './shimmer.css'
import React from 'react';
const Shimmer=()=>{

    const mapped= Array.from({length :20}).map((el)=>{
        return <div className="shimmercard"/>
    })
   


    return (
        <>
         
        <div className='shimmer-header'></div>
        <div className='shimmer-search'>
        <input type='text' placeholder=''/>
        </div>
        <div >
            <button className='shimmer-search-btn'></button>
        </div>
        <div className="restaurant-list shimmer">
          {
            mapped
          }
        </div>
        <div className='shimmer-footer'> </div>
        </>
    )
};


export default Shimmer;