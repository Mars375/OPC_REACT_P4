// Set error message for an input
export const setError = (input, errorMessage) => {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector(input.name + "-error")
  if (!errorElement) {
    const error = document.createElement('p')
    error.classList.add(input.name + '-error')
    error.style.color = "red"
    error.style.fontSize = "1rem"
    error.innerText = errorMessage
    formControl.appendChild(error)
  } else {
    errorElement.innerText = errorMessage
  }
  formControl.classList.add('error')
}

// Remove error message for an input
export const removeError = (input) => {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector(".error-message")
  if (errorElement) {
    formControl.removeChild(errorElement)
    formControl.classList.remove("error")
  }
}
