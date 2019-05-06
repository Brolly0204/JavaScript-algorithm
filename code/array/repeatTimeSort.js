/**
 * 根据数组中数字重复出现的次数排序
 * 输入：[1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]
 * 输出：[3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
 */

const repeatTimeSort = arr => {
  arr.sort((a, b) => a - b)
  let ary = []
  while (arr.length > 0) {
    let a = arr[0]
    let start = arr.indexOf(a)
    let end = arr.lastIndexOf(a) + 1
    ary.push(arr.splice(start, end - start))
    // ary.push(arr.slice(start, end))
    // arr = arr.splice(end)
  }
  ary.sort((a, b) => a.length - b.length)
  return ary.reduce((prev, cur) => prev.concat(cur), [])
}

// [ 12, 13, 13, 11, 11, 11 ]
console.log(repeatTimeSort([11, 12, 13, 11, 11, 13]))
// [ 3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2 ]
console.log(repeatTimeSort([1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]))

export default repeatTimeSort
