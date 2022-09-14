import React, { useState, useContext, createContext, useCallback } from 'react'

const ErrorContext = createContext({})

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null)

  const dispatchError = useCallback((message) => {
    setError(message)
    setTimeout(() => {
      setError(null)
    }, 7000)
  }, [])

  return <ErrorContext.Provider value={{error, dispatchError}}>{children}</ErrorContext.Provider>

}

export const useError = () => {
  const errorContext = useContext(ErrorContext)

  if(!errorContext){
    throw Error('useError needs to be used inside AuthContext')
  }

  return errorContext
}