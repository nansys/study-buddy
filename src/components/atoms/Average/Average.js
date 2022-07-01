import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`

  background-color: ${({color}) => color && color};
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
  if(children <= 2.9 ) {
    return '#bb7875'
  } else if (children >= 3 && children <= 3.9){
    return '#d1c67d'
  } else {
    return '#7eb775'
  }
}

const Average = ({children}) => {

  return (
    <StyledDiv color={setColor}>{children}</StyledDiv>
  )

}

export default Average 