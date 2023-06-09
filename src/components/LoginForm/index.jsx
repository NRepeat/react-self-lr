import React, { Component } from "react";
import Styels from"./style.module.css"

function loginUser(email, password) {
  if (!email || !password) {
    throw new Error();
  }

  alert(`User is logged in!`);
}

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
   
    loginUser(email, password);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { email } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={Styels.form}>
        <input
        onChange = {this.handleEmailChange}
          className={Styels.input}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        ></input>
        <input
          className={Styels.input}
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <button className={Styels.btn}>Submit</button>
      </form>
    );
  }
}
