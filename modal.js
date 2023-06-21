import {
  isValidEmail,
  isValidQuantity,
  isLocationSelected,
  isConditionChecked,
  isValidName
} from "./valideInput.js"

import {
  setError,
  removeError
} from "./errorInput.js"

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form[name='reserve']")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const location = document.querySelectorAll("input[name='location']");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
document.querySelector(".close").addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form function
const validate = (e) => {
  e.preventDefault();
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
  if (!isValidQuantity(quantity)) {
    setError(quantity, "Veuillez entrer un nombre valide.")
    isValidForm = false
  } else {
    removeError(quantity)
  }
  if (!isLocationSelected(location)) {
    setError(location[0], "Veuillez choisir une ville.")
    isValidForm = false
  } else {
    removeError(location[0])
  }
  if (!isConditionChecked(checkbox1)) {
    setError(checkbox1, "Veuillez accepter les conditions d'utilisation.")
    isValidForm = false
  } else {
    removeError(checkbox1)
  }
  return isValidForm
}

// form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate()) {
    form.reset()
    closeModal()
    alert("Merci ! Votre réservation a été reçue.")
  }
});



