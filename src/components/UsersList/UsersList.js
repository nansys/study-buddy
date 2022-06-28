import React from 'react'
import PropTypes from 'prop-types'

import UserListItem from './UserListItem/UserListItem.js'

import { users } from 'data/users.js'

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
       <UserListItem userData={userData} />
      ))}
    </ul>
  </div>
)

UsersList.propTypes = {

}

export default UsersList