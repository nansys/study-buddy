import React, { useState, useEffect } from 'react'

import { Wrapper, StyledList } from './UsersList.styles.js'
import UserListItem from '../../moleluces/UserListItem/UserListItem.js'
import { users as usersData } from 'data/users.js'

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

const UsersList = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    setIsLoading(true)
    mockAPI()
      .then((res) => {
        setIsLoading(false)
        setUsers(res)
      })
  }, [])

  useEffect(() => {
    console.log('Component has ben updated')
  }, [isLoading])

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    
    setUsers(filteredUsers)
  }

  return (
    <Wrapper>
      <StyledList>
        <h1>{isLoading ? 'Loading...' : 'Content loaded'}</h1>
        {users.map((userData, i) => (
         <UserListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  )

}

export default UsersList