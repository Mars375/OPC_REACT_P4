// Check if an input is valid name and < 2
export const isValidName = (input) => {
  return input.value.trim().length >= 2 && /^[a-zA-Z]+$/.test(input.value.trim())
}

// Check if an input is valid email
export const isValidEmail = (input) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value.trim())
}

//Check if an input is valid birthday
export const isValidBirthday = (input) => {
  return input.value.trim() !== "" && isValidDate(input) && isPastDate(input)
}

// Check if an input is valid date
export const isValidDate = (input) => {
  const date = new Date(input.value)
  return date instanceof Date && !isNaN(date)
}

// Check if an input is past date
export const isPastDate = (input) => {
  const date = new Date(input.value)
  const today = new Date()
  return date < today
}

// Check if an input is valid quantity and not empty
export const isValidQuantity = (input) => {
  return input.value.trim() !== "" || /^[0-9]+$/.test(input.value.trim())
}
// Check if an input is valid location
export const isLocationSelected = (input) => {
  const isAnyLocationSelected = input.some(radio => radio.checked);
  return isAnyLocationSelected
}

// Check if an input is valid condition
export const isConditionChecked = (input) => {
  return input.checked
}