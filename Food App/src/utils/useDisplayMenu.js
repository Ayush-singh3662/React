import { useState } from "react";
import RestaurantCategory from "../components/RestaurantCategory";

const useDisplayMenu = (resMenu, showIndex, setShowIndex) => {
  // const [showIndex, setShowIndex] = useState(0);
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
    areaName,
    city,
  } = resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card ||
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  const category =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-6">{name}</h1>
      <h2>
        {areaName}, {city}
      </h2>
      <p>
        <strong>{cuisines.join(", ")}</strong> - <em>{costForTwoMessage}</em>
      </p>
      <h3>{totalRatingsString}</h3>
      <h3>{avgRating} stars</h3>
      {category.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.title}
          items={c?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default useDisplayMenu;
