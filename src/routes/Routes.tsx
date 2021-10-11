import React from 'react'
import AppLayout from '../components/AppLayout/AppLayout'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/" >
        <AppLayout pageHeaderTitle="Products">
          List all products
        </AppLayout>
      </Route>

      <Route path="/edit-product" >
        <AppLayout pageHeaderTitle="Edit product">
          Edit product
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
