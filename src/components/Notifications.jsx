import React from "react";
import { useState } from "react";
import mailIcon from "../assets/mail_icon.svg";
import { validateContact } from "./validate";
import playStore from "../assets/playstore.svg";
import appStore from "../assets/appstore.svg";
import "./styles.css";

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      <div className="notificationsAndPromoteApp">
        <div className="notifications">
          <div id="divTitleNotifications">
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
              <p id="errorEmailNotification">
                {emailContact.touched.email ? errorEmail.email : null}
              </p>
            </div>
            <div>
              <button
                id="buttonSubscribe"
                onClick={(e) => {
                  showErrors(e);
                }}
              >
                Suscríbete
              </button>
            </div>
          </form>
          {showAlertNotification ? (
            <div id="backgroundAlert">
              <div id="alertSubmit">
                <p id="pTitleAlertt">¡Te has suscrito!</p>
                <button
                  id="closeButtonContact"
                  onClick={() => setShowAlertNotification(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="promoteApp">
          <h3>Próximamente en</h3>
          <div id="divLogosApps">
            <img src={playStore} alt="googleplay.svg" />
            <img src={appStore} alt="appstore.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
