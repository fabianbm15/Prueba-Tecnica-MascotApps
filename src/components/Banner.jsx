import React from "react";
import pets from "../assets/pets.png";
import pets2x from "../assets/pets@2x.png";
import "./styles.css";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <img id="petsImageBanner" src={pets2x} alt="pets.png" />
        <div id="contentTextBanner">
          <h2 id="h2Banner">Tus mascotas son parte de tu familia</h2>
          <h1 id="h1Banner">Te ayudamos a cuidarlas</h1>
          <div id="bannerButtons">
            <button id="buyIdTag">Compra una placa</button>
            <button id="haveIdTag">Tengo una Placa</button>
          </div>
        </div>
      </div>
    </>
  );
}
