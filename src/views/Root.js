import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { users as usersData } from 'data/users.js'
import MainTemplate from 'template/MainTemplate.js'
import Dashboard from './Dashboard'
import AddUser from './AddUser'

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(usersData) {
        resolve([...usersData])
      } else {
        reject({message: 'Error'})
      }
    }, 1000)
  })
}

export const UserContext = React.createContext({
  users: [],
  addUser: () => {},
  deleteUser: () => {}
})

const Root = () => {
  
  const [users, setUsers] = useState([])
  
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
  
    const addUser = (formValues) => {
      const newUser = {
        name: formValues.name,
        attendance: formValues.attendance,
        average: formValues.average
      }
      setUsers([newUser, ...users])
    }

    return (
      <Router>
        <MainTemplate>
          <UserContext.Provider
            value={{
              users,
              addUser,
              deleteUser
            }}
            >
            <Routes>
              <Route path="/" element={<Dashboard deleteUser={deleteUser} users={users} />}/>
              <Route path="/add-user" element={<AddUser />}/>
            </Routes>
          </UserContext.Provider>
        </MainTemplate>
      </Router>
    )

}

export default Root