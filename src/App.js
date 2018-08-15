import React, { Component } from 'react';
import './App.css';
import CurrencyList from './CurrencyList'

class App extends Component {
  render() {
    return (
    <div className="App">
    <h1>Crypto-Currency Tracker</h1>
    <table>
    <tbody>
      <tr>
        <th className='name'>Name</th>
        <th>Symbol</th> 
        <th>Price</th>
        <th>Rank</th>
        <th className='changeDay'>Change % 24hr</th>
      </tr>
      <CurrencyList />
      
      </tbody>
      </table>
  
      </div>
    );
  }
}

export default App;
