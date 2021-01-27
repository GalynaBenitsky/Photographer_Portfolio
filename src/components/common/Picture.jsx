import React from "react";
import "../../styles/Picture.css";

const Pictures = (props) => {
  return (
    <div>
      <img id="images" src={props.src} alt="gallery images"></img>
    </div>
  );
};

export default Pictures;
