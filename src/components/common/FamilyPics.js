import React from "react";
import Picture from "./Picture";
import familyPics from "./templates/familyGallery";

export const FamilyPics = () => {
  return (
    <div>
      <h1>Сімейні Фото</h1>
      <div className="card-columns mt-3">
        {familyPics.map((createPicture) => (
          <Picture key={createPicture.id} img={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default FamilyPics;
