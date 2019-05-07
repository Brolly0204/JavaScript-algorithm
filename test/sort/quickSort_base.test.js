import quickSort from '../../code/sort/quickSort_base'

test('快速排序基础版', () => {
  expect(quickSort([6, 5, 9, 2, 1, 7])).toEqual([1, 2, 5, 6, 7, 9])
})
