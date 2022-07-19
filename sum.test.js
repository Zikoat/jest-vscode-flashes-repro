const sum = require('./sum');

test('adds 1 + 2 to equal 3', async () => {
  await new Promise(r => setTimeout(r, 4000));
  expect(sum(1, 2)).toBe(3);
});
