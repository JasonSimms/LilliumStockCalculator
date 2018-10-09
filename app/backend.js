const axios = require("axios");

// Function prints Return on investment
function RoiCalc(arrStart, arrEnd) {
  let roi = arrStart[4] - arrEnd[4];
  // console.log(`start`, arrStart[4],`end`,arrEnd[4])
  let roiPercent = (roi / arrStart[4]) * 100;
  outputString = `Return: ${roi.toFixed(2)} (${roiPercent.toFixed(
    1
  )}%) in the range of ${arrStart[0]} - ${arrEnd[0]}`;
  console.log(outputString);
}

// Function prints Daily Drawdown & Max Drawdown
// Drowdowns occur only when a new peak is reached
// Consider pushing drawdowns to an array.
function dailyDrawdown(arr) {
  arr = arr.reverse();
  console.log(`Daily Drawdowns:`);
  let peak = 0;
  let peakDate;
  let maxDD = { drawdown: 0, peak: 0, pDate: 0, trough: 0, tDate: 0 };
  arr.forEach(el => {
    if (el[2] > peak) {
      peak = el[2];
      peakDate = el[0];
    }
      let drawDown = Math.min(0,(((el[3] - peak) / peak) * 100).toFixed(1));
      let date = el[0];
      outputString = `${drawDown}% for (Peak: ${peak} on ${peakDate} - Low:${
        el[3]
      } on ${date})`;
      console.log(outputString);
      if (drawDown < maxDD.drawdown)
        maxDD = {
          drawdown: Number(drawDown),
          peak: peak,
          peakDate: peakDate,
          trough: el[3],
          troughDate: el[0]
        };
  });
  console.log(`Maximum Drawdown: `,maxDD);
}



// Function requests price data using variables provided by user
module.exports = function Lillium(stock, dayInit, dayEnd, key) {
  let data = [];
  // stock=stock.toString()
  axios
    .get(
      `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&api_key=${key}`
    )
    .then(function(response) {
      data = response.data.dataset.data;
      RoiCalc(data[0], data[data.length - 1]);
      dailyDrawdown(data);

      // console.log(data);
      console.log(`-------------all done here------------`);
    })
    .catch(function(error) {
      console.log(error);
    });
};
