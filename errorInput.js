// Set error message for an input
const setError = (input, errorMessage) => {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message')
  if (!errorElement) {
    const error = document.createElement('p')
    error.classList.add('error-message')
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
const removeError = (input) => {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector(".error-message")
  if (errorElement) {
    formControl.removeChild(errorElement)
    formControl.classList.remove("error")
  }
}
