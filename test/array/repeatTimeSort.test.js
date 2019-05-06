import repeatTimeSort from '../../code/array/repeatTimeSort'

const input = [1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]
const output = [3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
const input2 = [11, 12, 13, 11, 11, 13]
const output2 = [12, 13, 13, 11, 11, 11]
test('repeatTimeSort', () => {
  expect(repeatTimeSort(input)).toEqual(output)
  expect(repeatTimeSort(input2)).toEqual(output2)
})
