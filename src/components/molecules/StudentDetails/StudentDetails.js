import React from 'react'

import { Wrapper, StudentNameSection, StyledAverage, StyledTitle, StyledDetails, StyledLabel, StyledInfo, StyledSubjectInfo } from './StudentDetails.styles.js'
import Average from 'components/atoms/Average/Average.js'

const oneStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: 'Business Philosophy',
  gradies: [
    {
      subject: 'Business Philosophy',
      average: '3.3'
    },
    {
      subject: 'Marketing',
      average: '4.7'
    }
  ]
}

const StudentDetails = ({student}) => {
  return (
    <Wrapper>
        <StyledAverage>{student.average}</StyledAverage>
        <StyledLabel as="h1">{student.name} {student.attendance}</StyledLabel>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isbig>{oneStudent.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {oneStudent.gradies.map(({subject, average}) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  )
}

export default StudentDetails