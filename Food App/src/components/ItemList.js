import { useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants";
import { addItem } from "../Redux/CartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item)=> (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name} - </span>
                            <span className="font-bold">₹{item.card.info.price/100}</span>
                        </div>
                        <p>
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="rounded-lg mx-10 p-2 shadow-lg bg-black text-white" 
                            onClick={()=>handleClick(item)}>Add +</button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;