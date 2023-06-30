// Set error message for an input
export const setError = (input, errorMessage) => {
  const formControl = input.parentElement;

  formControl.setAttribute('data-error', errorMessage);
  formControl.setAttribute('data-error-visible', 'true');
}

// Remove error message for an input
export const removeError = (input) => {
  const formControl = input.parentElement;

  formControl.removeAttribute('data-error');
  formControl.removeAttribute('data-error-visible');
}