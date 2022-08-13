import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'

const Root = () => {
  
  return (
    <Router>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/add-user" element={<AddUser />}/>
        </Routes>
      </MainTemplate>
    </Router>
  )
}

export default Root