import React from 'react'
import { createRoot } from 'react-dom/client'

import Root from 'views/Root.js'

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)