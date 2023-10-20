import React from "react";
import { useState } from "react";
import mailIcon from "../assets/mail_icon.svg";
import { validateContact } from "./validate";

export default function Notifications() {
  const [showAlertNotification, setShowAlertNotification] = useState(false);

  const [emailContact, setEmailContact] = useState({
    email: "",
    touched: {
      email: false,
    },
  });

  const [errorEmail, setErrorEmail] = useState({
    email: "",
  });

  const hasErrorNotification = Object.values(errorEmail).some(
    (value) => value === "email" && value !== ""
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmailContact((prevState) => ({
      ...prevState,
      [name]: value,
      touched: { ...prevState.touched, [name]: true },
    }));

    setErrorEmail(
      validateContact({
        ...emailContact,
        [name]: value,
      })
    );
    console.log("errorEmail ", errorEmail);
    console.log(hasErrorNotification);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hasErrorNotification);
    if (!hasErrorNotification) {
      setShowAlertNotification(true);
      document.querySelector("#notificationForm").reset();
    }
  };

  const showErrors = () => {
    for (const key in emailContact) {
      setEmailContact((prevState) => ({
        ...prevState,
        touched: {
          ...prevState.touched,
          [key]: true,
        },
      }));
    }
    setErrorEmail(
      validateContact({
        ...emailContact,
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <img src={mailIcon} alt="mail.svg" />
          <p>Recibe las últimas novedades en tu correo</p>
        </div>
        <form
          id="notificationForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <p>{emailContact.touched.email ? errorEmail.email : null}</p>
          </div>
          <div>
            <button
              onClick={(e) => {
                showErrors(e);
              }}
            >
              Suscríbete
            </button>
          </div>
        </form>
      </div>
      {showAlertNotification ? (
        <div>
          <p>¡Te has suscrito!</p>
          <button onClick={() => setShowAlertNotification(false)}>
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}
