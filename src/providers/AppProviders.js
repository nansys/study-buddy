import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'
import { AuthProvider } from 'hooks/useAuth'

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default AppProviders