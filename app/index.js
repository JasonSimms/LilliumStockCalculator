const lillium = require('./backend')
const config = require("./config");

// USER INPUT - ADJUST EQUATION INPUTS

// Stock Ticker
const ticker = [`aapl`]
// Initial Date YYYY-MM-DD  **Must be before 2018-03-27 when using Quandl
const startDate = `2018-03-01`
// End Date YYYY-MM_DD  **Data Only Available up to 2018-03-27
const endDate = `2018-10-25`
// API KEY **Create a config.js file that exports the key or simply enter below
const apiKey = config.QuandlKey


console.log(`Lillium Calculator initiated for stock(s): ${ticker} between ${startDate} - ${endDate} on key:${apiKey}` )

// Lillium(ticker,startDate,endDate,apiKey)
ticker.forEach(stock => lillium(stock,startDate,endDate,apiKey))


function sum(a, b) {
    return a + b;
  }
  module.exports = sum;