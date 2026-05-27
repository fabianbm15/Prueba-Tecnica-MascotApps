import logo from "../assets/logo.svg";
import twitterImage from "../assets/twitter.svg";
import facebookImage from "../assets/facebook.svg";
import instagramImage from "../assets/instagram.svg";
import { animateScroll } from "react-scroll";
import "./style.css";

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
            <p>
              La solución definitiva para identificar y encontrar su mascota.
              Con Mascotapps, escaneas, conecta y proteges a tus compañeros
              peludos.
            </p>
          </div>
          <div id="divFooter2">
            <h6>Mascotapps</h6>
            <section>
              <a className="footerLink" onClick={scrollToHome} href="#">
                Inicio
              </a>
              <a className="footerLink" onClick={scrollToInfo} href="#">
                ¿Cómo funciona?
              </a>
              <a className="footerLink" onClick={scrollToContact} href="#">
                Contáctenos
              </a>
              <a className="footerLink" href="#">Regístrate</a>
            </section>
          </div>
          <div id="divFooter3">
            <h6>De interés</h6>
            <section>
              <a className="footerLink" href="#">Veterinarias</a>
              <a className="footerLink" href="#">Guía médica</a>
              <a className="footerLink" href="#">Alianzas</a>
              <a className="footerLink" href="#">Referidos</a>
            </section>
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
