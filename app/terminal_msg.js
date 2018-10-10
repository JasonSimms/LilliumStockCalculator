// Prepares a console message string to print to terminal
const printEOD = require("./metrics/EODprint");

function terminalMessage(arr) {
  // Build Return String
  let returnMessage = `Return: $${arr.ror.return.toFixed(
    2
  )} [${arr.ror.returnP.toFixed(1)}%] ( ${arr.ror.startPrice} on ${
    arr.ror.startDate
  } -> ${arr.ror.endPrice} on ${arr.ror.endDate} )
    `;

  // Build Max Drawdown String
  let maximumDrawDownMessage = `Maximum Drawdown: ${
    arr.dds.maximumDrawDown.drawDown
  }% (${arr.dds.maximumDrawDown.peak} on ${arr.dds.maximumDrawDown.pDate} -> ${
    arr.dds.maximumDrawDown.trough
  } on ${arr.dds.maximumDrawDown.tDate})
  `;

  // Build drawdown String
  let limit = Math.min(3, arr.dds.drawDownArr.length);
  let firstDDMessage = `First Drawdowns: ` + "\n";
  for (let i = 0; i < limit; i++) {
    firstDDMessage +=
      `${arr.dds.drawDownArr[i].drawDown}% (${arr.dds.drawDownArr[i].peak} on ${
        arr.dds.drawDownArr[i].pDate
      } -> ${arr.dds.drawDownArr[i].trough} on ${
        arr.dds.drawDownArr[i].tDate
      })` + "\n";
  }

  // Build price history String
  const historyMessage = printEOD(arr.raw);
  //   const historyMessage = "\n"

  // Assemble and return
  const outputMessage =
    returnMessage +
    "\n" +
    maximumDrawDownMessage +
    "\n" +
    firstDDMessage +
    "\n" +
    historyMessage;
  return outputMessage;
}
module.exports = terminalMessage;
