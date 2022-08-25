import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import { Wrapper } from './Root.styles.js'

const Root = () => {
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
        <Wrapper>
        <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/add-user" element={<AddUser />}/>
        </Routes>
        </Wrapper>
      </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root