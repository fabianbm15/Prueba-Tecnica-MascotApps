import React from "react";
import logo from "../assets/logo.svg";
import { animateScroll } from "react-scroll";
import "./styles.css";

export default function NavBar() {
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
      <div className="navBar">
        <div id="containerNavBar">
          <img id="logoNavBar" src={logo} alt="mascotapps.svg" />
          <div id="buttonsNavBar">
            <button id="noBackgrounButton" onClick={scrollToInfo}>
              ¿Cómo funciona?
            </button>
            <button id="noBackgrounButton" onClick={scrollToContact}>
              Contacto
            </button>
            <button id="loginButton">Iniciar Sesión</button>
            <button id="signupButton">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  );
}
