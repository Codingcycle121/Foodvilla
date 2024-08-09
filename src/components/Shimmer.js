import "./shimmer.css";
import React from "react";
const Shimmer = () => {
  let len = 0;
  const mapped = Array.from({ length: 20 }).map((el) => {
    return <div className="shimmercard" key={len++} />;
  });

  return (
    <>
      <div className="shimmer-header"></div>
      <div className="Shimmer-search">
        <p className="shimmer-search1"></p>
      </div>
      <div>
        <button className="shimmer-search-btn"></button>
      </div>
      <div className="restaurant-list shimmer">{mapped}</div>
      <div className="shimmer-footer"> </div>
    </>
  );
};

export default Shimmer;
