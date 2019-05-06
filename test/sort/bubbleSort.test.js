import bubbleSort from '../../code/sort/bubbleSort'

test('冒泡排序', () => {
  expect(bubbleSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4])
})
