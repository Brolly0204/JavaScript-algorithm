import grayCode from '../../code/array/grayCode'

test('89.格雷编码', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2])
  expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
})
