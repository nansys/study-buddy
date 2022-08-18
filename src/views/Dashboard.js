import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link,  useParams, Navigate } from 'react-router-dom'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import UsersList from 'components/organisms/UsersList/UsersList.js'
import Title from 'components/atoms/Title/Title'

import { useStudents } from 'hooks/useStudents.js'

const Wrapper = styled.div`
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`

const StyledTitle = styled(Title)`
    margin-right: 15px;
    color: ${({theme}) => theme.colors.darkGrey};
`

const StyledLink = styled(Link)`
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

const Dashboard = () => {

  const [groups, setGroups] = useState([])

  const { id } = useParams()
  const { getGroups } = useStudents()

  useEffect(() => {
    (async () => {
      const groups = await getGroups()
      setGroups(groups)
    })()
  }, [getGroups])
  
  if (!id && groups.length > 0) return <Navigate replace to={`/dashboard/${groups[0]}`} />

  return (
    <Wrapper>
      <TitleWrapper>
      <StyledTitle as="h2">Group {id}</StyledTitle>
        <nav>
          {groups.map((group) => {
          return <StyledLink key={group} to={group}>{group}</StyledLink>
          })}
        </nav>
      </TitleWrapper>
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </Wrapper>
  )

}

export default Dashboard