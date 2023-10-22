import React from "react";
import backgroundNumber from "../assets/background_number.svg";
import "./style.css";

export default function Card(props) {
  const { number, image, title, content } = props;
  return (
    <>
      <div id="card">
        <div id="numbersCardInfo">
          <div id="circleCardNumber">
            <img src={backgroundNumber} alt="number.webp" />
            <p id="numberCard">{number}</p>
          </div>
        </div>
        <div id="contentCardInfo">
          <img id="imageContentCard" src={image} alt="icon.webp" />
          <h3 id="h3ContentCard">{title}</h3>
          <p id="pContentCard">{content}</p>
        </div>
      </div>
    </>
  );
}
