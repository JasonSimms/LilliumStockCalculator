// This is the back-end control center of Lillium.
// 1. First call the API and
// 2. Use metrics to create a data object.
// 3. Use results object to build an output.
const axios = require("axios");
const rateOfReturn = require("./metrics/return");
const dailyDrawdown = require("./metrics/drawdown");
const terminalMessage = require("./terminal_msg");
require("colors");

// Function requests price data using variables provided by user
module.exports = function Lillium(stock, dayInit, dayEnd, key) {
  // const apiUrl = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&order=asc&api_key=${key}`
  const apiUrl = `https://www.quandl.com/api/v3/datasets/EOD/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&order=asc&api_key=${key}`;
  axios
    .get(apiUrl)
    .then(function(response) {
      const data = response.data.dataset.data;
      if (data.length === 0)
        console.log(
          `Source has no price data for this time range try before 2018-03-27`
        );
      if (data.length > 0) {
        const results = {
          ror: rateOfReturn(data),
          dds: dailyDrawdown(data),
          raw: data
        };
        console.time("Execution time");
        console.log(`-------------Begin Data for ${stock}------------`.grey);
        console.log(terminalMessage(results));
        console.log(`-------------End of Data for ${stock}------------`.grey);
        console.timeEnd(`Execution time`);
      }
    })
    .catch(function(error) {
      console.log(error.message, error.response.data.quandl_error);
    });
};
