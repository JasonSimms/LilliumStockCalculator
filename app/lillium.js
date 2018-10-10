// Import needed files
const lillium = require("./index");
const readline = require("readline");


// Define variables
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Greeting the user & Input Logic
console.log(`
Lillium.js

Welcome to the Lillium Analyzer in Node.js v1.0

Usage: Prompts will follow, have your API key handy or create a config file.

**Leaving Start Date blank will return all data available!
**Leaving End Date blank will return all data up to today!
`);

rl.question("Enter a valid stock symbol: ", arg1 => {
  rl.question("Enter a Start Date as YYYY-MM-DD: ", arg2 => {
    rl.question("Enter a End Date as YYYY-MM-DD: ", arg3 => {
      rl.question(
        `Enter your Quandl API key or X to use config.QuandlKey stored key: 
      `,
        arg4 => {
          if (arg4.toLowerCase() === "x") {
            const config = require("./config");
            arg4 = config.QuandlKey;
          }
          if (!arg4 || !arg1) {
            console.log("Input incomplete! Please restart the program.");
          } else if (!dateValidation(arg2) || !dateValidation(arg3)) {
            console.log("Date input invalid! Please restart the program.");
          } else {
            lillium(arg1, arg2, arg3, arg4);
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
        return dateRGEX.test(str)
    }
}