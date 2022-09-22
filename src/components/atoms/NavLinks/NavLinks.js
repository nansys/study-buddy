import React from 'react'

import { Wrapper, StyledLink } from './NavLinks.styles.js'
import { useAuth } from 'hooks/useAuth.js'

const NavLinks = () => {
  const auth = useAuth()
  return (
    <Wrapper>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>Logout</StyledLink>
    </Wrapper>
  )
}

export default NavLinks