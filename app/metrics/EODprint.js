// Print stock prices for time range
function printEOD(arr) {
  arr.forEach(el => {
    console.log(`${el[0]}: Closed at ${el[4]} (${el[3]} ~ ${el[2]})`);
    });
  }

module.exports = printEOD