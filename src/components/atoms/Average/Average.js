import React from 'react'
import { theme } from 'assets/styles/theme'
import styled from 'styled-components'

const Average = styled.div`

background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  color: white;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.m};
`

export default Average 