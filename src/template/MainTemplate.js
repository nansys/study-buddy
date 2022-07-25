import React from 'react'
import { Link } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'

import { Wrapper } from './MainTemplate.styles.js'
import Sidebar from 'components/organisms/Sidebar/Sidebar.js'

const MainTemplate = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Wrapper>
        <Sidebar />
        {children}
      </Wrapper>
  </ThemeProvider>
)

export default MainTemplate