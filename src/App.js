import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: ++this.state.count
    });
  }

  decrementCount = () => {
    this.setState({
      count: --this.state.count
    });
  }

  renderButton = (x, y) => {
    return (
      <button onClick={ y }>{ x }</button>
    )
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{ count }</h1>
        { this.renderButton('+', this.incrementCount ) }
        { this.renderButton('-', this.decrementCount ) }
      </div>
    );
  }
}

export default App;
