const renameMe = require('./rename-me');

test('renameMe() - Returns a count of each character in a string', () => {
  const x = 'p823j98fh89ahf9sd8h0afsd'
  const y = { "8": 4, "2": 1, "3": 1, "9": 3, "0": 1}
  expect(renameMe(x)).toEqual(y);
});