import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import FormField from 'components/molecules/FormField/FormField.js'
import { Button } from 'components/atoms/Button/Button.js'
import { UserShape } from 'types'
import Title from 'components/atoms/Title/Title.js'
import { UserContext } from './Root'

const initialFormState = {
  name: '',
  attendance: '',
  average: ''
}

const AddUser = () => {

  const { addUser } = useContext(UserContext)

  const [formValues, setFormValues] = useState(initialFormState)

  const inputChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
  }

  const submitUser = (e) => {
    e.preventDefault()
    addUser(formValues)
    setFormValues(initialFormState)
  }

  return (
    <ViewWrapper>
          <form as="form" onSubmit={submitUser}>
            <Title>Add Student</Title>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={inputChange}/>
            <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={inputChange}/>
            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={inputChange}/>
            <Button type="submit">Add</Button>
          </form>
      </ViewWrapper>
  )

}

export default AddUser