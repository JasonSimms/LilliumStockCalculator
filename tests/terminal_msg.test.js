const terminalMessage = require("../app/terminal_msg");
const testData = require('./testData')
const testData3 = testData.testData3


test(`terminalMessage returns a string`, () => {
  expect(typeof(terminalMessage(testData3))).toBe(`string`)
});

test('terminalMessage prints a string beginning with "Return:"', () => {
  expect(terminalMessage(testData3)).toMatch(
    /Return:/
  );
});

test('terminalMessage includes Return?', () => {
  expect(terminalMessage(testData3)).toMatch(/2.74/);
});

test('terminalMessage includes Rate of Return Percentage?', () => {
  expect(terminalMessage(testData3)).toMatch(/1.8%/);
});

test('terminalMessage calculates on first and last data in array?', () => {
  expect(terminalMessage(testData3)).toMatch(/2018-01-02 ->/);
});
