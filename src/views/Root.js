import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import { theme } from 'assets/styles/theme.js'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import { Wrapper } from './Root.styles.js'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'
import { useForm } from "react-hook-form"
import axios from 'axios'

const AuthenticatedApp = () => {
  return (
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
  )
}

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {

  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(handleSignIn)} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center,', flexDirection: 'column'}}>
      <FormField label="login" name="login" id="login" {...register("login")} />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />
      <Button type="submit">Sign in</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  )
}

const Root = () => {

  const [user, setUser] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect( () => {
    const token = localStorage.getItem('token')
    if(token) {
      ( async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          setUser(response.data)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])

  const handleSignIn = async ({login, password}) => {
    try {
      const response = await axios.post('/login', {
      login,
      password
    })
    setUser(response.data)
    localStorage.setItem('token', response.data.token)
    console.log(user)
    } catch (e) {
      setError('Please provide valid user data')
    }
  }
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  )
}

export default Root