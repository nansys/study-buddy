import React from 'react'
import { theme } from 'assets/styles/theme'
import styled from 'styled-components'

const StyledDiv = styled.div`

  background-color: ${() => setColor};
  color: white;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.m};
  position: absolute;
  left: 0;
`

const setColor = ({children}) => {
  if(children <= (2.99 || '2,99' || null) ) {
    return theme.colors.error
  } else if (children >= (3 || '3') && children <= (3.99 || '3.99')){
    return theme.colors.warning
  } else {
    return theme.colors.success
  }
}

const Average = ({children}) => {

  return (
    <StyledDiv>{children}</StyledDiv>
  )

}

export default Average 