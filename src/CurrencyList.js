import React, { Component } from 'react';
import Currency from './Currency'


class CurrencyList extends Component {

  constructor(props) {
    super(props)
    this.state = {
     coins:[]
    }
  }

  componentDidMount () {
    setInterval(() => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
    .then(resp => resp.json())
    .then(currencyData => {
      console.log(currencyData.data)
      this.setState({
        coins: Object.values(currencyData.data)       
      })
    })
    }, 10000)

  }

  // componentDidUpdate(prevState) {
  //   this.state.coins.map(coin => {
  //   if (coin.price > prevState.price) {
  //     document.querySelector('.price').style.background = 'green'
  //   } else if (coin.price < prevState.price) {
  //     document.querySelector('.price').style.background = 'red'
  //   } else {
  //     document.querySelector('.price').style.background = 'yellow'
  //   }})
  // }

  render() {
    return (
       this.state.coins.map((coin, idx) => {
          return ( <Currency 
              name = {coin.name}
              symbol = {coin.id}
              price = {coin.quotes.USD.price.toFixed(2)}
              rank = {coin.rank}
              change24h = {coin.quotes.USD.percent_change_24h} 
              key = {idx} />       
        )})
             )
    }
  }


export default CurrencyList;
