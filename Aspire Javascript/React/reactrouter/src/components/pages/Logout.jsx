import React from 'react'
import { useLocation } from 'react-router-dom'

export const Logout = () => {
    const location = useLocation();
  return (
    <div>Logout {location.state.logoutmessage}</div>
  )
}
