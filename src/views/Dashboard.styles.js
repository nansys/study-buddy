
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Title from 'components/atoms/Title/Title'

export const Wrapper = styled.div`
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`

export const StyledTitle = styled(Title)`
    margin-right: 15px;
    color: ${({theme}) => theme.colors.darkGrey};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 50%;
  padding: 10px;
  background-color: white;
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 800;
  margin-right: 15px;

  &:active {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`