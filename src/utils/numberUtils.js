export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export const formatNumber = (number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale).format(number)
}

export const formatCompactNumber = (number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number)
}

export const calculatePercentage = (value, total) => {
  if (total === 0) return 0
  return (value / total) * 100
}

export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
}

export const roundTo = (value, decimals = 2) => {
  const factor = Math.pow(10, decimals)
  return Math.round(value * factor) / factor
}

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomFloat = (min, max, decimals = 2) => {
  const value = Math.random() * (max - min) + min
  return roundTo(value, decimals)
}