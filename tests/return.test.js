
const rateOfReturn = require("../app/metrics/return");
const testData = require("./testData");
const testData1 = testData.testData1;
const testData2 = testData.testData2;

test(`Empty data array returns empty message`, () => {
  expect(rateOfReturn([])).toBe("Rate of Return: Data Sent Empty");
});

test(`rateOfReturn returns an object`, () => {
  expect(typeof rateOfReturn(testData1)).toBe(`object`);
});

test("rateOfReturn calculates Rate of Return?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("return", 2.480000000000018);
});

test("rateOfReturn calculates Rate of Return Percentage?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("returnP", 1.7812253106370886);
});

test("rateOfReturn finds the endDate?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("endDate", "2018-01-05");
});

test("rateOfReturn knows the endPrice?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("endPrice", 141.71);
});

test("rateOfReturn knows the startDate?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("startDate", "2018-01-02");
});

test("rateOfReturn knows the startPrice?", () => {
  expect(rateOfReturn(testData2)).toHaveProperty("startPrice", 139.23);
});
