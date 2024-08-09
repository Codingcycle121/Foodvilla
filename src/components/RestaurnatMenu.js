import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN } from "../../Constants";
import { FETCH_URL } from "../../Constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [restaurantName, setRestaurantName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      FETCH_URL + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const json1 = json?.data?.cards[2]?.card?.card?.info;
    if (
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards !== undefined
    ) {
      const jdata =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      setRestaurant(jdata);
    } else {
      const jdata1 =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.categories[0]?.itemCards;
      setRestaurant(jdata1);
    }

    setRestaurantName(json1);
  }

  return (
    <>
      <div className="menu">
        <table className="table">

          <tbody>

          <tr className="menuheading1">
            <th className="menuheading">MENU</th>
          </tr>
          <tr className="tableheading">
            <th className="tablehead">Restaurant Logo </th>
            <th className="tablehead">Restaurant Name </th>
            <th className="tablehead">Restaurant Id </th>
            <th className="tablehead">Restaurant Menu </th>
          </tr>
          <tr className="tabledata">
            <td className="tabledatas">
              <img
                className="imgmenu"
                src={IMG_CDN + restaurantName.cloudinaryImageId}
              />
            </td>
            <td className="tabledatas">{restaurantName.name}</td>
            <td className="tabledatas">{id}</td>
            <td className="tabledatas">
              <ul>
                {restaurant?.map((item) => {
                  return (
                    <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name}{" "}
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RestaurantMenu;
