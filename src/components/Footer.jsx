import React from "react";
import logo from "../assets/logo.svg";
import twitterImage from "../assets/twitter.svg";
import facebookImage from "../assets/facebook.svg";
import instagramImage from "../assets/instagram.svg";

import "./styles.css";

export default function Footer() {
  return (
    <>
      <div>
        <div id="footerHyperlinks">
          <div>
            <img src={logo} alt="mascotapps.svg" />
            <p>
              La solución definitiva para identificar y encontrar su mascota.
              Con Mascotapps, escaneas, conecta y proteges a tus compañeros
              peludos.
            </p>
          </div>
          <div>
            <h6>Mascotapps</h6>
            <p>Inicio</p>
            <p>¿Cómo funciona?</p>
            <p>Contáctenos</p>
            <p>Regístrate</p>
          </div>
          <div>
            <h6>De interés</h6>
            <p>Veterinarias</p>
            <p>Guía médica</p>
            <p>Alianzas</p>
            <p>Referidos</p>
          </div>
          <div>
            <h6>Nos encuentras en</h6>
            <img src={twitterImage} alt="twitter.svg" />
            <img src={facebookImage} alt="facebook.svg" />
            <img src={instagramImage} alt="instagram.svg" />
          </div>
        </div>
        <div>
          <p>MascotApps © 2023 - Todos los derechos reservados</p>
        </div>
      </div>
    </>
  );
}
