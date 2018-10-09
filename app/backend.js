const axios = require("axios");


// Function prints Return on investment
function rateOfReturn(arrStart, arrEnd) {
  let ror = arrEnd[4] - arrStart[4];
  let rorPercent = (ror / arrStart[4]) * 100;
  rorOutputString = `Return: $${ror.toFixed(2)} [${rorPercent.toFixed(1)}%] ( ${
    arrStart[4]
  } on ${arrStart[0]} -> ${arrEnd[4]} on ${arrEnd[0]} )`;
  console.log(rorOutputString);
}

// Function  prints Max Drawdown and array of daily drawdowns
// Drowdowns occur only when a new peak is reached
function dailyDrawdown(arr) {
  let peak = 0;
  let peakDate;
  let ddArr = [];
  let maxDD = {drawdown: 0};
  arr.forEach(el => {
    if (el[2] > peak) {
      peak = el[2];
      peakDate = el[0];
    }
    let drawDown = Math.min(0, (((el[3] - peak) / peak) * 100).toFixed(1));
    ddArr.push({
      drawdown: Number(drawDown),
      peak: peak,
      pDate: peakDate,
      trough: el[3],
      tDate: el[0]
    });

    // store maximum drawdown
    if (drawDown < maxDD.drawdown)
      maxDD = {
        drawdown: Number(drawDown),
        peak: peak,
        pDate: peakDate,
        trough: el[3],
        tDate: el[0]
      };
  });
maxDDOutput = `
Maximium Drawdown: ${maxDD.drawdown}% (${maxDD.peak} on ${maxDD.pDate} -> ${maxDD.trough} on ${maxDD.tDate})
`
firstThreeDDOutput = `First 3 Drawdowns: 
${ddArr[0].drawdown}% (${ddArr[0].peak} on ${ddArr[0].pDate} -> ${ddArr[0].trough} on ${ddArr[0].tDate})
${ddArr[1].drawdown}% (${ddArr[1].peak} on ${ddArr[1].pDate} -> ${ddArr[1].trough} on ${ddArr[1].tDate})
${ddArr[2].drawdown}% (${ddArr[2].peak} on ${ddArr[2].pDate} -> ${ddArr[2].trough} on ${ddArr[2].tDate})
`
  console.log(maxDDOutput);
  console.log(firstThreeDDOutput);
}

// Print stock prices for time range
function printEOD(arr) {
  arr.forEach(el => {
    console.log(`${el[0]}: Closed at ${el[4]} (${el[3]} ~ ${el[2]})`);
  });
}

// Function requests price data using variables provided by user
module.exports = function Lillium(stock, dayInit, dayEnd, key) {
const apiUrl = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&order=asc&api_key=${key}`
  axios
    .get(
      apiUrl
    )
    .then(function(response) {
      const data = response.data.dataset.data;
      if (data.length === 0)
        console.log(
          `Source has no price data for this time range try before 2018-03-27`
        );
      if (data.length > 0) {
        console.log(`-------------Begin Data for ${stock}------------`);
        rateOfReturn(data[0], data[data.length - 1]);
        dailyDrawdown(data);
        printEOD(data);
        console.log(`-------------End of Data for ${stock}------------`);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
