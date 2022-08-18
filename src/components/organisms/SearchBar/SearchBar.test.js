import React from 'react'

import { render, screen, fireEvent, waitFor } from 'test-utils'
import { setupServer } from 'msw/node'
import { handlers } from 'mocks/handlers'

import SearchBar from './SearchBar.js'

const server = setupServer(...handlers)

describe('Checking searchBar', () => {

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('SearchBar is rendering', () => {
    render(<SearchBar />)
    screen.getByText('Teacher')
    screen.getByPlaceholderText('Search')
  })

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, {target: {value: 'ad'}})
    await screen.findByText(/Adam Romański/)
    
    fireEvent.change(input, {target: {value: ''}})
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible()
    })
  })
})