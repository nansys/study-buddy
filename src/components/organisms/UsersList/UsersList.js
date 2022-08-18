import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { StyledList } from './UsersList.styles.js'
import UserListItem from '../../molecules/UserListItem/UserListItem.js'
import Title from 'components/atoms/Title/Title.js'

import { useStudents } from 'hooks/useStudents.js'

const UsersList = () => {

  const [students, setStudents] = useState([])
  const { id } = useParams()
  const { getStudents } = useStudents()

  useEffect(() => {
    (async () => {
      const students = await getStudents(id)
      setStudents(students)
    })()
  }, [getStudents, id])

  return (
    <>
      <StyledList>
        <Title>Students list</Title>
        {students.map((userData) => (
         <UserListItem key={userData.id} userData={userData} />
        ))}
      </StyledList>
    </>
  )

}

export default UsersList