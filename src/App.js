import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import Calculator from "./components/Calculator";
import Reviews from "./components/Reviews";
const reviews = [
  { id: 1, rating: 7, text: "Дуже гарний відгук 1" },
  { id: 2, rating: 9, text: "Дуже гарний відгук 2" },
  { id: 3, rating: 6, text: "Дуже гарний відгук 3" },
  { id: 4, rating: 10, text: "Дуже гарний відгук 4" },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testMasseg: "true",
      counter:0
    };
  }
  handleClick = () => {
    if (this.state.testMasseg === "true") {
      this.setState({
        testMasseg: "false",
      });
    } else {
      this.setState({
        testMasseg: "true",
      });
    }
  };
  timerStart =()=>{
    this.timer= setInterval(()=>this.setState({
      counter: this.state.counter+1
    }),1000)
    
  }
  timerStop =()=>{
    this.setState({
      counter: 0
    })
    clearInterval(this.timer)
  }
  render() {
    const {testMasseg,counter} = this.state
    return (
      <div>
        <Reviews arr ={reviews} isImprota/>
        <Calculator/>
        <LoginForm/>
        <p >{testMasseg}</p>
        <button onClick={this.handleClick}>test</button>
        <button onClick={this.timerStart}>start</button>
        <button onClick={this.timerStop}>Stop</button>
        <div>{counter}</div>
      </div>
    );
  }
}
