// Import needed files
const lillium = require("./index");
const readline = require("readline");
require('colors');


// Define needed shortcuts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Greeting the user & Input Logic
console.log(`Lillium.js executed!`.black.bgWhite)
console.log(`
Welcome to the Lillium Analyzer in Node.js by Jason Simms v1.0`.bold.blue)
console.log(`

Usage: Prompts will follow, have your API key handy or complete config.js.

Since API source is free to use I have included my key in config.js for your comfort. Just press X as suggested below!

**Leaving Start Date blank will return all data available!
**Leaving End Date blank will return all data up to today!
**Not all stock symbols are available on QUANDL EOD, check for proper stock tickers:
https://www.quandl.com/data/EOD-End-of-Day-US-Stock-Prices
`.blue);

rl.question("Enter a valid stock symbol: ", arg1 => {
  rl.question("Enter a Start Date as YYYY-MM-DD: ", arg2 => {
    rl.question("Enter a End Date as YYYY-MM-DD: ", arg3 => {
      rl.question(
        `Enter your Quandl API key or X to use config.QuandlKey stored key: 
      `,
        arg4 => {
          if (arg4.toLowerCase() === "x") {
            const config = require("./config");
            if(config.QuandlKey!=="Insert Your API Key Here")arg4 = config.QuandlKey;
            else console.log(`Insert your api key in the config file`)
          }
          if (!arg4 || !arg1) {
            console.log("Input incomplete! Please restart the program.");
          } else if (!dateValidation(arg2) || !dateValidation(arg3)) {
            console.log("Date input invalid! Please restart the program.");
          } else {
            lillium(arg1.trim(), arg2.trim(), arg3.trim(), arg4.trim());
          }
          rl.close();
        }
      );
    });
  });
});


// Validate Date Input format using Regex
function dateValidation(str){
    if(!str) return true   
    if(str.length>0){
        const dateRGEX = /^([12][0-9]{3})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/
        return dateRGEX.test(str.trim())
    }
}