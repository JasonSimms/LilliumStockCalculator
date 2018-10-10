const lillium = require('./index')
const config = require("./config");


// USER INPUT - ADJUST EQUATION INPUTS
// Stock Ticker
const ticker = [`aapl`]
// Initial Date YYYY-MM-DD  **Blank will result in earliest available date
const startDate = `2018-03-01`
// End Date YYYY-MM_DD  ** Blank will result in up price info up to today
const endDate = `2018-10-25`
// API KEY **Create a config.js file that exports the key or simply enter below
const apiKey = config.QuandlKey


console.log(`Lillium Calculator initiated for stock(s): ${ticker} between ${startDate} - ${endDate} on key:${apiKey}` )

// Execute Lillium function for the entire array of tickers.
ticker.forEach(stock => lillium(stock,startDate,endDate,apiKey))

// Test module for testing purposes
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;