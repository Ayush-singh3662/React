import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Redux/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="m-auto p-4 w-6/12">
            <button className="bg-stone-200 p-2 font-serif text-lg rounded-lg shadow-lg" onClick={handleClearCart}>Clear Cart</button>
        </div>
        {cartItems.length === 0 && <div><h1>Add some items to Cart!! </h1></div>}
        <div className="w-6/12 m-auto bg-gray-200 rounded-lg">
            <ItemList items={cartItems} />
        </div>
    </div>
};

export default Cart;