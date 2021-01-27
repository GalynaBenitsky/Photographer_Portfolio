import React, { useEffect } from "react";
import Picture from "./Picture";
import familyPics from "./templates/familyGallery";

export const FamilyPics = () => {
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.imgURL;

        // wait 1 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.imgURL);
          }, 120);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(familyPics.map((image) => loadImage(image))).catch((err) =>
      console.log("Помилка завантаження фото.", err)
    );
  }, []);

  return (
    <div>
      <h1>Сімейні Фото</h1>
      <div className="card-columns">
        {familyPics.map((createPicture) => (
          <Picture key={createPicture.id} src={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default FamilyPics;
