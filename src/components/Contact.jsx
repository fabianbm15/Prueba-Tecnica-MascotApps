import React from "react";
import { useState } from "react";
import { validateContact } from "./validate";
import "./style.css";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
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

  const hasErrors = Object.values(errors).some((value) => value !== "");

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(errors);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasErrors) {
      document.querySelector("#contactForm").reset();
      setShowAlert(true);
      setContactData({
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
    }
  };

  const showErrors = () => {
    for (const key in contactData) {
      setContactData((prevState) => ({
        ...prevState,
        touched: {
          ...prevState.touched,
          [key]: true,
        },
      }));
    }
    setErrors(
      validateContact({
        ...contactData,
      })
    );
  };

  return (
    <>
      <div className="contact">
        <h2 id="h2Contact">Contacto</h2>
        <p id="pContact">Siempre puedes escribirnos y consúltarnos</p>
        <div id="divContactForm">
          <form
            id="contactForm"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <div>
                <div id="contactFirstLine">
                  <div id="inputContact">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Nombre"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <p id="errors">
                      {contactData.touched.firstName ? errors.firstName : null}
                    </p>
                  </div>
                  <div id="inputContact">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Apellidos"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <p id="errors">
                      {contactData.touched.lastName ? errors.lastName : null}
                    </p>
                  </div>
                </div>

                <div id="contactFirstLine">
                  <div id="inputContact">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Número celular"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <p id="errors">
                      {contactData.touched.number ? errors.number : null}
                    </p>
                  </div>
                  <div id="inputContact">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Correo electrónico"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <p id="errors">
                      {contactData.touched.email ? errors.email : null}
                    </p>
                  </div>
                </div>
              </div>
              <div id="divInputText">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Mensaje"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <p id="errorsText">
                  {contactData.touched.message ? errors.message : null}
                </p>
              </div>
            </div>
            <div>
              <button
                id="sendContactButton"
                onClick={(e) => {
                  showErrors(e);
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        {showAlert ? (
          <div id="backgroundAlert">
            <div id="alertSubmit">
              <p id="pTitleAlertt">¡Mensaje enviado correctamente!</p>
              <p id="pInfoContact">
                En los próximos días será contactado por uno de nuestros
                asesores por medio del correo electrónico.
              </p>
              <button
                id="closeButtonContact"
                onClick={() => setShowAlert(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
