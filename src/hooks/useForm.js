import { useReducer } from 'react'

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
  consentToggle: 'CONSENT HANDLE',
  throwError: 'THROW ERROR'
}

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value
      }
    case actionTypes.clearValues:
      return {
        ...action.initialValues
      }
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent
      }
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue
      }
    default:
      return state
  }
}

export const useForm = (initialFormState) => {
  
  const [formValues, dispatch] = useReducer(reducer, initialFormState)

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleClearForm = () => {
    dispatch({type: actionTypes.clearValues, initialFormState})
  }

  const handleThrowError = (errorMessage) => {
    dispatch({type: actionTypes.throwError, errorValue: errorMessage})
  }

  const handleToggleConsent = () => {
    dispatch({type: actionTypes.consentToggle})
  }

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent
  }

}