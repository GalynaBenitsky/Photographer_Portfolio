import React from "react";
import pictures from "./templates/galleryKids";
import Picture from "./Picture";

export const KidsPics = () => {
  return (
    <div>
      <h1>Діти</h1>
      <div className="card-columns mt-3">
        {pictures.map((createPicture) => (
          <Picture key={createPicture.id} img={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default KidsPics;
