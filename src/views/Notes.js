
import React from 'react'
import styled from 'styled-components'

import FormField from 'components/molecules/FormField/FormField'
import { Button } from 'components/atoms/Button/Button.js'

import Note from 'components/molecules/Note/Note.js'
import { NotesWrapper } from 'components/molecules/NotesWrapper/NotesWrapper.styles'

import { useForm } from "react-hook-form"
import { useGetNotesQuery } from 'store'
import { useAddNoteMutation } from 'store'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;
  width: 100%;
  height: 100%;
`

const FormWrapper = styled.form`
  padding: 40px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`

const Notes = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { data, isLoading } = useGetNotesQuery()
  const [addNote, rest] = useAddNoteMutation()

  const handleAddNote = ({title, content}) => {
    addNote({title, content})
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        <StyledFormField isTextarea label="Content" name="content" id="content" {...register('content', { required: true })} />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      {isLoading ? <h2>Loading...</h2> : (
      <NotesWrapper>
        {data.notes.length ? data.notes.map(({id, title, content}) => <Note id={id} key={id} title={title} content={content} />) : <p>Create your first note</p>}
      </NotesWrapper>
      )}
    </Wrapper>
  )
}

export default Notes