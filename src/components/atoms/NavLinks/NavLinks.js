import React from 'react'

import { Wrapper, StyledLink } from './NavLinks.styles.js'

const NavLinks = () => (
  <Wrapper>
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add user</StyledLink>
    <StyledLink to="/settings">Settings</StyledLink>
    <StyledLink to="/">Logout</StyledLink>
  </Wrapper>
)

export default NavLinks