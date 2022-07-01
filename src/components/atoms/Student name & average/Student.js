import React from 'react'
import styled from 'styled-components'

const StyledName = styled.p`

  font-weight: bold;

`

const Student = ({name, attendance}) => (
  <div>
    <StyledName>{name}</StyledName>
    <p>attendance: {attendance}</p>
  </div>
) 

export default Student