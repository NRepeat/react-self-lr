import React, { Component } from "react";
import { UserContext } from "../context";

export default class SideBar extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <div>
            <h4>{user.lastName}</h4>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
