import React from "react";
import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    q: "¿Cuánto cuesta registrar mi máscota?",
    a: "El registro de tu mascota es gratuito. Puedes registrarla en nuestra página web o en nuestra aplicación móvil.",
  },
  {
    q: "¿Qué pasa si pierdo el código QR registrado de mi mascota?",
    a: "Si pierdes el código QR registrado de tu mascota, puedes solicitar uno nuevo en nuestra página web o en nuestra aplicación móvil.",
  },
  {
    q: "¿Cómo puedo editar los datos registrados de mi mascota?",
    a: "Puedes editar los datos registrados de tu mascota en nuestra página web o en nuestra aplicación móvil. Para ello, inicia sesión con tu cuenta y accede a la ficha de tu mascota.",
  },
  {
    q: "¿Cómo puedo tener soporte si tengo algún problema?",
    a: "Puedes ponerte en contacto con nuestro servicio de soporte a través de nuestro sitio web o de nuestra aplicación móvil.",
  },
];

export default function Faq() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleClick = (q) => {
    if (currentQuestion === q) {
      setCurrentQuestion(null);
    } else {
      setCurrentQuestion(q);
    }
  };

  return (
    <>
      <div className="faqs">
        <h2 id="h2Faqs">Preguntas Frecuentes</h2>
        <div>
          {faqs.map((faq, key) => {
            return (
              <div
                key={key}
                id="faqQuestionAnswer"
                onClick={() => handleClick(faq.q)}
              >
                <div id="divFaqTile">
                  <h4>{faq.q}</h4>
                  {currentQuestion === faq.q ? <p>-</p> : <p>+</p>}
                </div>
                {currentQuestion === faq.q ? (
                  <p id="answerFaqs">{faq.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
