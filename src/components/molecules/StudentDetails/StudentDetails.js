import React from 'react'

import { Wrapper, StudentNameSection, StyledAverage, StyledTitle, StyledDetails, StyledLabel, StyledInfo, StyledSubjectInfo } from './StudentDetails.styles.js'
import Average from 'components/atoms/Average/Average.js'

const StudentDetails = ({student}) => {
  return (
    <Wrapper>
        <StyledAverage>{student.average}</StyledAverage>
        <StyledLabel as="h1">{student.name} {student.attendance}</StyledLabel>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isbig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({subject, average}) => (
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