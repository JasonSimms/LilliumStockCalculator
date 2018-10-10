const rateOfReturn = require("../app/metrics/return");

//QUANDL presents stock information in an array [date, open, high, low, close,...]

testData1 = [
  ["2015-05-28", 9.58, 10.17, 12.96],
  ["2015-05-27", 9.53, 10.13, 12.97],
  ["2015-05-26", 9.53, 10.11, 12.98]
];

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test(`rateOfReturn returns a string`, () => {
  expect(typeof(rateOfReturn(testData1))).toBe(`string`)
});

test('rateOfReturn prints a string beginning with "Return:"', () => {
  expect(rateOfReturn(testData1)).toMatch(
    /Return:/
  );
});
