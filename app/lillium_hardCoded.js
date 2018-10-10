// Hardcoded Lillium Request supports an array of tickers for fast repeated Lillium use.

const lillium = require('./index')
const config = require("./config");

// Stock Ticker
const ticker = [`aapl`]
// Initial Date YYYY-MM-DD  **Blank will result in earliest available date
const startDate = `2018-01-01`
// End Date YYYY-MM_DD  ** Blank will result in up price info up to today
const endDate = `2018-01-05`
// API KEY **Create a config.js file that exports the key or simply enter below
const apiKey = config.QuandlKey

// Execute Lillium function for the entire array of tickers.
console.log(`Lillium Calculator initiated for stock(s): ${ticker} between ${startDate} - ${endDate} on key:${apiKey}` )
ticker.forEach(stock => lillium(stock,startDate,endDate,apiKey))