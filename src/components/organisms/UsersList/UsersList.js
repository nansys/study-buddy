import React from 'react'
import PropTypes from 'prop-types'

import { StyledList } from './UsersList.styles.js'
import UserListItem from '../../molecules/UserListItem/UserListItem.js'
import Title from 'components/atoms/Title/Title.js'

const UsersList = ({ users, deleteUser }) => {

  return (
    <>
      <StyledList>
        <Title>Students list</Title>
        {users.map((userData, i) => (
         <UserListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  )

}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default UsersList