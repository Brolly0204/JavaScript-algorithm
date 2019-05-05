import isMatch from '../../code/regexp/isMatch'

test('10. 正则表达式匹配', () => {
  expect(isMatch('aa', 'a')).toBe(false)
  expect(isMatch('aa', 'a*')).toBe(true)
  expect(isMatch('aab', 'c*a*b')).toBe(true)
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})
