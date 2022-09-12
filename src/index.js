import React from 'react'
import { createRoot } from 'react-dom/client'

import Root from 'views/Root.js'
import { worker } from 'mocks/browser.js'
import AppProviders from 'providers/AppProviders'
import LogRocket from 'logrocket'

LogRocket.init('k7qd0a/study-buddy')

worker.start().then(() => {
  createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>
  )
})