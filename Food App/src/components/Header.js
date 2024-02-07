import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <button
            className="login-btn px-4"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
