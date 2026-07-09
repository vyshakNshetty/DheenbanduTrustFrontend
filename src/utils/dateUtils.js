import { format, formatDistance, formatRelative, parseISO, isValid } from 'date-fns'

export const formatDate = (date, formatStr = 'MMMM d, yyyy') => {
  if (!date) return ''
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return ''
  return format(dateObj, formatStr)
}

export const formatDateTime = (date) => {
  return formatDate(date, 'MMMM d, yyyy h:mm a')
}

export const formatTimeAgo = (date) => {
  if (!date) return ''
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return ''
  return formatDistance(dateObj, new Date(), { addSuffix: true })
}

export const formatRelativeDate = (date) => {
  if (!date) return ''
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return ''
  return formatRelative(dateObj, new Date())
}

export const isDateInPast = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return false
  return dateObj < new Date()
}

export const isDateInFuture = (date) => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(dateObj)) return false
  return dateObj > new Date()
}