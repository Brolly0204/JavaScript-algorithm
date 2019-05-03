import letterCombinations from '../../code/array/letterCombinations'

const input = '23'
const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

test("letterCombinations: '23'", () => {
  expect(letterCombinations(input)).toEqual(output)
})
