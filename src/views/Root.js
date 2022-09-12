import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import { Wrapper } from './Root.styles.js'
import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button'
import { useForm } from "react-hook-form"
import { useAuth } from 'hooks/useAuth'

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

  const auth = useAuth()

  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(auth.signIn)} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center,', flexDirection: 'column'}}>
      <FormField label="login" name="login" id="login" {...register("login")} />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />
      <Button type="submit">Sign in</Button>
    </form>
  )
}

const Root = () => {

  const auth = useAuth()
  
  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default Root