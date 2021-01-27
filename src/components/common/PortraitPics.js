import React, { useEffect } from "react";
import portraits from "./templates/portraits";
import Picture from "./Picture";

export const PortraitPics = () => {
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.imgURL;

        // wait 1 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.imgURL);
          }, 110);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(portraits.map((image) => loadImage(image))).catch((err) =>
      console.log("Помилка завантаження фото.", err)
    );
  }, []);

  return (
    <div>
      <h1>Портрети</h1>
      <div className="card-columns">
        {portraits.map((createPicture) => (
          <Picture key={createPicture.id} src={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default PortraitPics;
