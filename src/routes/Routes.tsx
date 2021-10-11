import React from 'react'
import AppLayout from '../components/AppLayout/AppLayout'
import { Switch, Route } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
import EditProduct from './pages/EditProduct/EditProduct'

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/" >
        <AppLayout pageHeaderTitle="Products">
          <ProductList />
        </AppLayout>
      </Route>

      <Route path="/edit-product" >
        <AppLayout pageHeaderTitle="Edit product">
          <EditProduct />
        </AppLayout>
      </Route>

      <Route path="/add-product" >
        <AppLayout pageHeaderTitle="Add product">
          Add product
        </AppLayout>
      </Route>

    </Switch>
  )
}

export default Routes
