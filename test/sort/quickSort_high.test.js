import quickSort from '../../code/sort/quickSort_high'

test('快速排序高级', () => {
  expect(quickSort([5, 9, 7, 8, 3, 6, 1])).toEqual([1, 3, 5, 6, 7, 8, 9])
  expect(quickSort([15, 9, 17, 8, 3, 16, 1])).toEqual([1, 3, 8, 9, 15, 16, 17])
})
