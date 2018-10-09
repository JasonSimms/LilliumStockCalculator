const Lillium = require('./backend')

// USER INPUT - ADJUST EQUATION INPUTS

// Stock Ticker
const ticker = [`aapl`]
// Initial Date YYYY-MM-DD
const startDate = `2018-01-01`
// End Date YYYY-MM_DD   ** EMPTY DATA SET will result if Quandl has no information.
const endDate = `2018-01-05`
// API KEY
const apiKey = "xGVHzXL81RZT89Jvks6a"


console.log(`Lillium Calculator initiated for stock(s): ${ticker} between ${startDate} - ${endDate} on key:${apiKey}` )

// Lillium(ticker,startDate,endDate,apiKey)
ticker.forEach(stock => Lillium(stock,startDate,endDate,apiKey))


function sum(a, b) {
    return a + b;
  }
  module.exports = sum;