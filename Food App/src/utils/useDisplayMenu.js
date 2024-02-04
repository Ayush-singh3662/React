const useDisplayMenu = (resMenu) => {
    const {
        name,
        cuisines,
        costForTwoMessage,
        totalRatingsString,
        avgRating,
        areaName,
        city
      } = resMenu?.cards[0]?.card?.card?.info;
      
      const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card || resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
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
}
export default useDisplayMenu;