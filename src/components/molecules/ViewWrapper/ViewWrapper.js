import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './ViewWrapper.styles.js'

const ViewWrapper = ({children}) => (
  <Wrapper>{children}</Wrapper>
)

export default ViewWrapper