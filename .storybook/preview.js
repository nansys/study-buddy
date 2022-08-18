import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme.js'
import { GlobalStyle } from 'assets/styles/globalStyle.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]