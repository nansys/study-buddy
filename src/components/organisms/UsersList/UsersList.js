import React from 'react'

import { Wrapper, StyledList } from './UsersList.styles.js'
import UserListItem from '../../moleluces/UserListItem/UserListItem.js'
import { users } from 'data/users.js'

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
       <UserListItem index={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
)

export default UsersList