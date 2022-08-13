import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'

import { Wrapper } from './MainTemplate.styles.js'
import Sidebar from 'components/organisms/Sidebar/Sidebar.js'
import SearchBar from 'components/organisms/SearchBar/SearchBar.js'

import NewsSection from '../NewsSection/NewsSection.js'

const MainTemplate = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Wrapper>
        <Sidebar />
        <SearchBar />
        {children}
        <NewsSection />
      </Wrapper>
  </ThemeProvider>
)

export default MainTemplate