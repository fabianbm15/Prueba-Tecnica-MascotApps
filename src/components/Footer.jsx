import React from "react";
import logo from "../assets/logo.svg";
import twitterImage from "../assets/twitter.svg";
import facebookImage from "../assets/facebook.svg";
import instagramImage from "../assets/instagram.svg";
import { animateScroll } from "react-scroll";
import "./styles.css";

export default function Footer() {
  const scrollToHome = () => {
    const section = document.querySelector(".navBar");
    animateScroll.scrollTo(section.offsetTop);
  };

  const scrollToInfo = () => {
    const section = document.querySelector(".info");
    animateScroll.scrollTo(section.offsetTop);
  };

  const scrollToContact = () => {
    const section = document.querySelector(".contact");
    animateScroll.scrollTo(section.offsetTop);
  };

  return (
    <>
      <div className="footer">
        <div id="footerHyperlinks">
          <div id="divFooter1">
            <img src={logo} alt="mascotapps.svg" />
            <p id="pInfoFooter">
              La solución definitiva para identificar y encontrar su mascota.
              Con Mascotapps, escaneas, conecta y proteges a tus compañeros
              peludos.
            </p>
          </div>
          <div id="divFooter2">
            <h6>Mascotapps</h6>
            <p id="pLinkFooter" onClick={scrollToHome}>
              Inicio
            </p>
            <p id="pLinkFooter" onClick={scrollToInfo}>
              ¿Cómo funciona?
            </p>
            <p id="pLinkFooter" onClick={scrollToContact}>
              Contáctenos
            </p>
            <p id="pLinkFooter">Regístrate</p>
          </div>
          <div id="divFooter3">
            <h6>De interés</h6>
            <p id="pLinkFooter">Veterinarias</p>
            <p id="pLinkFooter">Guía médica</p>
            <p id="pLinkFooter">Alianzas</p>
            <p id="pLinkFooter">Referidos</p>
          </div>
          <div id="divFooter4">
            <h6>Nos encuentras en</h6>
            <div id="imagesFooter">
              <img src={twitterImage} alt="twitter.svg" />
              <img src={facebookImage} alt="facebook.svg" />
              <img src={instagramImage} alt="instagram.svg" />
            </div>
          </div>
        </div>
        <div id="copyRightFooter">
          <p>MascotApps © 2023 - Todos los derechos reservados</p>
        </div>
      </div>
    </>
  );
}
