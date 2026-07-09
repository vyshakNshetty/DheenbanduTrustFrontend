import React, { createContext, useState, useContext, useCallback, useMemo, useEffect } from 'react'
import { authService } from '../services/authService'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      authService.getCurrentUser()
        .then(userData => setUser(userData))
        .catch(() => {
          localStorage.removeItem('authToken')
          setUser(null)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = useCallback(async (email, password) => {
    const response = await authService.login({ email, password })
    localStorage.setItem('authToken', response.token)
    setUser(response.user)
    return response
  }, [])

  const logout = useCallback(async () => {
    await authService.logout()
    localStorage.removeItem('authToken')
    setUser(null)
  }, [])

  const register = useCallback(async (userData) => {
    const response = await authService.register(userData)
    return response
  }, [])

  const value = useMemo(() => ({
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  }), [user, loading, login, logout, register])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}