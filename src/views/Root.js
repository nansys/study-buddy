import React from 'react'

import UsersList from 'components/UsersList/UsersList.js'

import './Root.css'

class Root extends React.Component {

  render() {
    return (
      <div>
        <UsersList />
      </div>
    )
  }

}

export default Root