import Card, { promotedCard } from "./Card";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const Promoted = promotedCard(Card);
  const { loggedInUser, setUserName } = useContext(UserContext);
  // const [user, setUser] = useState("");
  58;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline!!!! Please check your Internet Connection.
      </h1>
    );
  }
  let cnt = 0;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter flex m-4">
        <div className="search">
          <input
            type="text"
            className="search-box border border-black border-solid p-1"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg shadow-sm hover:shadow-lg"
            onClick={() => {
              const searched = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRestaurants(searched);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg"
            onClick={() => {
              const temp = filteredRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurants(temp);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="p-5">
          <label>UserName : </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="cards flex flex-wrap m-4 p-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.isOpen ? (
              <Promoted data={restaurant} />
            ) : (
              <Card data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
