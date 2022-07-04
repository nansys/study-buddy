import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './UserListItem.styles.js'
import Button from 'components/atoms/Button/Button.js'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import Average from 'components/atoms/Average/Average.js'
import Student from 'components/atoms/Student name & average/Student.js'

const showIndex = (index) => alert(`This is student ${index+1}`)

const UserListItem = ({userData, index}) => {

  const { average, name, attendance = '0%' } = userData

  return (
    <Wrapper>
      <Average>{average}</Average>
      <Student name={name} attendance={attendance}/>
      <Button onClick={() => showIndex(index)}><DeleteIcon/></Button>
    </Wrapper>
  )

}

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string
  })
}

export default UserListItem