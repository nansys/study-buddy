import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import Average from 'components/atoms/Average/Average.js'
import Student from 'components/atoms/Student name & average/Student.js'
import { UserShape } from 'types'
import { Wrapper } from './UserListItem.styles.js'
import { UserContext } from 'providers/UsersProvider.js'

const showIndex = (index) => alert(`This is student ${index+1}`)

const UserListItem = ({userData, index}) => {

  const { deleteUser } = useContext(UserContext)

  const { average, name, attendance = '0%' } = userData

  return (
      <Wrapper>
        <Average>{average}</Average>
        <Student name={name} attendance={attendance}/>
        <DeleteButton onClick={() => deleteUser(name)}><DeleteIcon/></DeleteButton>
      </Wrapper>
  )

}

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape)
}

export default UserListItem