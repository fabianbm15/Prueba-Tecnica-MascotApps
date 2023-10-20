import React from "react";
import logo from "../assets/logo.svg";
import "./styles.css";

export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <img id="logoNavBar" src={logo} alt="mascotapps.svg" />
        <div id="buttonsNavBar">
          <button id="noBackgrounButton">¿Cómo funciona?</button>
          <button id="noBackgrounButton">Contacto</button>
          <button id="loginButton">Iniciar Sesión</button>
          <button id="signupButton">Registrarse</button>
        </div>
      </div>
    </>
  );
}
