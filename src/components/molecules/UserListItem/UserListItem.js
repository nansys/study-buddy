import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { UserShape } from 'types'
import { StyledAverage, StyledInfo, Wrapper } from './UserListItem.styles'
import { UserContext } from 'providers/UsersProvider.js'

const UserListItem = ({userData, index, ...props}) => {

  const { deleteUser } = useContext(UserContext)

  const { average, name, attendance = '0%' } = userData

  return (
    <Wrapper {...props}>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUser(name)}><DeleteIcon/></DeleteButton>
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
  )

}

UserListItem.propTypes = {
  userData: PropTypes.shape(UserShape)
}

export default UserListItem