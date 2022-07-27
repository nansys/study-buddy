import React, {useState, useEffect, useContext} from 'react'
import { users as usersData } from 'data/users.js'

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

const UsersProvider = ({ children }) => {

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
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UsersProvider