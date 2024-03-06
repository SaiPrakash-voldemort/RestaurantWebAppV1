import React from "react";
import chefLogo from "../imgs/chefLogo.jpg";
import cart from "../imgs/market.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartOrders = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navBar">
        <div className="left">
          <img src={chefLogo}></img>
        </div>
        <div className="middle">
          <ul>
            <Link to="">
              <li className="listsNav">Home</li>
            </Link>
            <Link to="/Menu">
              <li className="listsNav">Menu</li>
            </Link>

            <Link to="/Gallery">
              {" "}
              <li className="listsNav">Reservation</li>
            </Link>
            <Link to="/Contact">
              {" "}
              <li className="listsNav">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <Link to="/Orders">
            <img src={cart}></img>
            <span>{cartOrders.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
