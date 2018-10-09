const axios = require("axios");
const rateOfReturn = require("./metrics/return")
const dailyDrawdown = require("./metrics/drawdown")
const printEOD = require("./metrics/EODprint")

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
