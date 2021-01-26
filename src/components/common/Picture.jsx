import React from "react";
import "../../styles/Piture.css";

const Pictures = (props) => {
  return (
    <div>
      <img src={props.src} alt="gallery images"></img>
    </div>
  );
};

export default Pictures;
