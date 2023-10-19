import React from "react";
import pets from "../assets/pets.png";
import pets2x from "../assets/pets@2x.png";
import "./styles.css";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <img id="petsImageBanner" src={pets2x} alt="pets.webp" />
        <div>
          <h2>Tus mascotas son parte de tu familia</h2>
          <h1>Te ayudamos a cuidarlas</h1>
          <div>
            <button>Compra una placa</button>
            <button>Tengo una Placa</button>
          </div>
        </div>
      </div>
    </>
  );
}
