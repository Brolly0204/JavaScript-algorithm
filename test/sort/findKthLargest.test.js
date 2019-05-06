import findKthLargest from '../../code/sort/findKthLargest'

const input = [3, 2, 1, 5, 6, 4]
const output = 5
test('215. 数组中的第K个最大元素', () => {
  expect(findKthLargest(input, 2)).toBe(output)
})
