import React, {useState, useEffect, useContext} from 'react'

import axios from 'axios'

export const UserContext = React.createContext({
  users: [],
  addUser: () => {},
  deleteUser: () => {}
})

const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/students')
      .then(({data: {students}}) => {
        setUsers(students)
      })
      .catch(e => console.log(e))
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