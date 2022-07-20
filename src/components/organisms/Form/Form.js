import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, StyledList } from 'components/organisms/UsersList/UsersList.styles.js'
import FormField from 'components/moleluces/FormField/FormField.js'
import { Button } from 'components/atoms/Button/Button.js'

const Form = ({addUser, inputChange, formValues}) => {

  return (
    <>
      <Wrapper as="form" onSubmit={addUser}>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={inputChange}/>
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={inputChange}/>
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={inputChange}/>
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  )

}

Form.propTypes = {
  addUser: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired
  })
}

export default Form