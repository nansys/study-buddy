import React from 'react'

import { render, screen, fireEvent, waitFor } from 'test-utils.js'

import SearchBar from './SearchBar.js'

describe('Checking searchBar', () => {

  it('SearchBar is rendering', () => {
    render(<SearchBar />)
    screen.getByText('Teacher')
    screen.getByPlaceholderText('Search')
  })

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, {target: {value: 'Co'}})
    await screen.findByText(/Coty/)
   
  })
})