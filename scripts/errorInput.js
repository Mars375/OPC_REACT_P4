// Error Messages
const errorMessages = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox1: "Veuillez accepter les conditions d'utilisation."
};

// Check if there is an error
export const checkError = (input, validationFunction) => {
  const errorInput = Array.isArray(input) ? input[0] : input;
  if (!validationFunction(input)) {
    setError(errorInput);
    return false;
  } else {
    removeError(errorInput);
    return true;
  }
}

// Set error message for an input
export const setError = (input) => {
  const formControl = input.parentElement;

  formControl.setAttribute('data-error', errorMessages[input.name]);
  formControl.setAttribute('data-error-visible', 'true');
}

// Remove error message for an input
export const removeError = (input) => {
  const formControl = input.parentElement;

  formControl.removeAttribute('data-error');
  formControl.removeAttribute('data-error-visible');
}