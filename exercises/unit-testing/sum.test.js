const sum = require('./sum.js')


test('adds 1 ad 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
}) 

test('argumants given are numbers', () => {
  expect(sum('h', 3)).toBe('you must provide 2 numerical values')
})
console.log(sum())