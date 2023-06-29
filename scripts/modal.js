import {
  isValidName,
  isValidEmail,
  isValidBirthday,
  isValidQuantity,
  isLocationSelected,
  isConditionChecked
} from './valideInput.js'
import {
  setError,
  removeError
} from './errorInput.js'

const editNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// EditNav on icon event
document.querySelector(".icon").addEventListener("click", editNav);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const contentDiv = document.querySelector('.modal-body');
const form = document.querySelector("form[name='reserve']")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity");
const locationInputs = document.querySelectorAll("input[name='location']");
const checkbox1 = document.getElementById("checkbox1");

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
}

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  if (contentDiv.querySelector('.confirmation')) {
    contentDiv.removeChild(contentDiv.querySelector('.confirmation'))
    hideForm()
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
document.querySelector(".close").addEventListener("click", closeModal);

// Validate form function
const validate = (event) => {
  event.preventDefault()
  let isValidForm = true

  if (!isValidName(firstName)) {
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    isValidForm = false
  } else {
    removeError(firstName)
  }
  if (!isValidName(lastName)) {
    setError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    isValidForm = false
  } else {
    removeError(lastName)
  }
  if (!isValidEmail(email)) {
    setError(email, "Veuillez entrer une adresse email valide.")
    isValidForm = false
  } else {
    removeError(email)
  }
  if (!isValidBirthday(birthdate)) {
    setError(birthdate, "Veuillez entrer une date de naissance valide.")
    isValidForm = false
  } else {
    removeError(birthdate)
  }
  if (!isValidQuantity(quantity)) {
    setError(quantity, "Veuillez entrer un nombre valide.")
    isValidForm = false
  } else {
    removeError(quantity)
  }
  if (!isLocationSelected(locationInputs)) {
    setError(locationInputs[0], "Veuillez choisir une ville.")
    isValidForm = false
  } else {
    removeError(locationInputs[0])
  }
  if (!isConditionChecked(checkbox1)) {
    setError(checkbox1, "Veuillez accepter les conditions d'utilisation.")
    isValidForm = false
  } else {
    removeError(checkbox1)
  }

  if (!isValidForm) return

  form.reset()
  hideForm()
  showConfirmationMessage()
}

// Hide form function
const hideForm = () => {
  form.style.display === "none" ?
    form.style.display = "block" :
    form.style.display = "none"
}

// Show confirmation message function
const showConfirmationMessage = () => {
  const confirmationDiv = document.createElement('div')
  const confirmationP = document.createElement('p')
  const closeButton = document.createElement('button')

  closeButton.classList.add('button')
  confirmationDiv.classList.add('confirmation')

  closeButton.textContent = 'Fermer'
  confirmationP.textContent = 'Merci pour votre inscription'

  closeButton.addEventListener('click', closeModal)
  // Add elements to the DOM
  contentDiv.appendChild(confirmationDiv)
  confirmationDiv.appendChild(confirmationP)
  confirmationDiv.appendChild(closeButton)
}

// submit event
form.addEventListener("submit", validate)