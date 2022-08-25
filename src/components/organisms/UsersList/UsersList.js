import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { StyledList } from './UsersList.styles.js'
import UserListItem from '../../molecules/UserListItem/UserListItem.js'
import Title from 'components/atoms/Title/Title.js'

import { useStudents } from 'hooks/useStudents.js'

const UsersList = ({handleOpenStudentDetails}) => {

  const [students, setStudents] = useState([])
  const { id } = useParams()
  const { getStudentsByGroup } = useStudents()

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id)
      setStudents(students)
    })()
  }, [getStudentsByGroup, id])

  return (
    <>
      <StyledList>
        <Title>Students list</Title>
        {students.map((userData) => (
         <UserListItem onClick={ () => handleOpenStudentDetails(userData.id)} key={userData.id} userData={userData} />
        ))}
      </StyledList>
    </>
  )

}

export default UsersList