import React from "react";
import Card from "./Card";
import info1Image from "../assets/info1_qr.svg";
import info2Image from "../assets/info2_register.svg";
import info3Image from "../assets/info3_use.svg";
import "./styles.css";

const infoCards = [
  {
    number: "1",
    image: info1Image,
    title: "Adquiere una placa",
    content:
      "Compra una placa que incluye un código QR con el cual podrás identificar a tu mascota.",
  },
  {
    number: "2",
    image: info2Image,
    title: "Registra tu mascota",
    content:
      "Escanea el código QR de tu placa para registrar tu mascota, es sencillo y en línea.",
  },
  {
    number: "3",
    image: info3Image,
    title: "Usa la placa en tu mascota",
    content:
      "Pon la placa en el collar de tu mascota para identificarla siempre solo con un escaneo.",
  },
];

export default function Info() {
  return (
    <>
      <div className="info">
        <h2 id="h2Info">¿Cómo funciona Mascotapps?</h2>
        <div id="cards">
          {infoCards.map((card, key) => (
            <Card
              key={key}
              number={card.number}
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
