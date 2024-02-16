import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="nav-items flex justify-between m-4 py-4 border-2 border-black shadow-lg bg-sky-100">
      <Link to={"/"}><img src={LOGO_URL} className="h-24 mx-4"/></Link>
      <div className="nav-tags flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to={"/"}>Home</Link></li>
          <li className="px-4">
           <Link to={"/about"}>About</Link> 
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link> 
          </li>
          <li className="px-4 font-bold text-lg"><Link to={"/cart"}>Cart({cartItems.length} items)</Link></li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <button
            className="login-btn px-4"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
