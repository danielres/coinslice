const fetch = require('node-fetch')

const now = ({ top, convert, coins }) =>
  fetch(
    `https://api.coinmarketcap.com/v1/ticker/?limit=${top}&convert=${convert}`
  )
    .then(resp => resp.json())
    .then(json => coins.map(c => json.find(e => e.symbol === c)))
    .then(resp => resp.map(i => ({ symbol: i.symbol, price_eur: i.price_eur })))

module.exports = now({ top: 100, convert: 'eur', coins: ['ETH', 'BTC'] })
