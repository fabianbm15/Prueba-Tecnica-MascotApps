import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menuImage from "../assets/menu.svg";
import { animateScroll } from "react-scroll";
import "./style.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
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
          <div className="navBarMobile">
            <img
              id="imageNavBarMobile"
              src={menuImage}
              alt="menu.svg"
              onClick={handleClick}
            />
          </div>
        </div>
        {showMenu ? (
          <div id="menuMobile">
            <button id="noBackgrounButton" onClick={scrollToInfo}>
              ¿Cómo funciona?
            </button>
            <button id="noBackgrounButton" onClick={scrollToContact}>
              Contacto
            </button>
            <button id="loginButton">Iniciar Sesión</button>
            <button id="signupButton">Registrarse</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
