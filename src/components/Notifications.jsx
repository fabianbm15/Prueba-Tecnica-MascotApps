import React from "react";
import mailIcon from "../assets/mail_icon.svg";

export default function Notifications() {
  return (
    <>
      <div>
        <div>
          <img src={mailIcon} alt="mail.svg" />
          <p>Recibe las últimas novedades en tu correo</p>
        </div>
        <form>
          <div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
              />
            </div>
          </div>
          <div>
            <button>Suscríbete</button>
          </div>
        </form>
      </div>
    </>
  );
}
