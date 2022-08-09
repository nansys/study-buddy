import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { toHaveValue } from '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders.js'

import AddUser from './AddUser.js'
import Dashboard from './Dashboard.js'

describe('Add user form', () => {
  it('Renders the component correctly', () => {
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
    fireEvent.click(screen.getByText('Add'))
    screen.getByText('Chriss')
  })
})