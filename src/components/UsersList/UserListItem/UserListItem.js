import React from 'react'

const UserListItem = ({userData}) => {

  const { average, name, attendance } = userData

  return (<li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <button>x</button>
  </li>)

}

UserListItem.propTypes = {}

export default UserListItem