import repeatSubStringPattern from '../../code/regexp/repeatedSubstringPattern'

test('459. 重复的子字符串', () => {
  expect(repeatSubStringPattern('ababab')).toBe(true)
  expect(repeatSubStringPattern('aba')).toBe(false)
})
