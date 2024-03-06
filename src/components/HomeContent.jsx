import React from "react";
import "./HomeContent.css";
import { useNavigate } from "react-router-dom";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
const HomeContent = () => {
  let navigate = useNavigate();
  return (
    <div className="HomeContent">
      <div className="HomeContentSecond">
        <div className="title">
          <h1>Silver Spoons</h1>
        </div>
        <div className="subTitle">
          <h2>A taste you’ll remember</h2>
        </div>
        <div className="menuRes">
          <button className="Menu" onClick={() => navigate("/Menu")}>
            Menu
          </button>
          <button className="Reservation" onClick={() => navigate("/Gallery")}>
            {" "}
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
