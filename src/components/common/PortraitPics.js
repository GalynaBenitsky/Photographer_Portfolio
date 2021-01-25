import React from "react";
import portraits from "./templates/portraits";
import Picture from "./Picture";

export const PortraitPics = () => {
  return (
    <div>
      <h1>Портрети</h1>
      <div className="card-columns mt-3">
        {portraits.map((createPicture) => (
          <Picture key={createPicture.id} img={createPicture.imgURL} />
        ))}
      </div>
    </div>
  );
};
export default PortraitPics;
