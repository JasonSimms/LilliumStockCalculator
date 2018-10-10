// Print stock prices for time range based on axios response from QUANDL.

//QUANDL presents stock information in an array [date, open, high, low, close,...]
//To use other sources adjust variables wherever arr or el are referenced.
function printEOD(arr) {
  if (arr.length === 0) {
    return "Price Performance: Data Sent Empty";
  } else {
    let outputMessage = `Daily Price Performance: `+"\n";
    // Collapse Price array if it is not in our interests to print
    if (arr.length > 50) {
      arr = [arr[0], arr[arr.length - 1]];
      outputMessage = `Daily Price Performance: Data Collapsed for printing purposes...`+"\n";
    }
    arr.forEach(el => {
      // Set variables used in message
      let date = el[0];
      let close = el[4];
      let high = el[2];
      let low = el[3];
      outputMessage += `${date}: Closed at ${close} (${low} ~ ${high})`;
      outputMessage += "\n";
    });
    return outputMessage;
  }
}

module.exports = printEOD;
