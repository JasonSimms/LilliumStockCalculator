const axios = require('axios');

// Function prints Return on investment
function RoiCalc(arrStart,arrEnd){
  let roi = arrStart[4]-arrEnd[4]
  // console.log(`start`, arrStart[4],`end`,arrEnd[4])
  let roiPercent= roi/arrStart[4]*100
  outputString = `Return: ${roi.toFixed(2)} (${roiPercent.toFixed(1)}%) in the range of ${arrStart[0]} - ${arrEnd[0]}`
  console.log(outputString)
}

// Function prints Daily Drawdown
// Drowdowns occur only when a new peak is reached
function dailyDrawdown(arr){
  arr = arr.reverse();
  console.log(`Daily Drawdowns:`)
  let peak = 0;
  let peakDate;
  arr.forEach(el => {
    if(el[2]>peak) {
      peak = el[2]
      peakDate = el[0]
      let drawDown = (el[3]-peak)/peak*100;
      let date = (el[0])
      console.log(`${drawDown.toFixed(1)}% for (Peak: ${peak} on ${peakDate} - Low:${el[3]} on ${date}`)
    }
  });

}

//  Function prints Max Drawdown



// Function requests price data using variables provided by user
module.exports= function Lillium(stock,dayInit,dayEnd,key){
    let data = []
    // stock=stock.toString()
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&api_key=${key}`)
  .then(function (response) {
data = response.data.dataset.data
RoiCalc(data[0],data[data.length-1])
dailyDrawdown(data)    

// console.log(data);
    console.log(`-------------all done here------------`)
  })
  .catch(function (error) {
    console.log(error);
  })
}