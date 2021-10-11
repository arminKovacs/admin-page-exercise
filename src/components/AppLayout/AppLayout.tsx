import React from 'react'
import type { FC } from 'react'
import { Alignment, Button, Card, Classes, Navbar } from '@blueprintjs/core'

interface Props {
  pageHeaderTitle: string
}

const AppLayout: FC<Props> = ({ children, pageHeaderTitle }) => {
  return (
    <>
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>

          <Navbar.Heading>Admin Panel</Navbar.Heading>

          <Navbar.Divider />

          <Button className="bp3-minimal" icon="list" text="List all products" />
          <Button className="bp3-minimal" icon="edit" text="Edit products" />
          <Button className="bp3-minimal" icon="add" text="Add new product" />

        </Navbar.Group>
      </Navbar>

      <Card className="page-wrapper" >
        <div className="page-wrapper-header">
          {pageHeaderTitle}
        </div>

        {children}
      </Card>
    </>
  )
}

export default AppLayout
