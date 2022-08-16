import styled from 'styled-components'
import { Input } from 'components/atoms/Input/Input.js'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import Title from 'components/atoms/Title/Title.js'

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }

`
export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }

`

export const InputWrapper = styled.div`
display: flex;
position: relative;
justify-content: center;
`

export const StyledViewWrapper = styled.ul`
      width: 100%;
      max-height: 500px;
      border-radius: 15px;
      background-color: ${({theme}) => theme.colors.white};
      position: absolute;
      padding: 0;
      top: 20px;
      display: flex;
      flex-direction: column;
      list-style: none;
      overflow-y: scroll;
      z-index: 1000;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, .15);
      animation: loading .15s ease-in;
      @keyframes loading {
        0% {
          transform: translateY(-10px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
`

export const StyledTitle = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, highlighted }) => highlighted ? theme.colors.lightPurple : theme.colors.white};
  padding: 20px 50px;
  width: 100%;
  &:hover {
    background-color: 1px solid ${({ theme }) => theme.colors.lightPurple}
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.colors.darkPurple};
  }
`