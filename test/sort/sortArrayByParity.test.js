import sortArrayByParity from '../../code/sort/sortArrayByParity'

const input = [4, 2, 5, 7]
const output = [2, 5, 4, 7]
test('922. 按奇偶排序数组 II', () => {
  expect(sortArrayByParity(input)).toEqual(output)
})
