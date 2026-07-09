export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const groupKey = item[key]
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    groups[groupKey].push(item)
    return groups
  }, {})
}

export const sortBy = (array, key, direction = 'asc') => {
  return [...array].sort((a, b) => {
    const aVal = typeof key === 'function' ? key(a) : a[key]
    const bVal = typeof key === 'function' ? key(b) : b[key]
    if (aVal < bVal) return direction === 'asc' ? -1 : 1
    if (aVal > bVal) return direction === 'asc' ? 1 : -1
    return 0
  })
}

export const unique = (array, key) => {
  if (!key) return [...new Set(array)]
  const seen = new Set()
  return array.filter(item => {
    const value = item[key]
    if (seen.has(value)) return false
    seen.add(value)
    return true
  })
}

export const chunk = (array, size) => {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export const shuffle = (array) => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export const getAverage = (array, key) => {
  if (array.length === 0) return 0
  const sum = array.reduce((total, item) => {
    const value = typeof key === 'function' ? key(item) : item[key]
    return total + value
  }, 0)
  return sum / array.length
}

export const getSum = (array, key) => {
  return array.reduce((total, item) => {
    const value = typeof key === 'function' ? key(item) : item[key]
    return total + value
  }, 0)
}