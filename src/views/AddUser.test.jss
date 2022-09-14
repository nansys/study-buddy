import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { toHaveValue } from '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders.js'

import AddUser from './AddUser.js'
import Dashboard from './Dashboard.js'

describe('Add user form', () => {
  it('It adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    )
    const name = screen.getByTestId('Name')
    const attendance = screen.getByTestId('Attendance')
    const average = screen.getByTestId('Average')
    fireEvent.change(name, {target: {value: 'Chriss'}})
    fireEvent.change(attendance, {target: {value: '35%'}})
    fireEvent.change(average, {target: {value: '3.55'}})
    fireEvent.click(screen.getByTestId('Consent'))
    fireEvent.click(screen.getByText('Add'))
    screen.getByText('Chriss')
  })
})

it('Prevents adding new user if the consent is not checked', () => {
  renderWithProviders(
    <>
      <AddUser />
      <Dashboard />
    </>
  )
  const name = screen.getByTestId('Name')
  const attendance = screen.getByTestId('Attendance')
  const average = screen.getByTestId('Average')
  fireEvent.change(name, {target: {value: 'Andreas'}})
  fireEvent.change(attendance, {target: {value: '64%'}})
  fireEvent.change(average, {target: {value: '6'}})
  fireEvent.click(screen.getByText('Add'))
  const newUser = screen.queryByText('Andreas')
  expect(newUser).not.toBeInTheDocument()
})