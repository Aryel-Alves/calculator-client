import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  state = {
    firstNumber: 0,
    secondNumber: 0,
    operation: '+'
  }

  handleFirstNumberChange = (event) => {
    this.setState({ firstNumber: parseInt(event.target.value) });
  }

  handleSecondNumberChange = (event) => {
    this.setState({ secondNumber: parseInt(event.target.value) });
  }

  handleOparationChange = (event) => {
    this.setState({ operation: event.target.value });
  }

  handleSubmit = async (event) => {
    let response
    try {
      response = await axios.post('http://localhost:9000', this.state)
    }
    catch(error){
      console.log(error)
    }
    let result = response.data.result
    alert(`the result is ${result}`)
  }

  render (){
    const { firstNumber, secondNumber, operation } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p> Digite 2 numeros e uma operação: </p>
        </header>
          <div>
            <label>
              First Number: 
              <input type="number" value={firstNumber} onChange={this.handleFirstNumberChange} />
            </label>
            <label>
              Second Number: 
              <input type="number" value={secondNumber} onChange={this.handleSecondNumberChange}></input>
            </label>
            <label>
              Operation:
              <select value={operation} onChange={this.handleOparationChange}>
                <option value="+">Sum</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
                <option value="/">Division</option>
              </select>
            </label>
            <button onClick={this.handleSubmit}>Calculate</button>
          </div>
      </div>
    );
  }
}
