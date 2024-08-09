import { IMG_CDN } from "../../Constants";
import React from "react";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div
      className="card "
      style={{
        border: "1px solid black",
      }}
    >
      <img src={IMG_CDN + cloudinaryImageId} />
      <h6>{name}</h6>
      <h6>{cuisines.join(" ")}</h6>
      <h6>{avgRatingString}</h6>
    </div>
  );
};

export default RestaurantCard;
