import React, { Component } from 'react';
import './App.css';


const entries = [{
  BTC: [
    { date: '2017-11-23 22:06:04', amount:  0.0123456, price: 1000.0001 },
  ],
  ETH: [
    { date: '2017-07-18 10:46:03', amount: 1.00000001, price: 100.2590  },
    { date: '2017-11-23 22:06:04', amount: 0.50000000, price: 320.0001 },
  ]
}]

const history = [
  { date: '2017-11-27 22:12:00', BTC: 8129.90, ETH: 401.05 }
]

const headers = (coin) => [
  coin, 
  '€', 
  'amount', 
  'price'
];
	
class App extends Component {
  render() {
    return (
      <div className="App">

        <table className='table entries'> 
          {entries.map(e => Object.entries(e).map(([k,v], i) => 
            <tbody key={i}>
              <tr>
                {headers(k).map((k, i) => 
                  <th key={i}>{k}</th>)
                }
              </tr>
              
              {v.map(({amount, date, price}, i) => 
                <tr key={i}>
                  <td>{date}</td>
                  <td>{amount * price}</td>
                  <td>{amount}</td>
                  <td>{price}</td>
                </tr>
              )}
            </tbody>
          ))}
        </table>

        <table className='table history'>
          <caption>Price history</caption>
          <tbody>
            <tr>
              <th></th>
              <th>BTC</th>
              <th>ETH</th>
            </tr>
            {history.map((e, i) => 
              <tr key={i}>
                <td>{e.date}</td>
                <td>{e.BTC}</td>
                <td>{e.ETH}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
