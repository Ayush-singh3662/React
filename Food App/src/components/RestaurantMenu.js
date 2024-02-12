import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useDisplayMenu from "../utils/useDisplayMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(-1);
  const resMenu = useRestaurantMenu(resId);
  if (resMenu === null || !resMenu) {
    return <Shimmer />;
  }
  return useDisplayMenu(resMenu, showIndex, setShowIndex);
};

export default RestaurantMenu;
