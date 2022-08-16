import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import {SearchBarWrapper, StatusInfo, InputWrapper, StyledViewWrapper, StyledTitle} from './SearchBar.styles.js'
import { Input } from 'components/atoms/Input/Input.js'
import { useStudents } from 'hooks/useStudents.js'

const SearchBar = () => {

  const [searchPhrase, setSearchPhrase] = useState('')
  const [matchingStudents, setMatchingStudents] = useState('')
  const { findStudents } = useStudents()

  const getMatchingStudents = debounce(async(e) => {
    const { students } = await findStudents(searchPhrase)
    setMatchingStudents(students)
  }, 500)

  useEffect(() => {
    if (!searchPhrase) return
    getMatchingStudents(searchPhrase)
  }, [searchPhrase, getMatchingStudents])
  
  return (
    <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p><strong>Teacher</strong></p>
    </StatusInfo>
    <InputWrapper>
      <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" />
      {searchPhrase && matchingStudents.length ? (
      <StyledViewWrapper>
        {matchingStudents.map((student) => (
          <StyledTitle key={student.id}>{student.name}</StyledTitle>
          ))}
      </StyledViewWrapper>) : null}
    </InputWrapper>
  </SearchBarWrapper>
  )

}

  export default SearchBar
