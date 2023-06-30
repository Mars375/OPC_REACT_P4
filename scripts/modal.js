import {
  isValidName,
  isValidEmail,
  isValidBirthday,
  isValidQuantity,
  isLocationSelected,
  isConditionChecked
} from './valideInput.js'

import {
  checkError,
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

  isValidForm = checkError(firstName, isValidName) && isValidForm;
  isValidForm = checkError(lastName, isValidName) && isValidForm;
  isValidForm = checkError(email, isValidEmail) && isValidForm;
  isValidForm = checkError(birthdate, isValidBirthday) && isValidForm;
  isValidForm = checkError(quantity, isValidQuantity) && isValidForm;
  isValidForm = checkError(Array.from(locationInputs), isLocationSelected) && isValidForm;
  isValidForm = checkError(checkbox1, isConditionChecked) && isValidForm;

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

  // Create Element
  const confirmationDiv = document.createElement('div')
  const confirmationP = document.createElement('p')
  const closeButton = document.createElement('button')

  // Add class
  closeButton.classList.add('btn-submit')
  confirmationDiv.classList.add('confirmation')

  // Add content
  closeButton.textContent = 'Fermer'
  confirmationP.textContent = 'Merci pour votre inscription'

  // Add event
  closeButton.addEventListener('click', closeModal)

  // Add elements to the DOM
  contentDiv.appendChild(confirmationDiv)
  confirmationDiv.appendChild(confirmationP)
  confirmationDiv.appendChild(closeButton)
}

// submit event
form.addEventListener("submit", validate)