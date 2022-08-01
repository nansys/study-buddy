import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { toHaveValue } from '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'helpers/renderWithProviders.js'

import AddUser from './AddUser.js'

describe('Add user form', () => {
  it('Renders the component correctly', () => {
    renderWithProviders(<AddUser />)
  })
  it('Checking if all fields are render correctly', () => {
    const average = screen.queryByTestId ('Average')
    expect(average).toBeNull()
  })
})