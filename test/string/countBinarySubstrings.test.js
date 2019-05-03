import countBinarySubstrings from '../../code/string/countBinarySubstrings'

const input = '00110011'
// [ '0011', '01', '1100', '10', '0011', '01' ]
const output = 6

test('countBinarySubstrings: "00110011"', () => {
  expect(countBinarySubstrings(input)).toBe(output)
})
