import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

export default function AuthGuard(props) {
  const { children } = props
  const auth = false
  if (!auth.userLoggedIn) {
    return <Redirect to="/" />
  }

  return <>{children}</>
}
