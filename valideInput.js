// Check if an input is valid name and < 2
export const isValidName = (input) => {
  return input.value.trim().length >= 2 && /^[a-zA-Z]+$/.test(input.value.trim())
}

// Check if an input is valid email
export const isValidEmail = (input) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value.trim())
}

// Check if an input is valid quantity
export const isValidQuantity = (input) => {
  return /^[0-9]*$/.test(input.value.trim())
}

// Check if an input is valid location
export const isLocationSelected = (input) => {
  let isLocationSelected = false
  input.forEach((location) => {
    if (location.checked) {
      isLocationSelected = true
    }
  }
  )
  return isLocationSelected
}

// Check if an input is valid condition
export const isConditionChecked = (input) => {
  return input.checked
}