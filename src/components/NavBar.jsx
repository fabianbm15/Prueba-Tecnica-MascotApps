import React from "react";
import logo from "../assets/logo.svg";
import "./styles.css";

export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <img src={logo} alt="mascotapps.svg" />
        <button>Cómo funciona</button>
        <button>Contacto</button>
        <button>Iniciar Sesión</button>
        <button>Registrarse</button>
      </div>
    </>
  );
}
