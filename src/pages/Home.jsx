import React from "react";
import "./Home.css";
import HomeContent from "../components/HomeContent";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <div className="homeDiv">
      <div className="mainSection">
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
