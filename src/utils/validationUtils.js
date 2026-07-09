export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const isValidPhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  return re.test(phone)
}

export const isValidURL = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const isValidPassword = (password) => {
  // At least 8 characters, at least one uppercase, one lowercase, one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return re.test(password)
}

export const isValidZipCode = (zip) => {
  const re = /^\d{5}(-\d{4})?$/
  return re.test(zip)
}

export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0
  }
  if (Array.isArray(value)) {
    return value.length > 0
  }
  return value !== null && value !== undefined
}

export const minLength = (value, length) => {
  if (typeof value === 'string') {
    return value.length >= length
  }
  if (Array.isArray(value)) {
    return value.length >= length
  }
  return false
}

export const maxLength = (value, length) => {
  if (typeof value === 'string') {
    return value.length <= length
  }
  if (Array.isArray(value)) {
    return value.length <= length
  }
  return true
}

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

export const isInteger = (value) => {
  return Number.isInteger(Number(value))
}