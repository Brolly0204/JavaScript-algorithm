import { factorial1, factorial2 } from '../../code/recur/factorial'

test('阶乘', () => {
  expect(factorial1(3)).toBe(6)
  expect(factorial2(3)).toBe(6)
  expect(factorial1(5)).toBe(120)
  expect(factorial2(5)).toBe(120)
})
