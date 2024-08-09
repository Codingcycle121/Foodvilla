import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Shimmer from "./components/Shimmer";
import { Outlet } from "react-router-dom";
import useOnline from "./utils/useOnline";
import useRestaurant from "./utils/useRestaurant";
const Applayout = () => {
  const isOnline = useOnline();
  if (isOnline !== true) {
    return <h1>Please, check your internet connection</h1>;
  }
  const allRestaurants = useRestaurant();

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
