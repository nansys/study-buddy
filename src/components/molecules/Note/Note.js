import React from 'react'

import { NoteWrapper, StyledDeleteButton } from './Note.styles.js'

import Title from 'components/atoms/Title/Title'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'
import { useRemoveNoteMutation } from 'store'

const Note = ({title = 'Untitled', content = 'No content', id}) => {

  const [removeNote, rest] = useRemoveNoteMutation()

  const handleRemoveNote = () => {
    removeNote(id)
  }

  React.useEffect(() => {
    
    console.log(rest)
  }, [rest])

  return (
    <NoteWrapper>
      <Title>{title}</Title>
        <p>{content}</p>
        <StyledDeleteButton onClick={handleRemoveNote}><DeleteIcon/></StyledDeleteButton>
    </NoteWrapper>
  )
}

export default Note