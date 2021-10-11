import React from 'react'
import type { FC } from 'react'
import { Card } from '@blueprintjs/core'
import NavigationBar from './components/NavigationBar'

interface Props {
  pageHeaderTitle: string
}

const AppLayout: FC<Props> = ({ children, pageHeaderTitle }) => {
  return (
    <>
      <NavigationBar />

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
