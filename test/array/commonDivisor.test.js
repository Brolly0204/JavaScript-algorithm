import gcd from '../../code/array/commonDivisor'

test('commonDirvisor: 最大公约数', () => {
  expect(gcd(12, 6)).toBe(6)
  expect(gcd(6, 9)).toBe(3)
})
