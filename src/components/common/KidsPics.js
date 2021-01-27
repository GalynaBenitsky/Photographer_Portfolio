import React, { useEffect } from "react";
import pictures from "./templates/galleryKids";
import Picture from "./Picture";

export const KidsPics = () => {
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.imgURL;

        // wait 1 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.imgURL);
          }, 100);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(pictures.map((image) => loadImage(image))).catch((err) =>
      console.log("Помилка завантаження фото.", err)
    );
  }, []);

  return (
    <div>
      <h1>Діти</h1>
      <div className="card-columns">
        {pictures.map((createPicture) => (
          <Picture key={createPicture.id} src={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default KidsPics;
