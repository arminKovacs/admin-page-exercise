import React from 'react'
import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
