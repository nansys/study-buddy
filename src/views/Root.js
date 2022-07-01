import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './Root.styles.js'
import { theme } from 'assets/styles/theme'
import { GlobalStyle } from 'assets/styles/globalStyle.js'
import UsersList from 'components/organisms/UsersList/UsersList.js'

class Root extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Wrapper>
            <UsersList />
          </Wrapper>
      </ThemeProvider>
    )
  }

}

export default Root