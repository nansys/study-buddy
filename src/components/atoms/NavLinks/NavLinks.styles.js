import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: bold;
    color: ${({theme}) => theme.colors.darkGrey};
    text-align: right;
    margin: 15px 20px 15px auto;
    position: relative;
    cursor: pointer;

    &.active {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      content: '';
      position: absolute;
      width: 17px;
      height: 3px;
      top: 50%;
      right: -20px;
      background-color: ${({theme}) => theme.colors.darkPurple};
      transform: translateY(-50%);
    }

`