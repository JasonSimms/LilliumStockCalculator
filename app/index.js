const Lillium = require('./backend')

// USER INPUT - ADJUST EQUATION INPUTS

// Stock Ticker
const arg1 = `aapl`
// Initial Date YYYY-MM-DD
const arg2 = `2018-01-20`
// End Date YYYY-MM_DD
const arg3 = `2018-02-01`
// API KEY
const arg4 = "xGVHzXL81RZT89Jvks6a"


console.log(`Function fired for stock: ${arg1}` )
Lillium(arg1,arg2,arg3,arg4)


function sum(a, b) {
    return a + b;
  }
  module.exports = sum;