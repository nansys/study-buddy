import React from 'react'
import { render } from '@testing-library/react'
import { theme } from 'assets/styles/theme.js'
import AppProviders from 'providers/AppProviders'

export const AllTheProviders = ({children}) => {
  return (
    <AppProviders theme={theme}>{children}</AppProviders>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'

export { customRender as render }