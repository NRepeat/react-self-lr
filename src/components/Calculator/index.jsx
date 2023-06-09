import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      result: ''
    };
  }

  handleTemperatureChange = (e) => {
    this.setState({ temperature: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const temperature = parseFloat(this.state.temperature);
    const result = temperature >= 100 ? 'Water will boil' : 'Water will not boil';
    this.setState({ result });
  }

  render() {
    const { temperature, result } = this.state;
    const isBoiling = temperature >= 100;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Enter temperature:</label>
          <input type="number" value={temperature} onChange={this.handleTemperatureChange} />
          <button type="submit">Calculate</button>
        </form>
        {isBoiling ? <div>Water will boil</div> : <div>Water will not boil</div>}
        {result && <div>{result}</div>}
      </div>
    );
  }
}

export default Calculator
