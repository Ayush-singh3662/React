import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="nav-items">
      <img src={LOGO_URL} />
      <div className="nav-tags">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li>
           <Link to={"/about"}>About</Link> 
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link> 
          </li>
          <li>Cart</li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <button
            className="login-btn"
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
