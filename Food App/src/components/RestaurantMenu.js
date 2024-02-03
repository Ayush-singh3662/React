import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResMenu(json?.data);
  };
  if (resMenu === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
    areaName,
    city,
  } = resMenu?.cards[0]?.card?.card?.info;
  console.log(resMenu);
  const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {areaName}, {city}
      </h2>
      <p>
        <strong>{cuisines.join(", ")}</strong> - <em>{costForTwoMessage}</em>
      </p>
      <h3>{totalRatingsString}</h3>
      <h3>{avgRating} stars</h3>
      <h2>Menu</h2>
      {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} - {"Rs. " + item?.card?.info?.price / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
