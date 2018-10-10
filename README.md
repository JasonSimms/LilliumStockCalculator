# Lillium Stock Calculator
A technical challenge to call stock prices and present requested analysis.

Evaluated with code controls from DeepScan : 
[![DeepScan grade](https://deepscan.io/api/projects/3366/branches/29890/badge/grade.svg)](https://deepscan.io/dashboard#view=project&pid=3366&bid=29890)

### To USE:
1. clone this repository
2. $ cd LilliumStockCalculator && npm install
3. $ node app/lillium.js or $ node app/lillium_hardCoded.js for repeated use or multiple stocks.
4. Check console for a lovely printout!

Requirements: Node.js & Npm & Internet Connection
___
### Testing: 
$ npm test

## Tasks:
Calculate Return of Stock and Max Drawdown in that range.

Display Stock End of Day Prices for every day in given range with high and low.

Calculate Drawdown for each day

## Example Output:
-------------Begin Data for aapl------------

Return: $2.74 [1.6%] ( 172.26 on 2018-01-02 -> 175 on 2018-01-05 )

Maximum Drawdown: -1.8% (172.3 on 2018-01-02 -> 169.26 on 2018-01-02)

First 3 Drawdowns:
-1.8% (172.3 on 2018-01-02 -> 169.26 on 2018-01-02)

-1.5% (174.55 on 2018-01-03 -> 171.96 on 2018-01-03)

-1.3% (175.37 on 2018-01-05 -> 173.05 on 2018-01-05)

Daily Price Performance:

2018-01-02: Closed at 172.26 (169.26 ~ 172.3)

2018-01-03: Closed at 172.23 (171.96 ~ 174.55)

2018-01-04: Closed at 173.03 (172.08 ~ 173.47)

2018-01-05: Closed at 175 (173.05 ~ 175.37)

-------------End of Data for aapl------------

Execution time: 1.167ms

## NOTES
* Displayed Dates are in QUANDL-friendly format.  Output for the printout message could be achieved using Moment.JS formatting but was ommitted for speed.
* Minification or Uglifying could also improve execution speed.