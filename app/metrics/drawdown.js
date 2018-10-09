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
  maxDDOutput = `Maximium Drawdown: ${maxDD.drawdown}% (${maxDD.peak} on ${maxDD.pDate} -> ${maxDD.trough} on ${maxDD.tDate})
  `
  firstThreeDDOutput = `First 3 Drawdowns: 
  ${ddArr[0].drawdown}% (${ddArr[0].peak} on ${ddArr[0].pDate} -> ${ddArr[0].trough} on ${ddArr[0].tDate})
  ${ddArr[1].drawdown}% (${ddArr[1].peak} on ${ddArr[1].pDate} -> ${ddArr[1].trough} on ${ddArr[1].tDate})
  ${ddArr[2].drawdown}% (${ddArr[2].peak} on ${ddArr[2].pDate} -> ${ddArr[2].trough} on ${ddArr[2].tDate})
  `
    console.log(maxDDOutput);
    console.log(firstThreeDDOutput);
  }

  module.exports = dailyDrawdown
