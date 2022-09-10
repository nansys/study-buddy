import React from 'react'

import { Wrapper, StyledLink } from './NavLinks.styles.js'

const NavLinks = () => (
  <Wrapper>
    <StyledLink to="/dashboard">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    <StyledLink to="/settings">Settings</StyledLink>
    <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>Logout</StyledLink>
  </Wrapper>
)

export default NavLinks