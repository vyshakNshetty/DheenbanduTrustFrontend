import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect
} from 'react'

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

    const token = localStorage.getItem('access_token')

    if (token) {

      authService.getCurrentUser()

        .then(userData => {
          // console.log("CURRENT USER:", userData.data)
          setUser(userData.data)
        })

        .catch(() => {

          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')

          setUser(null)
        })

        .finally(() => {
          setLoading(false)
        })

    } else {

      setLoading(false)

    }

  }, [])

  const login = useCallback(async (email, password) => {

    const response = await authService.login({
      email,
      password
    })

    console.log("TOKEN RESPONSE:", response)

    localStorage.setItem('access_token', response.access)
    localStorage.setItem('refresh_token', response.refresh)

    const userData = await authService.getCurrentUser()

    console.log("USER RESPONSE:", userData)

    setUser(userData.data)

    return userData.data

  }, [])

  const logout = useCallback(async () => {

    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')

    setUser(null)

  }, [])

  const value = useMemo(() => ({

    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,

  }), [user, loading, login, logout])

  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  )
}