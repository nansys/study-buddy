import React, { useContext } from 'react'

import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import FormField from 'components/molecules/FormField/FormField.js'
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js'
import Title from 'components/atoms/Title/Title.js'
import { UserContext } from 'providers/UsersProvider.js'
import { useForm } from 'hooks/useForm'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: ''
}

const AddUser = () => {

  const { addUser } = useContext(UserContext)

  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent
  } = useForm(initialFormState)
  
  const submitUser = (e) => {
    e.preventDefault()

    if (formValues.consent) {
      addUser(formValues)
      handleClearForm(initialFormState)
    } else {
      handleThrowError('You need to give consent')
    }
  }

  return (
    <ViewWrapper>
          <form as="form" onSubmit={submitUser}>
            <Title>Add Student</Title>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
            <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}/>
            <FormField label="Consent" id="consent" name="consent" type="checkbox" value={formValues.average} onChange={handleToggleConsent}/>
            <DeleteButton type="submit" onSubmit={handleInputChange}>Add</DeleteButton>
            {formValues.error ? <p>{formValues.error}</p> : null}
          </form>
      </ViewWrapper>
  )

}

export default AddUser