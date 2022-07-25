import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './ListWrapper.styles.js'

const ListWrapper = ({children}) => (
  <Wrapper>{children}</Wrapper>
)

export default ListWrapper