import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./Styles.css";

const Header = () => {
  const {cart, setCart} = useContext(Cart)

  return (
    <div>
      <span className="header">React context</span>
      <ul className="nav">
        <li>
          <Link to={"/"}>Home page</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
