/**
 * 根据数组中数字重复出现的次数排序
 * 输入：[1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]
 * 输出：[3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
 */

const repeatTimeSort = arr => {
  arr.sort((a, b) => a - b)
  const map = arr.join('').match(/(\d)\1*/g)
  map.sort((a, b) => a.length - b.length)
  return map
    .join('')
    .split('')
    .map(Number)
}

// console.log(repeatTimeSort([1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]))
export default repeatTimeSort
