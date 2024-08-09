import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerBody from "./ShimmerBody";
import React from "react";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  if (searchText !== "") {
    let filter = restaurants?.filter((resturant) =>
      resturant?.info?.name
        ?.toLowerCase()
        ?.includes(searchText?.toLowerCase().trim())
    );
    return filter;
  }

  return restaurants;
};

let len = 0;
const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filterrestaurants, setfilterRestaurants] = useState([]);
  const [text, settext] = useState(0);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return allRestaurants?.length === 0 ? (
    <ShimmerBody />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);

            if (text == 0) {
              setAllRestaurants(allRestaurants);
            }
          }}
        />
      </div>
      <div>
        <button
          className="search-btn"
          onClick={() => {
            {
              const data = filterData(searchText, allRestaurants);
              setfilterRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterrestaurants?.map((resturant) => {
          return (
            <Link
              to={"/restaurant/" + resturant.info.id}
              key={resturant?.info?.id}
              className="newlist"
            >
              <RestaurantCard {...resturant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
