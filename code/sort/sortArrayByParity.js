/**
 * 922. 按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */

// const sortArrayByParity = A => {
//   let odd = []
//   let even = []
//   let len = A.length
//   A.sort((a, b) => a - b)
//   for (let i = 0; i < len; i++) {
//     let a = A[i]
//     a % 2 ? odd.push(a) : even.push(a)
//   }
//   let res = []
//   for (let i = 0; i < len; i++) {
//     res.push(i % 2 ? odd.shift() : even.shift())
//   }
//   return res
// }

const sortArrayByParity = A => {
  let res = []
  let odd = 1
  let even = 0
  A.sort((a, b) => a - b)
  A.forEach(item => {
    if (item % 2) {
      res[odd] = item
      odd += 2
    } else {
      res[even] = item
      even += 2
    }
  })
  return res
}

// console.log(sortArrayByParity([4, 2, 5, 7]))
export default sortArrayByParity
