import React from 'react'
import {SearchBarWrapper, StatusInfo} from './SearchBar.styles.js'
import { Input } from 'components/atoms/Input/Input.js'

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p><strong>Teacher</strong></p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
  )

  export default SearchBar
