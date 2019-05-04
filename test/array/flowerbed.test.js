import canPlaceFlowers from '../../code/array/flowerbed.js'

test('种花问题', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})
