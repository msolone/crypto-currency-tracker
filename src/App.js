import React, { Component } from 'react';
import './App.css';
import CurrencyList from './CurrencyList'

class App extends Component {
  render() {
    return (
    <div className="App">
    <table>
      <tr>
        <th>Name</th>
        <th>Symbol</th> 
        <th>Price</th>
        <th>Rank</th>
        <th>Change 24hr %</th>
      </tr>
      <CurrencyList />
      
      </table>
  
      </div>
    );
  }
}

export default App;
