import React from 'react'
import { useLocation } from 'react-router-dom'

export const LandingPage = () => {
  const location = useLocation();
  return (
    <div>Landing Page {location.state.message}</div>

  )
}
