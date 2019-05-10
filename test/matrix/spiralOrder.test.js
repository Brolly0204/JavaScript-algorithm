import spiralOrder from '../../code/matrix/spiralOrder'

let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
let output = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

let input2 = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
let output2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

test('54.螺旋矩阵', () => {
  expect(spiralOrder(input)).toEqual(output)
  expect(spiralOrder(input2)).toEqual(output2)
})
