import React, {useState, useEffect, useCallback} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import UsersList from 'components/organisms/UsersList/UsersList.js'

import { Wrapper, TitleWrapper, StyledTitle, StyledLink } from './Dashboard.styles.js'

import { useStudents } from 'hooks/useStudents.js'

import useModal from 'components/organisms/Modal/useModal.js'
import Modal from 'components/organisms/Modal/Modal.js'

import StudentDetails from 'components/molecules/StudentDetails/StudentDetails.js'
import { DisplayEvents, DisplayEventsData } from 'hoc/withEventsData.js'
import EventsProvider from 'providers/EventsProvider.js'


const Dashboard = () => {

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [currentStudent, setCurrentStudent] = useState({})
  const { getGroups, getStudentsById } = useStudents()
  const [groups, setGroups] = useState([])
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const groups = await getGroups()
      setGroups(groups)
    })()
  }, [getGroups])

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id)
    setCurrentStudent(student)
    handleOpenModal(true)
  }
  
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
        <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            <StudentDetails student={currentStudent} />
          </Modal>
      </ViewWrapper>
      <EventsProvider group="A">
        {(props) => <DisplayEvents events={props}/>}
      </EventsProvider>
    </Wrapper>
  )
}

export default Dashboard