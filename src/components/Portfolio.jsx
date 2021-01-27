import React from "react";
import KidsPics from "./common/KidsPics";
import PortraitPics from "./common/PortraitPics";
import FamilyPics from "./common/FamilyPics";
import '../styles/Picture.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <KidsPics />
      <PortraitPics />
      <FamilyPics />
    </div>
  );
};

export default Portfolio;
