import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <h2>Contacto</h2>
        <p>Siempre puedes escribirnos y consúltarnos</p>
        <div>
          <form>
            <div>
              <div>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Apellidos"
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Número celular"
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                />
              </div>
              <input type="text" id="msg" name="msg" placeholder="Mensaje" />
            </div>
            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
