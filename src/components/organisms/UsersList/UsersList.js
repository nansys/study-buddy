import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/molecules/ListWrapper/ListWrapper.js'
import { StyledList } from './UsersList.styles.js'
import UserListItem from '../../molecules/UserListItem/UserListItem.js'

const UsersList = ({ users, deleteUser }) => {

  return (
    <>
      <Wrapper>
      <StyledList>
        <h1>Students list</h1>
        {users.map((userData, i) => (
         <UserListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
    </>
  )

}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default UsersList