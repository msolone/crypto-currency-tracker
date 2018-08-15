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
      console.log(currencyData)
      this.setState({
        coins: Object.values(currencyData.data)
        
      })
    })
    }, 5000)

  }
  render() {
    return (
        // mapping over the coins in setState, each will create a Currency
       this.state.coins.map((coin, idx) => {
         console.log(coin.quotes)
          return ( <Currency 
              name = {coin.name}
              symbol = {coin.symbol}
              price = {coin.quotes.USD.price.toFixed(2)}
              rank = {coin.rank}
              change24h = {coin.quotes.USD.percent_change_24h} 
              iconName = {coin.id}
              key = {idx} />       
        )})
             )
           
     
    }
  }


export default CurrencyList;
