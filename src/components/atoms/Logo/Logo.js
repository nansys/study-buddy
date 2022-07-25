import React from 'react'

import { Wrapper } from './Logo.styles.js'
import {ReactComponent as LogoSvg} from 'assets/icons/logo.svg'

const Logo = () => (
  <Wrapper>
    <LogoSvg as="img" alt="Logo Study Buddy" />
  </Wrapper>
)

export default Logo