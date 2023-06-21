// Check if an input is valid name and < 2
const isValidName = (input) => {
  return input.value.trim().length >= 2 && /^[a-zA-Z]+$/.test(input.value.trim())
}

// Check if an input is valid email
const isValidEmail = (input) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value.trim())
}

//Check if an input is valid birthday
const isValidBirthday = (input) => {
  return input.value.trim() !== "" && isValidDate(input) && isPastDate(input)
}

// Check if an input is valid date
const isValidDate = (input) => {
  const date = new Date(input.value)
  return date instanceof Date && !isNaN(date)
}

// Check if an input is past date
const isPastDate = (input) => {
  const date = new Date(input.value)
  const today = new Date()
  return date < today
}

// Check if an input is valid quantity and not empty
const isValidQuantity = (input) => {
  return input.value.trim() !== "" || /^[0-9]+$/.test(input.value.trim())
}
// Check if an input is valid location
const isLocationSelected = (input) => {
  let isLocationSelected = false
  input.forEach((location) => {
    if (location.checked) {
      isLocationSelected = true
    }
  })
  return isLocationSelected
}

// Check if an input is valid condition
const isConditionChecked = (input) => {
  return input.checked
}