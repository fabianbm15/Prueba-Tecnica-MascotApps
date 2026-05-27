import backgroundNumber from "../assets/background_number.svg";
import PropTypes from 'prop-types';
import "./style.css";

export default function Card(props) {
  const { number, image, title, content } = props;
  return (
    <>
      <div className="card">
        <div className="numbersCardInfo">
          <div className="circleCardNumber">
            <img src={backgroundNumber} alt="number.webp" />
            <p className="numberCard">{number}</p>
          </div>
        </div>
        <div className="contentCardInfo">
          <img className="imageContentCard" src={image} alt="icon.webp" />
          <h3 className="h3ContentCard">{title}</h3>
          <p className="pContentCard">{content}</p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
