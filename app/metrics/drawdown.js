// Function  prints Max Drawdown and array of daily drawdowns

//QUANDL presents stock information in an array [date, open, high, low, close,...]
//To use other sources adjust variables line 12 - 14.
function dailyDrawdown(arr) {
  if (arr.length === 0) {
    return "DrawDowns: Data Sent Empty";
  } else {
    let peak = 0;
    let peakDate;
    let trough = arr[0][3];
    let troughDate;
    let drawDownArr = [];
    let maximumDrawDown = { drawDown: 0 };
    arr.forEach(el => {
      // Quandl Data Api returns an array of [Date, Open, High, Low, Close]
      let dayHigh = el[2];
      let date = el[0];
      let dayLow = el[3];
      let newPeak = false;
      let newTrough = false;
      // Cases for a new Drawdown are a fall from a new peak or a lower trough.
      if (dayHigh > peak) {
        peak = dayHigh;
        peakDate = date;
        newPeak = true;
      }
      if (dayLow < trough) {
        trough = dayLow;
        troughDate = date;
        newTrough = true;
      }
      // Calculate drawDown and push to the array
      let drawDown = Math.min(0, (((dayLow - peak) / peak) * 100).toFixed(1));
      if (newPeak || drawDownArr.length === 0) {
        drawDownArr.push({
          drawDown: Number(drawDown),
          peak: peak,
          pDate: peakDate,
          trough: dayLow,
          tDate: date
        });
      } else if (!newPeak && newTrough) {
        drawDownArr.pop();
        drawDownArr.push({
          drawDown: Number(drawDown),
          peak: peak,
          pDate: peakDate,
          trough: dayLow,
          tDate: date
        });
      }

      // Save the maximum drawdown
      if (drawDown < maximumDrawDown.drawDown)
        maximumDrawDown = {
          drawDown: Number(drawDown),
          peak: peak,
          pDate: peakDate,
          trough: dayLow,
          tDate: date
        };
    });

    const ddOutput = {
      maximumDrawDown: maximumDrawDown,
      drawDownArr: drawDownArr,
    }

    return ddOutput
  }
}

module.exports = dailyDrawdown;
