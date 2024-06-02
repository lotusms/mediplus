import PropTypes from 'prop-types'
import {useAuth} from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({element: Component, ...props}) => {
  const {userLoggedIn} = useAuth()

  return userLoggedIn ? <Component {...props} /> : <Navigate to="/" />
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired
}

export default ProtectedRoute
