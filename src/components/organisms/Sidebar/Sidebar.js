import React from 'react'

import { SidebarWrapper } from './Sidebar.styles'

import NavLinks from 'components/atoms/NavLinks/NavLinks'
import Logo from 'components/atoms/Logo/Logo.js'


const Sidebar = () => (
  <SidebarWrapper>
    <Logo />
    <NavLinks />
  </SidebarWrapper>
)

export default Sidebar