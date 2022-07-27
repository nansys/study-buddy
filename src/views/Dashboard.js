import React from 'react'
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper.js'
import UsersList from 'components/organisms/UsersList/UsersList.js'
import { UserShape } from 'types'

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersList/>
    </ViewWrapper>
  )

}

export default Dashboard