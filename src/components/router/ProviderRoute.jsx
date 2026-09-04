import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  // Wait until authentication check is finished
  if (loading) {
    return <div>Loading...</div>
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // User is logged in but not admin
  if (user.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  // User is admin
  return children
}

export default ProtectedRoute