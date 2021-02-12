import React from "react";
import mainPhoto from "./assets/img/main.jpeg";
import "../styles/Main.css";
import Social from "./common/Social";
import socialMedia from "./common/templates/socialMedia";

const Main = () => {
  return (
    <div className="main">
      <div className="intro">
        <h1 className="head display-3">Привіт, я Тома,</h1>
        <p className="content lead">
          твій фотограф, який черпає натхнення з усього, що навколо. Якщо тобі
          важливий професійний підхід, задоволення від зйомки і фото, тоді тобі
          до мене.
        </p>

        <div className="social">
          {socialMedia.map((createSocialMedia) => {
            return (
              <Social
                key={createSocialMedia.id}
                icon={createSocialMedia.icon}
                url={createSocialMedia.url}
              />
            );
          })}
        </div>
      </div>

      <img className="picture" src={mainPhoto} alt="main"></img>
    </div>
  );
};

export default Main;
