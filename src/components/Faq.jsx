import React from "react";
import "./styles.css";

const faqs = [
  { q: "¿Cuánto cuesta registrar mi máscota?", a: "100 dólares", show: false },
  {
    q: "¿Qué pasa si pierdo el código QR registrado de mi mascota?",
    a: "100 dólares",
    show: false,
  },
  {
    q: "¿Cómo puedo editar los datos registrados de mi mascota?",
    a: "100 dólares",
    show: false,
  },
  {
    q: "¿Cómo puedo tener soporte si tengo algún problema?",
    a: "100 dólares",
    show: false,
  },
];

export default function Faq() {
  return (
    <>
      <div>
        <h2>Preguntas Frecuentes</h2>
        <div>
          {faqs.map((faq, key) => {
            return (
              <div>
                <h4>{faq.q}</h4>
                {faq.show ? <p>{faq.a}</p> : <p></p>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
