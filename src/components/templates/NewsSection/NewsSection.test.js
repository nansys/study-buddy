import React from 'react'
import { render, screen } from '@testing-library/react'

import { renderWithProviders } from 'helpers/renderWithProviders'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import NewsSection from './NewsSection.js'

const mock = new MockAdapter(axios)

const query = `{
    allArticles {
      id
      title
      content
      image {
        url
        alt
      }
    }
  }`

describe('News Section', () => {

  afterEach(() => {
    mock.reset()
  })

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500)
    renderWithProviders(<NewsSection />)
    await screen.findByText(/Sorry/)
  })

  it('Display the article', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          {
            id: 1,
            title: 'test',
            category: 'test',
            content: 'test',
            image: {
              src: 'https://unsplash.it/500/500',
              alt: 'test'
            }
          }
        ]
      }
    })
    renderWithProviders(<NewsSection />)
    await screen.findAllByText(/test/)
  })
})