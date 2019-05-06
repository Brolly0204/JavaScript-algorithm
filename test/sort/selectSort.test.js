import selectSort from '../../code/sort/selectSort'

const input = [10, 2, 1, 9]
const output = [1, 2, 9, 10]
test('选择排序', () => {
  expect(selectSort(input)).toEqual(output)
})
