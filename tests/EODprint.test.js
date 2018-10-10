const EODprint = require("../app/metrics/EODprint");
const testData = require('./testData')
const testData1 = testData.testData1
const testData2 = testData.testData2

test(`Empty data array returns empty message`, () => {
  expect(EODprint([])).toBe("Price Performance: Data Sent Empty")
});

test(`EODprint returns a string`, () => {
  expect(typeof(EODprint(testData1))).toBe(`string`)
});

test('EODprint prints a title string', () => {
  expect(EODprint(testData1)).toMatch(/Daily Price Performance:/);
});

test('EODprint prints Date,Close', () => {
  expect(EODprint(testData2)).toMatch(/2018-01-02: Closed at 139.23/);
});

test('EODprint prints Date,Close', () => {
  expect(EODprint(testData2)).toMatch(/138.72 ~ 139.95/);
});

