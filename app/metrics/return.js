// Function prints Return on investment
function rateOfReturn(arrStart, arrEnd) {
    let ror = arrEnd[4] - arrStart[4];
    let rorPercent = (ror / arrStart[4]) * 100;
    rorOutputString = `Return: $${ror.toFixed(2)} [${rorPercent.toFixed(1)}%] ( ${
      arrStart[4]
    } on ${arrStart[0]} -> ${arrEnd[4]} on ${arrEnd[0]} )
    `;
    // console.log(rorOutputString);
    return(rorOutputString);

  }

  module.exports = rateOfReturn