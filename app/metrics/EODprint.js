// Print stock prices for time range

//QUANDL presents stock information in an array [date, open, high, low, close,...]
//To use other sources adjust variables line 11 - 14.

function printEOD(arr) {
  let outputMessage = `Daily Price Performance: 
  `;
  // Collapse Price array if it is not in our interests to print
  if (arr.length > 50) {
    arr = [arr[0], arr[arr.length - 1]];
    outputMessage = `Daily Price Performance: Data Collapsed for printing purposes...
  `;
  }
  arr.forEach(el => {
    // Set variables used in message
    let date = el[0];
    let close = el[4];
    let high = el[2];
    let low = el[3];
    outputMessage += `${date}: Closed at ${close} (${low} ~ ${high})
    `;
  });
  return outputMessage;
}

module.exports = printEOD;
