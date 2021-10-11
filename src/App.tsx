import React from 'react'
import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import ProductsProvider from './components/ProductsProvider/ProductsProvider'

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App
