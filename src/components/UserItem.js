import React from 'react'

const UserItem = ({id, name, action}) => {
  return (
        <div className="user-item">
            <p>ID: {id}</p>
            <p>{name} </p>
            <button onClick={()=> action(id)}> Remove</button>
        </div>
  )
}

export default UserItem