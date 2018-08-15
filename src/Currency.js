import React, { Component } from 'react';


class Currency extends Component {
  render() {
    return (
    <tr>
        <td>{this.props.name}</td>
        <td> <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.iconName}.png`}/> </td>
        <td>{this.props.price}</td>
        <td>{this.props.rank}</td>
        <td>{this.props.change24h}</td>
    </tr>
    );
  }
}

export default Currency;