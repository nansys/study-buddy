import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainTemplate from 'template/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import UsersProvider from 'providers/UsersProvider.js'

const Root = () => {
  
  return (
    <Router>
      <MainTemplate>
        <UsersProvider>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/add-user" element={<AddUser />}/>
          </Routes>
        </UsersProvider>
      </MainTemplate>
    </Router>
  )
}

export default Root