import React, { Component } from 'react'
import { UserContext } from '../context'

export default class HeaderContextTask extends Component {
  render() {
    return (
        <UserContext.Consumer>
      {(user) => (
        <div>
          <h4>
            {user.firstName} 
          </h4>
        </div>
      )}
      
    </UserContext.Consumer>
    )
  }
}
