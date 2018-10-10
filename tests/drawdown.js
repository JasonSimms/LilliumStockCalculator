// NEEDS TO BE ADJUSTED FOR NEW OUTPUT FROM metrics/DRAWDOWN.js

const dailyDrawdown = require("../app/metrics/drawdown");
const testData = require('./testData')
const testData1 = testData.testData1
const testData2 = testData.testData2

test(`Empty data array returns empty message`, () => {
  expect(dailyDrawdown([])).toBe("DrawDowns: Data Sent Empty")
});

test(`dailyDrawdown returns a string`, () => {
  expect(typeof(dailyDrawdown(testData2))).toBe(`string`)
});

test('dailyDrawdown prints a title string', () => {
  expect(dailyDrawdown(testData2)).toMatch(/Maximum Drawdown:/);
});

test('dailyDrawdown calculates Maximum Drawdown?', () => {
  expect(dailyDrawdown(testData2)).toMatch(/Drawdown: -1.3%/);
});

test('dailyDrawdown prints peaks before troughs?', () => {
  expect(dailyDrawdown(testData2)).toMatch(/140.68 on 2018-01-03 -> 138.9 on 2018-01-03/);
});
