const regexName = /^[\p{L}\s]+$/u; // Cadena de texto con espacios, hasta 55 caractéres
const regexEmail = /^\S+@\S+\.\S+$/; // formato email
const regexNumber = /^[0-9]+$/; // Números
const regexText = /^[\p{L}\s.,;()0-9]+$/u; // Cadena de texto con espacios

export function validateContact(inputs) {
  const errors = {};

  if (!inputs.firstName) {
    errors.firstName = "El nombre no puede estar vacío.";
  } else if (!regexName.test(inputs.firstName)) {
    errors.firstName = "El nombre solo puede contener letras.";
  } else if (inputs.firstName.length < 2 || inputs.firstName.length > 55) {
    errors.firstName = "El nombre debe tener entre 2 y 55 caracteres.";
  }

  if (!inputs.lastName) {
    errors.lastName = "El apellido no puede estar vacío.";
  } else if (!regexName.test(inputs.lastName)) {
    errors.lastName = "El apellido solo puede contener letras.";
  } else if (inputs.lastName.length < 2 || inputs.lastName.length > 55) {
    errors.lastName = "El apellido debe tener entre 2 y 55 caracteres.";
  }

  if (!inputs.email) {
    errors.email = "El correo electrónico no puede estar vacío.";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Formato de correo electrónico inválido.";
  } else if (inputs.email.length > 254) {
    errors.email = "El E-Mail no puede tener más de 254 caracteres.";
  }

  if (!inputs.message) {
    errors.message = "El mensaje no puede estar vacío.";
  } else if (!regexText.test(inputs.message)) {
    errors.message =
      "El mensaje solo puede contener letras o numeros y símbolos como: .,;()";
  } else if (inputs.message.length < 2 || inputs.message.length > 500) {
    errors.message = "El mensaje debe tener entre 2 y 500 caracteres.";
  }

  if (!inputs.number) {
    errors.number = "El número de teléfono no puede estar vacío.";
  } else if (!regexNumber.test(inputs.number)) {
    errors.number = "El número de teléfono solo puede contener números.";
  } else if (inputs.number.length < 2 || inputs.number.length > 20) {
    errors.number = "El número debe tener entre 2 y 20 caracteres.";
  }

  return errors;
}

export function validateEmail(inputs) {
  const errors = {};

  if (!inputs.email) {
    errors.email = "El correo electrónico no puede estar vacío.";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Formato de correo electrónico inválido.";
  } else if (inputs.email.length > 254) {
    errors.email = "El E-Mail no puede tener más de 254 caracteres.";
  }

  return errors;
}
