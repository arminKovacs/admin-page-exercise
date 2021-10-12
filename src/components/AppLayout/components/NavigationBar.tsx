import React from 'react'
import { Alignment, Button, Classes, Navbar } from '@blueprintjs/core'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar className={Classes.DARK}>
      <Navbar.Group align={Alignment.LEFT}>

        <Navbar.Heading>Admin Panel</Navbar.Heading>

        <Navbar.Divider />

        <Link to="/" className="link">
          <Button className="bp3-minimal" icon="list" text="List all products" />
        </Link>

        <Link to="/edit-product" className="link">
          <Button className="bp3-minimal" icon="edit" text="Edit products" />
        </Link>

        <Link to="/add-product" className="link">
          <Button className="bp3-minimal" icon="add" text="Add new product" />
        </Link>

        <Link to="/analytics" className="link">
          <Button className="bp3-minimal" icon="chart" text="Analytics" />
        </Link>

      </Navbar.Group>
    </Navbar>
  )
}

export default NavigationBar
