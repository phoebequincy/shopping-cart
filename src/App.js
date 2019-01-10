import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader/>
      </div>
    );
  }
}

export default App;
