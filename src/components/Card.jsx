import React from "react";
import backgroundNumber from "../assets/background_number.svg";
import "./styles.css";

export default function Card(props) {
  const { number, image, title, content } = props;
  return (
    <>
      <div id="card">
        <div>
          <img src={backgroundNumber} alt="number.webp" />
          <p>{number}</p>
        </div>
        <div>
          <img src={image} alt="icon.webp" />
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
