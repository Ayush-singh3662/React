import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useDisplayMenu from "../utils/useDisplayMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  if (resMenu === null || !resMenu) {
    return <Shimmer />;
  }
  return useDisplayMenu(resMenu);
};

export default RestaurantMenu;
