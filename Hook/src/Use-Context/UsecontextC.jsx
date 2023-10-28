import React from 'react'
import { UserContext } from '../App'

const UsecontextC = () => {
  return (
    <div>
        <UserContext.Consumer>
        {
            user => {
                return <div>User Context Value {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default UsecontextC
