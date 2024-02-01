import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="nav-items">
      <img src={LOGO_URL} />
      <div className="nav-tags">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
