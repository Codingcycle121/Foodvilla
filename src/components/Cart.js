import React from "react";
import Header from "./Header";
import Footer from "./Footer";
 const Cart =()=>{
    return(
        <>
        <Header/>
        <div className="cart">
            <h1>Your cart is empty!</h1>
        </div>
        <Footer/>
        </>

    )
 }

 export default Cart;