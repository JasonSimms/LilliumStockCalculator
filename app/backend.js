const axios = require('axios');


module.exports= function Lillium(stock,dayInit,dayEnd,key){
    let data = []
    // stock=stock.toString()
    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=${dayInit}&end_date=${dayEnd}&api_key=${key}`)
  .then(function (response) {
data = response.data.dataset.data
    console.log(data);
    console.log(`all done here`)
  })
  .catch(function (error) {
    console.log(error);
  })
}