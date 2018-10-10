// NEEDS TO BE REWRITTEN TO SUPPORT NEW OUTPUTS FROM metrics/return.js

const rateOfReturn = require("../app/metrics/return");
const testData = require('./testData')
const testData1 = testData.testData1
const testData2 = testData.testData2

test(`Empty data array returns empty message`, () => {
  expect(rateOfReturn([])).toBe("Rate of Return: Data Sent Empty")
});

test(`rateOfReturn returns a string`, () => {
  expect(typeof(rateOfReturn(testData1))).toBe(`string`)
});

test('rateOfReturn prints a string beginning with "Return:"', () => {
  expect(rateOfReturn(testData1)).toMatch(
    /Return:/
  );
});

test('rateOfReturn calculates Rate of Return?', () => {
  expect(rateOfReturn(testData2)).toMatch(/2.48/);
});

test('rateOfReturn calculates Rate of Return Percentage?', () => {
  expect(rateOfReturn(testData2)).toMatch(/1.8%/);
});

test('rateOfReturn calculates on first and last data in array?', () => {
  expect(rateOfReturn(testData2)).toMatch(/2018-01-02 ->/);
});
