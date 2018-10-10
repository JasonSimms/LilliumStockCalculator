// Function prints Return on investment

//QUANDL presents stock information in an array [date, open, high, low, close,...]
//To use other sources adjust variables line 5 - 8.
function rateOfReturn(arr) {
  if (arr.length === 0) {
    return "Rate of Return: Data Sent Empty";
  } else {
    // Data needed for calculations and message
    let endPrice = arr[arr.length - 1][4];
    let endDate = arr[arr.length - 1][0];
    let startPrice = arr[0][4];
    let startDate = arr[0][0];

    // Calculate Return & Return %
    let ror = endPrice - startPrice;
    let rorPercent = (ror / startPrice) * 100;

    rorOutput = {
      return: ror,
      returnP: rorPercent,
      startDate: startDate,
      startPrice: startPrice,
      endDate: endDate,
      endPrice: endPrice
    }

    return rorOutput

   
  }
}

module.exports = rateOfReturn;
