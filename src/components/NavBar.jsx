import { useState } from "react";
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
            <a className="navLink noBackgroundButton" onClick={scrollToInfo} href="#">
              ¿Cómo funciona?
            </a>
            <a className="navLink noBackgroundButton" onClick={scrollToContact} href="#">
              Contacto
            </a>
            <a className="navLink loginButton" href="#">Iniciar Sesión</a>
            <a className="navLink signupButton" href="#">Registrarse</a>
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
            <a className="navLink noBackgroundButton" onClick={scrollToInfo} href="#">
              ¿Cómo funciona?
            </a>
            <a className="navLink noBackgroundButton" onClick={scrollToContact} href="#">
              Contacto
            </a>
            <a className="navLink loginButton" href="#">Iniciar Sesión</a>
            <a className="navLink signupButton" href="#">Registrarse</a>
          </div>
        ) : null}
      </div>
    </>
  );
}
