import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { useCombobox } from 'downshift'
import {SearchBarWrapper, StatusInfo, InputWrapper, StyledViewWrapper, StyledTitle} from './SearchBar.styles.js'
import { Input } from 'components/atoms/Input/Input.js'
import { useStudents } from 'hooks/useStudents.js'

const SearchBar = () => {

  const [matchingStudents, setMatchingStudents] = useState([])
  const { findStudents } = useStudents()

  const getMatchingStudents = debounce(async({inputValue}) => {
    const { students } = await findStudents(inputValue)
    setMatchingStudents(students)
  }, 500)

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange: getMatchingStudents,
    items: matchingStudents
  })
  
  return (
    <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p><strong>Teacher</strong></p>
    </StatusInfo>
    <InputWrapper {...getComboboxProps()}>
      <Input {...getInputProps()} id="Search "name="Search" placeholder='Search' />
      <StyledViewWrapper aria-label="results" isVisible={isOpen} {...getMenuProps()}>
        {isOpen && matchingStudents.map((item, index) => (
          <StyledTitle highlighted={highlightedIndex === index} {...getItemProps({item, index})} key={item.id}>{item.name}</StyledTitle>
          ))}
      </StyledViewWrapper>
    </InputWrapper>
  </SearchBarWrapper>
  )

}

  export default SearchBar
