import React from "react";
import { useState } from "react";
import { validateContact } from "./validate";

export default function Contact() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
    touched: {
      firstName: false,
      lastName: false,
      number: false,
      email: false,
      message: false,
    },
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
      touched: { ...prevState.touched, [name]: true },
    }));

    setErrors(
      validateContact({
        ...contactData,
        [name]: value,
      })
    );
  };

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
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p>{contactData.touched.firstName ? errors.firstName : null}</p>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Apellidos"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p>{contactData.touched.lastName ? errors.lastName : null}</p>

                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Número celular"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p>{contactData.touched.number ? errors.number : null}</p>

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p>{contactData.touched.email ? errors.email : null}</p>
              </div>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Mensaje"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <p>{contactData.touched.message ? errors.message : null}</p>
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
