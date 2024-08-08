import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-sm m-2 ">
      <div className="logo-container">
        <img
          className="w-56"
          src = {LOGO_URL}
          alt="Foodies World Logo"
        />
      </div>

      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ?"🟢" :"🔴" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about"> AboutUs</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/Grocery"> Grocery </Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login px-4"
            onClick={()=> {
              btnNameReact == "Login"
              ?setBtnNameReact ("Logout")
              : setBtnNameReact("Login")
            }}
            >

            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;