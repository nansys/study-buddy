import React from 'react'
import { render, screen, fireEvent, waitFor } from 'test-utils.js'
import Root from './Root.js'

describe('Root component', () => {
  it('Renders the root component as Unauthenticated user', () => {
    render(<Root />)
    screen.getByLabelText('login')
  })

  it('Displays error message when wrond credentials are passed', async () => {
    render(<Root />)
    const login = screen.getByLabelText('login')
    const password = screen.getByLabelText('password')

    fireEvent.change(login, {target: { value: 'Elon'}})
    fireEvent.change(password, {target: { value: '0123'}})

    fireEvent.click(screen.getByText('Sign in'))
    await waitFor(() => screen.findByText(/Oops/))
  })

  it('Displays authenticated application', async () => {
    render(<Root />)
    const login = screen.getByLabelText('login')
    const password = screen.getByLabelText('password')

    fireEvent.change(login, {target: { value: 'teacher@studybuddy.com'}})
    fireEvent.change(password, {target: { value: '1234'}})

    fireEvent.click(screen.getByText('Sign in'))
    await waitFor(() => screen.findByText(/Students/))
  })
})