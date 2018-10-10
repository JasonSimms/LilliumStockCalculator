const dailyDrawdown = require("../app/metrics/drawdown");
const testData = require('./testData')
const testData2 = testData.testData2

test(`Empty data array returns empty message`, () => {
  expect(dailyDrawdown([])).toBe("DrawDowns: Data Sent Empty")
});

test(`dailyDrawdown returns an object`, () => {
  expect(typeof(dailyDrawdown(testData2))).toBe(`object`)
});


test('dailyDrawdown calculates Maximum Drawdown?', () => {
  expect(dailyDrawdown(testData2)).toHaveProperty("maximumDrawDown.drawDown", -1.3)
});

test('dailyDrawdown meets expectations', () => {
  expect(dailyDrawdown(testData2)).toMatchObject({"drawDownArr": [{"drawDown": -0.9, "pDate": "2018-01-02", "peak": 139.95, "tDate": "2018-01-02", "trough": 138.72}, {"drawDown": -1.3, "pDate": "2018-01-03", "peak": 140.68, "tDate": "2018-01-03", "trough": 138.9}, {"drawDown": -0.7, "pDate": "2018-01-04", "peak": 141.14, "tDate": "2018-01-04", "trough": 140.22}, {"drawDown": -1.1, "pDate": "2018-01-05", "peak": 141.82, "tDate": "2018-01-05", "trough": 140.281}], "maximumDrawDown": {"drawDown": -1.3, "pDate": "2018-01-03", "peak": 140.68, "tDate": "2018-01-03", "trough": 138.9}}
);
});
