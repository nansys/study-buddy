import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'

import { Wrapper } from './MainTemplate.styles.js'
import Sidebar from 'components/organisms/Sidebar/Sidebar.js'

const SearchBar = styled.div`
  grid-row: 1 / 1;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`
const News = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`

const MainTemplate = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Wrapper>
        <Sidebar />
        <SearchBar />
        {children}
        <News>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </News>
      </Wrapper>
  </ThemeProvider>
)

export default MainTemplate