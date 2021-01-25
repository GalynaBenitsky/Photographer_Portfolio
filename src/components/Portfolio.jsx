import React from "react";
import KidsPics from "./common/KidsPics";
import PortraitPics from "./common/PortraitPics";
import FamilyPics from "./common/FamilyPics";


import "../styles/Piture.css";

const Portfolio = () => {
  return (
    <div className="container">
      <KidsPics />
      <PortraitPics />
      <FamilyPics />
    </div>
  );
};

export default Portfolio;