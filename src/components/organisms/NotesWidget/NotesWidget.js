
import React from 'react'

import { NotesWrapper } from 'components/molecules/NotesWrapper/NotesWrapper.styles.js'

import { Wrapper, WidgetHandler } from './NotesWidget.styles.js'
import Note from 'components/molecules/Note/Note.js'
import { useGetNotesQuery } from 'store'

const NotesWidget = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const { data, isLoading } = useGetNotesQuery()

  const handleToggleWidhet = () => setIsOpen((prevState) => !prevState)

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidhet}>notes</WidgetHandler>
      {isLoading ? <h2>Loading...</h2> : (
        <NotesWrapper>
          {data.notes.length ? data.notes.map(({id, title, content}) => <Note id={id} key={id} title={title} content={content} />) : <p>Create your first note</p>}
        </NotesWrapper>
      )}
    </Wrapper>
  )
}

export default NotesWidget