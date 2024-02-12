import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({items, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="bg-gray-100 p-4 w-1/2 mx-auto my-4 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{items.title}({items.itemCards.length})</span>
                <span>🔻</span>
            </div>
            <div>
                {showItems && <ItemList items={items.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;