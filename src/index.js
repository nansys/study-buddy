import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.js'

const Root = createRoot(document.querySelector('#root'))

Root.render(<App />)