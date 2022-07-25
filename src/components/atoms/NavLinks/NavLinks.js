import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 30px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: 600;
    color: ${({theme}) => theme.colors.darkGrey};
`

const NavLinks = () => (
  <Wrapper>
    <StyledLink to="/">Dashboard</StyledLink>
    <StyledLink to="/add-user">Settings</StyledLink>
    <StyledLink to="/add-user">Logout</StyledLink>
  </Wrapper>
)

export default NavLinks