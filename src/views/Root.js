import React, {useState, useEffect} from 'react'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './Root.styles.js'
import { theme } from 'assets/styles/theme'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import UsersList from 'components/organisms/UsersList/UsersList.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Form from 'components/organisms/Form/Form.js'
import { users as usersData } from 'data/users.js'

const Root = () => {

  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(usersData) {
          resolve([...usersData])
        } else {
          reject({message: 'Error'})
        }
      }, 2000)
    })
  }
  
  const initialFormState = {
    name: '',
    attendance: '',
    average: ''
  }
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)
  
    useEffect(() => {
      mockAPI()
        .then((res) => {
          setUsers(res)
        })
    }, [])
  
    const deleteUser = (name) => {
      const filteredUsers = users.filter((user) => user.name !== name)
      
      setUsers(filteredUsers)
    }
  
    const inputChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
    }
  
    const addUser = (e) => {
      e.preventDefault()
      const newUser = {
        name: formValues.name,
        attendance: formValues.attendance,
        average: formValues.average
      }
  
      setUsers([...users, newUser])
  
      setFormValues(initialFormState)
    }

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Wrapper>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/add-user">Add user</Link>
              </nav>
              <Routes>
                <Route exact path="/" element={<UsersList deleteUser={deleteUser} users={users} />}/>
                <Route path="/add-user" element={<Form formValues={formValues} addUser={addUser} inputChange={inputChange} />} />
              </Routes>
            </Wrapper>
        </ThemeProvider>
      </Router>
    )

}

export default Root